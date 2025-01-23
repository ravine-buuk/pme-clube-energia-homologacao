import React, { useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';
import HCheckIcon from '../CheckIcon';

const MobileTableComponent = () => {
  const CheckIcon = HCheckIcon as any;

  const [coberturas, setCoberturas] = useState([]);
  const [valor, setValor] = useState('0');
  const [valSemF, setValSemF] = useState(0.0);

  useEffect(() => {
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
        if (res && res.data) {
          setValor(res.data.valorFormatado);
          setValSemF(res.data.valor);
        }
      });
  }, []);

  const formatCurrency = (value: any) => {
    if (isNaN(value)) return 'CONTRATADA';

    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

    return formattedValue;
  };

  return (
    <div className="flex md:hidden flex-col">
      <div className="bg-[#F3F4F6] w-full flex justify-center flex-col">
        <div className="flex flex-col gap-6 mt-11 mb-8 mx-10">
          <h5 className="text-center text-2xl font-bold">
            PLANO DE COBERTURAS
          </h5>
          <p className="text-center text-lg">
            Cada vida terá direito ao seguinte benefício*:
          </p>
        </div>
        <div className="h-[200px]"></div>
      </div>

      <div className="flex w-full justify-center">
        {coberturas && valor ? (
          <div className="bg-white rounded-xl shadow-sm -mt-[200px] w-[90vw] flex-col justify-center items-center">
            {/* Coberturas */}
            <div className="flex p-6 pb-2 w-[90vw] flex-col gap-6">
              {coberturas?.map((cobertura: any, index: number) => (
                <div key={index} className="flex gap-1">
                  <div className="mr-3">
                    <CheckIcon />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h5 className="leading-5 ">{cobertura.label}</h5>
                    <h6 className="leading-5 font-bold">
                      {['Invalid. Perm. p/Acidente'].includes(cobertura.label)
                        ? 'até'
                        : null}{' '}
                      {formatCurrency(cobertura.value)}
                    </h6>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F9FAFB] p-6 gap-4">
              {/* Valor */}
              <p className="text-center font-inter text-[#111827] text-lg mb-4 font-normal">
                Todos os benefícios por somente:
              </p>

              <div className="flex flex-row items-center gap-1">
                <p
                  style={{
                    color: '#F9AB35',
                    fontWeight: 800,
                  }}
                  className="text-5xl"
                >
                  {valor}
                </p>

                <p
                  style={{
                    color: '#6B7280',
                    fontWeight: 500,
                  }}
                >
                  /mensais
                </p>
              </div>

              {/* Botão Contratar */}
              <div className="flex -wfull flex-col items-center">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecorationLine: 'underline',
                    color: '#6B7280',
                    padding: '10px 0px',
                  }}
                >
                  <p className="text-[#6B7280] text-center text-sm font-medium underline font-inter">
                    Para cada vida
                  </p>
                </div>
                <Link href={'/seguro-coletivo/'} passHref legacyBehavior>
                  <button
                    id="pme-contratar-preço"
                    style={{
                      backgroundColor: '#F9AB35',
                      padding: '10px 40px',
                      color: '#fff',
                      borderRadius: '6px',
                      fontWeight: 700,
                    }}
                    className="w-full"
                  >
                    CONTRATAR
                  </button>
                </Link>

                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    padding: '10px 0px',
                    marginTop: '10px',
                  }}
                >
                  *Confira condições
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>Carregando</>
        )}
      </div>
    </div>
  );
};

export default MobileTableComponent;
