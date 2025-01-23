import React from 'react';
import { useFormState } from './FormContext';

export function Step16() {
  const { onHandleNext, formData } = useFormState();
  const handleContact = () => {
    onHandleNext(9);
  };

  return (
    <>
      <div
        className="p-10 px-[75px]"
        style={{ width: '500px', margin: '0 auto' }}
      >
        <label className="text-[#111827] font-medium text-lg whitespace-pre-line text-justify">
          A atividade principal da empresa não está relacionada a construção
          civil. Deseja continuar com a contratação?
        </label>

        <div className="my-5 flex justify-start">
          <button
            type="button"
            onClick={() => onHandleNext(4)}
            className="bg-[#F9AB35] text-white font-bold py-2 px-4 rounded-md text-sm border"
            style={{
              borderRadius: '6px',
              background: '#878787',
              marginRight: '30px',
            }}
          >
            SIM
          </button>
          <button
            type="button"
            onClick={handleContact}
            className="bg-[#878787] text-white font-bold py-2 px-4 rounded-md text-sm border"
            style={{ borderRadius: '6px', background: '#F9AB35' }}
          >
            NÃO
          </button>
        </div>
      </div>
    </>
  );
}
