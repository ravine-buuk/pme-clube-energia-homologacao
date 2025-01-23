import React from 'react';
import { useFormState } from './FormContext';

export function Step14() {
  const { onHandleBack, onHandleContinue, onHandleNext } = useFormState();

  const handleBack = () => {
    onHandleBack();
  };

  const handleContinue = () => {
    onHandleContinue();
  };

  return (
    <form className="flex justify-center items-center">
      <div className="p-10 max-w-lg px-[78px]">
        <label
          className="text-white font-bold text-lg uppercase"
          style={{
            color: 'var(--Ellipse-115, #FFF)',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '27.5px',
            letterSpacing: '-0.7px',
            textTransform: 'uppercase',
            borderRadius: '16px',
            background: '#F9AB35',
            width: '319px',
            height: '51px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Muito Obrigada!
        </label>
        <h1
          style={{
            width: '306px',
            color: 'var(--gray-900, #111827)',
            fontSize: '22px',
            fontStyle: 'normal',
            marginTop: '50px',
            fontWeight: 500,
            lineHeight: '26px',
          }}
        >
          PARABÉNS!
        </h1>
        <h1
          style={{
            width: '360px',
            color: 'var(--gray-900, #111827)',

            fontSize: '22px',
            marginTop: '25px',
            fontStyle: 'normal',
            lineHeight: '26px',
          }}
        >
          A sua empresa está mais segura.
        </h1>
        <h1
          style={{
            width: '350px',
            color: 'var(--gray-900, #111827)',
            marginTop: '25px',
            fontSize: '22px',
            fontStyle: 'normal',
            lineHeight: '26px',
          }}
        >
          Em breve você receberá um e-mail com todas as informações.
        </h1>

        <div className="my-5 flex justify-end">
          <button
            type="button"
            onClick={() => onHandleBack()}
            className="text-gray-700 bg-white border font-bold py-2 px-4 rounded-md text-sm mr-3"
          >
            Voltar
          </button>

          <button
            type="button"
            onClick={() => onHandleNext()}
            className="text-white bg-[#F9AB35] font-bold py-2 px-4 rounded-md text-sm"
          >
            Continuar
          </button>
        </div>
      </div>
    </form>
  );
}

export default Step14;
