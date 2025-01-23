import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import api from '@/lib/api';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

type TFormValues = {
  totalColaboradores: string;
};

export function Step7() {
  const { onHandleNext, setFormData, onHandleBack, formData, hash } =
    useFormState();
  const { register, handleSubmit, setValue } = useForm<TFormValues>({
    defaultValues: formData ?? { totalColaboradores: 1 },
  });

  const [loading, setloading] = useState(false);

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormData({ ...formData, ...data });

    try {
      if (parseInt(data.totalColaboradores) < 2) {
        toast.error('O número mínimo de vidas é 2 para este produto.');
        return;
      }

      setloading(true);

      const response = await api
        .post(`/csprime/coletivo/${hash}/salvar`, {
          totalColaboradores: data.totalColaboradores,
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
      <div className="p-10 max-w-lg px-[70px]">
        <label
          htmlFor="totalColaboradores"
          className="text-[#111827] font-medium text-lg mt-2"
        >
          Quantas pessoas trabalham na empresa?
        </label>
        <p
          style={{
            width: '311px',
            color: '#404040',
            fontFamily: 'Inter',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
          }}
        >
          *Inclua a soma do total de sócios e de funcionários.
        </p>

        <input
          id="totalColaboradores"
          {...register('totalColaboradores')}
          required
          type="text"
          pattern="[2-100]\d*"
          min={1}
          step={1}
          name="totalColaboradores"
          className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          placeholder="A partir de 2 vidas*"
        />

        <div style={{ position: 'relative' }}>
          <label
            htmlFor="mandatory-fields"
            className="text-[#404040]"
            style={{
              color: '#404040',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px',
              fontFamily: 'Inter',
              display: 'block',
            }}
          >
            *Campos obrigatórios
          </label>
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
      </div>
    </form>
  );
}
