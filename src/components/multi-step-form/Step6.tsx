import { useForm } from 'react-hook-form';
import { Oval } from 'react-loader-spinner';
import { useFormState } from './FormContext';
import React, { useState } from 'react';
import api from '@/lib/api';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

type TFormValues = {
  cep: string;
  numero: string;
  complemento: string;
  logradouro: string;
  endereco: string;
  bairro: string;
  uf: string;
  cidade: string;
};

export function Step6() {
  const { onHandleNext, setFormData, onHandleBack, formData, hash } =
    useFormState();
  const { register, handleSubmit, setValue } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const [loading, setloading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormData({ ...formData, ...data });

    try {
      setloading(true);

      const response = await api
        .post(`csprime/coletivo/${hash}/salvar`, {
          endereco: {
            cep: data.cep,
            numero: data.numero,
            complemento: data.complemento,
            logradouro: data.logradouro,
            bairro: data.bairro,
            uf: data.uf,
            cidade: data.cidade,
          },
        })
        .finally(() => setloading(false));

      if (response.data?.message == 'updated') onHandleNext();
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

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex justify-center items-center"
    >
      <div
        className="p-10 w-[70%] md:w-[60%] lg:w-[35%]"
        style={{ maxWidth: '700px' }}
      >
        <div className="font-medium text-lg text-black mt-2">CEP</div>
        <input
          id="cep"
          {...register('cep')}
          onChange={(e) => setValue('cep', e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
          type="text"
          name="cep"
          className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40 ${
            isFocused ? 'border-[#F9AB35]' : ''
          }`}
        />

        <div className="font-medium text-lg text-black mt-4">Logradouro</div>
        <input
          id="logradouro"
          {...register('logradouro')}
          onChange={(e) => setValue('logradouro', e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
          type="text"
          name="logradouro"
          className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40 ${
            isFocused ? 'border-[#F9AB35]' : ''
          }`}
        />

        <div className="font-medium text-lg text-black mt-4">Número</div>
        <input
          id="numero"
          {...register('numero')}
          onChange={(e) => setValue('numero', e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
          type="text"
          name="numero"
          className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40 ${
            isFocused ? 'border-[#F9AB35]' : ''
          }`}
        />

        <div className="font-medium text-lg text-black mt-4">Complemento</div>
        <input
          id="complemento"
          {...register('complemento')}
          onChange={(e) => setValue('complemento', e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="text"
          name="complemento"
          className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40 ${
            isFocused ? 'border-[#F9AB35]' : ''
          }`}
        />

        <div className="font-medium text-lg text-black mt-4">Bairro</div>
        <input
          id="bairro"
          {...register('bairro')}
          onChange={(e) => setValue('bairro', e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
          type="text"
          name="bairro"
          className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40 ${
            isFocused ? 'border-[#F9AB35]' : ''
          }`}
        />

        <div className="font-medium text-lg text-black mt-4">UF</div>
        <input
          id="uf"
          {...register('uf')}
          onChange={(e) => setValue('uf', e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
          type="text"
          name="uf"
          className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40 ${
            isFocused ? 'border-[#F9AB35]' : ''
          }`}
        />

        <div className="font-medium text-lg text-black mt-4">Cidade</div>
        <input
          id="cidade"
          {...register('cidade')}
          onChange={(e) => setValue('cidade', e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
          type="text"
          name="cidade"
          className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40 ${
            isFocused ? 'border-[#F9AB35]' : ''
          }`}
        />

        <div className="my-5 flex justify-end">
          {loading ? (
            <Oval
              height="40"
              width="40"
              color="#F9AB35"
              secondaryColor="#F9AB35"
              wrapperClass="py-2 px-4"
            />
          ) : (
            <div>
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
          )}
        </div>
      </div>
    </form>
  );
}
