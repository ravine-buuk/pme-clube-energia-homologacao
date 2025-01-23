import React, { useEffect, useState } from 'react';
import RowTable from '../RowTable';
import api from '@/lib/api';
import Link from 'next/link';

const TableComponent = () => {
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
    <div
      style={{
        alignItems: 'center',
        background: '#878787',
        width: '100%',
        height: 'auto',
        backgroundColor: '#f2f2f2',
        flexDirection: 'column',
      }}
      className="hidden md:flex pt-[130px]"
    >
      <div className="flex flex-col justify-center items-center mt-11 mb-4 mx-auto">
        <h1 className="font-inter italic uppercase 2xl:text-[56 px] xl:text-[44px] font-semibold leading-normal text-[#404040]">
          PLANO DE COBERTURAS
        </h1>
        <h2 className="text-2xl leading-normal mb-6">
          Cada vida terá direito ao seguinte benefício*:
        </h2>
      </div>

      {coberturas && valor ? (
        <div
          style={{
            width: '90%',
            height: 'auto',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '3',
            maxWidth: '1280px',
            boxShadow:
              '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
          }}
          className="grid grid-cols-3"
        >
          <div
            style={{
              height: '100%',
              backgroundColor: '#6B7280',
              alignItems: 'center',
              boxShadow:
                '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
            }}
            className="grid col-span-2 w-full"
          >
            <div className="w-full items-center justify-center px-3">
              {coberturas?.map((cobertura: any, index: number) => (
                <RowTable
                  key={index}
                  noborder={index != coberturas.length - 1}
                  name1={cobertura.label}
                  name2={formatCurrency(cobertura.value)}
                />
              ))}
            </div>
          </div>

          <div
            style={{
              height: '100%',
              padding: '38px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            className="grid"
          >
            <p className="text-center font-inter text-[#111827] text-xs lg:text-base font-normal leading-[1.19291]">
              Todos os benefícios por somente:
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  color: '#F9AB35',
                  fontWeight: 800,
                  fontSize: '48px',
                }}
              >
                {valor}
              </p>

              <p
                style={{
                  color: '#6B7280',
                  fontWeight: 500,
                  paddingLeft: '12px',
                  fontSize: '20px',
                }}
              >
                {' '}
                /mensais
              </p>
            </div>
            <p className="text-[#6B7280] text-center text-sm font-medium underline font-inter">
              Para cada vida
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecorationLine: 'underline',
                color: '#6B7280',
                padding: '10px 0px',
              }}
            ></div>
            <Link href="/seguro-coletivo/" passHref legacyBehavior>
              <button
                id="pme-contratar-preço"
                style={{
                  backgroundColor: '#F9AB35',
                  padding: '10px 40px',
                  color: '#fff',
                  borderRadius: '6px',
                  fontWeight: 700,
                }}
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
      ) : (
        <>Carregando</>
      )}

      <div
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '230px',
          zIndex: '2',
          marginTop: '-80px',
        }}
      ></div>
    </div>
  );
};

export default TableComponent;
