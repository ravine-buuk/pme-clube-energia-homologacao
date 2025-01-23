import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Oval } from 'react-loader-spinner';
import { useFormState } from './FormContext';
import api from '@/lib/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

type FormValues = {
  codigoVerificacao: string;
};

export function Step2() {
  const {
    onHandleNext,
    setFormData,
    setHash,
    setUrlContrato,
    setUrlBoleto,
    formData,
    hash,
  } = useFormState();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { codigoVerificacao: '' },
  });

  const [loading, setloading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const verifyEmail = async () => {
    setloading(true);

    const response = await api
      .post(`/csprime/coletivo/${hash}/verificar-email`)
      .finally(() => setloading(false));

    if (response.data?.message == 'sent') {
      toast.success('Código enviado.');
    } else if (response.data?.message == 'already_verified') {
      onHandleNext(13);
      toast.success('E-mail já verificado.');
    }

    setTimer(60);
  };

  const onHandleFormSubmit = async (data: FormValues) => {
    try {
      const response = await api
        .post(`/csprime/coletivo/${hash}/verificar-codigo`, {
          email: formData.email,
          code: parseInt(data.codigoVerificacao),
        })
        .finally(() => setloading(false));

      if (response?.data?.message === 'verified') {
        onHandleNext(13);
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
        toast.error('Ocorreu um erro durante a verificação do código.');
      }
    }
  };

  const [timer, setTimer] = useState(60);

  useEffect(() => {
    verifyEmail();
  }, []);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex justify-center items-center"
    >
      <div className="p-10 max-w-lg">
        <div>
          <label
            htmlFor="codigoVerificacao"
            className="block text-lg font-semibold text-black"
          >
            Digite o código recebido no e-mail
          </label>
          <input
            id="codigoVerificacao"
            {...(register('codigoVerificacao', {
              required: 'Campo obrigatório',
            }) as any)}
            onChange={(e) => {
              const inputValue = e.target.value.slice(0, 5);
              setValue('codigoVerificacao', inputValue);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="- - - - -"
            type="text"
            name="codigoVerificacao"
            maxLength={5}
            className={`rounded-md lg:w-[350px] w-full shadow-md border mt-2 ${
              errors.codigoVerificacao ? 'border-red-500' : ''
            }`}
          />

          {errors.codigoVerificacao && (
            <span className="block text-red-500 text-sm mt-1 error-message">
              {errors.codigoVerificacao.message}
            </span>
          )}
        </div>

        <div className="my-2 flex justify-start items-center">
          <button
            type="button"
            onClick={() => {
              timer <= 0 && verifyEmail();
            }}
            className="text-[#F9AB35] font-bold text-sm"
          >
            {timer > 0
              ? `Aguarde ${timer} segundos para reenviar.`
              : 'Reenviar código'}
          </button>
        </div>
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
            <button
              type="submit"
              id="coletivo-contratação-continuar"
              className="text-white bg-[#F9AB35] font-bold py-2 px-4 rounded-md text-sm"
            >
              Validar
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
