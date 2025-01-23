import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';

type FormValues = {
  cep: string;
  numero: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  uf: string;
  cidade: string;
};

export function Step11() {
  const { onHandleNext, formData, onHandleBack } = useFormState();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: FormValues) => {
    onHandleNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex justify-center items-center"
    >
      <div className="p-10 max-w-lg">
        <label
          className="font-medium text-lg text-black mt-2"
          style={{
            color: '#404040',
            fontFamily: 'Inter',
            fontSize: '18px',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: '27.5px',
            letterSpacing: '-0.63px',
          }}
        >
          Dados preenchidos, vamos validar o endereço.
        </label>

        <div className="font-medium text-lg text-black mt-4">CEP</div>
        <input
          type="text"
          {...register('cep')}
          className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          disabled={true}
        />

        <div className="font-medium text-lg text-black mt-4">Logradouro</div>
        <input
          type="text"
          {...register('logradouro')}
          className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          disabled={true}
        />

        <div className="font-medium text-lg text-black mt-4">Número</div>
        <input
          type="text"
          {...register('numero')}
          className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          disabled={true}
        />

        <div className="font-medium text-lg text-black mt-4">Complemento</div>
        <input
          type="text"
          {...register('complemento')}
          className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          disabled={true}
        />

        <div className="font-medium text-lg text-black mt-4">Bairro</div>
        <input
          type="text"
          {...register('bairro')}
          className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          disabled={true}
        />

        <div className="font-medium text-lg text-black mt-4">Cidade</div>
        <input
          type="text"
          {...register('cidade')}
          className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          disabled={true}
        />

        <div className="font-medium text-lg text-black mt-4">UF</div>
        <input
          type="text"
          {...register('uf')}
          className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          disabled={true}
        />

        <div className="my-5 flex justify-end">
          <button
            type="button"
            onClick={() => onHandleBack()}
            className="text-gray-700 bg-white border font-bold py-2 px-4 rounded-md text-sm mr-3"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="text-white bg-[#F9AB35] font-bold py-2 px-4 rounded-md text-sm"
          >
            Continuar
          </button>
        </div>
      </div>
    </form>
  );
}
