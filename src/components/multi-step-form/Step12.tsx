import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import api from '@/lib/api';
import Image from 'next/image';
import logo from '@/assets/images/Logo_Energia_Seguridade_2 1.png';

const formatCurrency = (value: any) => {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formattedValue;
};

export function Step12() {
  const {
    onHandleNext,
    onHandleBack,
    setFormData,
    formData,
    hash,
    setUrlContrato,
    setUrlBoleto,
  } = useFormState();
  const { register, handleSubmit } = useForm({
    defaultValues: formData || { totalColaboradores: 0 },
  });

  const [loading, setloading] = useState(false);
  const [coberturas, setCoberturas] = useState([]);
  const [valor, setValor] = useState('0');
  const [valSemF, setValSemF] = useState(0.0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      api
        .get('/csprime/coletivo/coberturas')
        .catch((err) => {
          console.log(err);
        })
        .then((res: any) => {
          const coberturasMapeadas = res?.data!.map((cobertura: any) => ({
            label: cobertura.descricao,
            value: cobertura.valor,
          }));
          setCoberturas(coberturasMapeadas);
        });
      api
        .get('/csprime/coletivo/preco')
        .catch((err) => {
          console.log(err);
        })
        .then((res: any) => {
          setValor(res?.data.valorFormatado);
          setValSemF(res?.data.valor);
        });
    }
  }, []);

  const onHandleFormSubmit = async (data: any) => {
    onHandleNext(2);
  };

  const handleBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onHandleBack();
  };

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex w-full justify-center items-center"
    >
      <div className="flex flex-col max-w-[70vw] md:max-w-[380px] mx-auto">
        <div className="flex items-center justify-center my-6">
          <Image src={logo} alt="Logo" width={77} height={83} />
        </div>

        <label className="flex items-center justify-center text-center mb-4 text-white font-bold text-lg uppercase bg-[#F9AB35] rounded-xl px-4 py-2 mb-4">
          RESUMO DA CONTRATAÇÃO
        </label>
        <p
          className="mt-10 text-black italic"
          style={{
            color: '#404040',
            fontFamily: 'Inter',
            fontSize: '20px',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: '27.5px',
            letterSpacing: '-0.56px',
            textAlign: 'center',
          }}
        >
          Cada vida terá direito ao seguinte benefício:
        </p>

        <div className="mt-4">
          {coberturas?.map((cobertura: any, index: number) => (
            <div
              key={index}
              style={{
                borderBottom: '1px solid #ccc',
                paddingBottom: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              className="mb-2"
            >
              <span
                className="font-medium text-[#6B7280] text-sm"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '100%',
                }}
              >
                {cobertura.label}:
              </span>
              <span
                className="text-[#F9AB35] font-semibold text-sm ml-2"
                style={{
                  color: '#F9AB35',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '100%',
                  textAlign: 'right',
                }}
              >
                {['Invalid. Perm. p/Acidente'].includes(cobertura.label)
                  ? 'até'
                  : null}{' '}
                {formatCurrency(cobertura.value)}
              </span>
            </div>
          ))}
        </div>
        <p
          style={{
            color: 'var(--gray-900, #111827)',
            fontFamily: 'Inter',
            fontSize: '22px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '24px',
          }}
          className="mt-5 mb-3"
        >
          Todos os benefícios acima por somente:
        </p>

        {valor != '0' ? (
          <div
            style={{
              flexShrink: 0,
              borderRadius: '10px',
              border: '1px solid #F9AB35',
              padding: '1rem',
              textAlign: 'left', // Alinhamento à esquerda
            }}
            className="px-4 pt-6 pb-2"
          >
            <span
              style={{
                color: '#F9AB35',
                fontFamily: 'Inter',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 800,
                lineHeight: '25.5px',
              }}
            >
              {valor}/
            </span>
            <span
              style={{
                color: '#F9AB35',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '25.5px',
                marginLeft: '2px',
              }}
            >
              mensais
            </span>
            <div
              style={{
                width: '100%',
                color: '#545454',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '24px',
                textAlign: 'left', // Alinhamento à esquerda
              }}
            >
              Para cada vida
            </div>
            <div
              style={{
                width: '100%',
                color: '#545454',
                fontFamily: 'Inter',
                fontSize: '10px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '12px',
                textAlign: 'left', // Alinhamento à esquerda
              }}
              className="mt-2"
            >
              *De acordo com as condições da apólice, verifique detalhes.
            </div>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
        <p
          style={{
            color: 'var(--gray-900, #111827)',
            fontFamily: 'Inter',
            fontSize: '22px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '24px',
          }}
          className="mt-5 mb-3"
        >
          Valor total do contrato:
        </p>
        {valor != '0' ? (
          <div
            style={{
              flexShrink: 0,
              borderRadius: '10px',
              border: '1px solid #F9AB35',
              padding: '1rem',
              textAlign: 'left', // Alinhamento à esquerda
            }}
            className="px-4 py-6 pb-2"
          >
            <span
              style={{
                color: '#F9AB35',
                fontFamily: 'Inter',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 800,
                lineHeight: '25.5px',
              }}
            >
              {(valSemF * formData.totalColaboradores).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
              /
            </span>
            <span
              style={{
                color: '#F9AB35',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '25.5px',
                marginLeft: '2px',
              }}
            >
              mensais
            </span>
            <div
              style={{
                width: '100%',
                color: '#545454',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '24px',
                textAlign: 'left', // Alinhamento à esquerda
              }}
            >
              Pagamento: via boleto bancário
            </div>
            <div
              style={{
                width: '100%',
                color: '#545454',
                fontFamily: 'Inter',
                fontSize: '10px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '12px',
                textAlign: 'left', // Alinhamento à esquerda
              }}
              className="mt-2"
            >
              *De acordo com as condições da apólice, verifique detalhes.
            </div>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
        <div className="flex justify-between mt-6">
          <button
            className="text-[#F9AB35] border border-[#F9AB35] rounded-lg px-6 py-2"
            type="button"
            onClick={handleBackClick}
          >
            Voltar
          </button>
          <button
            className="bg-[#F9AB35] text-white rounded-lg px-6 py-2"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Oval
                height={20}
                width={20}
                color="#fff"
                secondaryColor="#fff"
                ariaLabel="loading"
              />
            ) : (
              'QUERO CONTRATAR'
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
