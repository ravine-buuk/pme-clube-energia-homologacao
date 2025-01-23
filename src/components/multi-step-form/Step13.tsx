import React, { useEffect, useState } from 'react';
import { useFormState } from './FormContext';
import { pdfjs } from 'react-pdf';
import Image from 'next/image';
import logo from '@/assets/images/Logo_Energia_Seguridade_2 1.png';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-toastify/dist/ReactToastify.css';
import api from '@/lib/api';
import Swal from 'sweetalert2';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Step13: React.FC = () => {
  const {
    onHandleNext,
    hash,
    setUrlContrato,
    urlContrato,
    setUrlBoleto,
    urlBoleto,
    onHandleBack,
  } = useFormState();

  const [loading, setloading] = useState(true);

  const finish = async () => {
    try {
      const response = await api
        .post(`csprime/coletivo/${hash}/finalizar`, {})
        .finally(() => {
          setloading(false);
        });

      if (response.data?.urlContrato) {
        setUrlContrato(response.data.urlContrato);
      }

      if (response.data?.urlBoleto) {
        setUrlBoleto(response.data.urlBoleto);
      }
    } catch (error) {
      console.debug(error);

      if (
        error?.response.status == 400 &&
        Array.isArray(error?.response.data)
      ) {
        Swal.fire({
          text: error?.response.data[0],
          icon: 'error',
          confirmButtonColor: '#F9AB35',
        });
      } else {
        toast.error('Ocorreu um erro no processamento do formulário.');
      }
    }
  };

  const handleContinue = () => {
    onHandleNext();
  };

  useEffect(() => {
    finish();
  }, []);

  return loading ? (
    <div className="flex justify-center items-center flex-col gap-4 px-[70px]">
      <div
        style={{
          borderRadius: '30px',
          background: '#fff',
          display: 'flex',
          width: '367px',
          height: '500px',
          padding: '9px 14px',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          overflow: 'hidden',
          border: '1px solid #F9AB35',
        }}
        className="flex flex-col items-center justify-center p-4 pt-0 gap-2"
      >
        <Image src={logo} alt="Logo" width={67} height={73} className="mb-10" />

        <label
          className="flex items-center justify-center text-center mb-4 text-white font-bold text-lg uppercase bg-[#6B7280] rounded-xl px-4 py-2 mb-4"
          style={{ width: '300px' }}
        >
          Aguarde...
        </label>

        <div
          style={{
            color: '#111827',
            fontFamily: 'Ariel',
            textAlign: 'center',
            fontSize: '22px',
            fontStyle: 'normal',
            lineHeight: '24px',
            width: '306px',
          }}
        >
          Estamos gerando os documentos da sua contratação.
        </div>
        <Oval
          height="40"
          width="40"
          color="#F9AB35"
          secondaryColor="#F9AB35"
          wrapperClass="py-2 px-4"
        />
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col gap-4 px-[70px]">
      <div
        style={{
          borderRadius: '30px',
          background: '#fff',
          display: 'flex',
          width: '400px',
          height: '500px',
          padding: '9px 14px',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          overflow: 'hidden',
          border: '1px solid #F9AB35',
        }}
        className="flex flex-col items-center justify-center p-4 pt-0 gap-2"
      >
        <Image src={logo} alt="Logo" width={67} height={73} className="mb-10" />

        <label
          className="flex items-center justify-center text-center mb-4 text-white font-bold text-lg uppercase bg-[#6B7280] rounded-xl px-4 py-2 mb-4"
          style={{ width: '300px' }}
        >
          Tudo pronto!
        </label>

        <div
          style={{
            color: '#111827',
            fontFamily: 'Ariel',
            textAlign: 'center',
            fontSize: '22px',
            fontStyle: 'normal',
            lineHeight: '24px',
            width: '306px',
          }}
        >
          Faça download da proposta de contratação e do boleto bancário clicando
          nos botões abaixo.
        </div>

        {!urlContrato || !urlBoleto ? (
          <label
            className="text-white text-center bg-red-500 rounded-lg p-3"
            style={{ width: '320px' }}
          >
            Houve um problema na geração de um ou mais documentos da sua
            contratação. Entre em contato com o nosso suporte.
          </label>
        ) : (
          ''
        )}

        {!urlContrato ? (
          ''
        ) : (
          <a
            id="siticom-proposta-de-contratação"
            target="_blank"
            href={urlContrato}
            className="text-white text-center bg-yellow-500 rounded-lg p-3"
            style={{ width: '280px', marginTop: '30px' }}
            rel="noreferrer"
          >
            PROPOSTA DE CONTRATAÇÃO
          </a>
        )}

        {!urlBoleto ? (
          ''
        ) : (
          <a
            target="_blank"
            id="siticom-baixar-boleto"
            href={urlBoleto}
            className="text-white text-center bg-yellow-500 rounded-lg p-3"
            style={{ width: '280px', marginTop: '1px' }}
            rel="noreferrer"
          >
            BOLETO BANCÁRIO
          </a>
        )}

        <div className="my-5 flex justify-end">
          <button
            type="button"
            onClick={handleContinue}
            className="text-white bg-[#F9AB35] font-bold py-2 px-4 rounded-md text-sm"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step13;
