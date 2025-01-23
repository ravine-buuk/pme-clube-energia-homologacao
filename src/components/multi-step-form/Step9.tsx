import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import api from './../../lib/api';
import InputMask from 'react-input-mask';
import * as yup from 'yup';
import Image from 'next/image';
import logoInsta from '@/assets/images/Insta.png';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

type TFormValues = {
  telefoneCelular: string;
};

export function Step9() {
  const { onHandleNext, setFormData, onHandleBack, formData, hash } =
    useFormState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: formData,
    resolver: async (data: any) => {
      const telefoneCelularValidationSchema = yup
        .string()
        .required('Por favor, informe o telefone de contato');

      try {
        const validationSchema = yup.object().shape({
          telefoneCelular: telefoneCelularValidationSchema,
        });

        await validationSchema.validate(data, { abortEarly: false });

        return {
          values: data,
          errors: {},
        };
      } catch (err: any) {
        if (err instanceof yup.ValidationError) {
          return {
            values: {},
            errors: err.inner.reduce((acc: any, error: any) => {
              acc[error.path] = error.message;
              return acc;
            }, {}),
          };
        }

        console.error(err);
        return {
          values: {},
          errors: { general: 'Ocorreu um erro ao processar os dados.' },
        };
      }
    },
  });

  const [loading, setloading] = useState(false);

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormData({ ...formData, ...data });

    try {
      setloading(true);

      const response = await api
        .post(`csprime/coletivo/${hash}/salvar`, {
          telefoneCelular: data.telefoneCelular,
          impedido: 1,
        })
        .finally(() => {
          setloading(false);
        });

      if (response.data?.message == 'updated') onHandleNext(15);
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
      className="flex w-full justify-center items-center "
    >
      <div className="flex flex-col max-w-[70vw] md:max-w-[380px] mx-auto">
        <label
          htmlFor="employeesCondition"
          className="text-[#111827] font-medium text-"
        >
          Para oferecer o melhor seguro para as necessidades da sua empresa,
          informe por gentileza um número para contato:
        </label>
        <div className="my-5">
          <label htmlFor="telefoneCelular" className="text-[#111827]">
            Telefone de Contato
          </label>
          <InputMask
            mask="(99) 99999-9999"
            {...register('telefoneCelular')}
            required
            type="text"
            name="telefoneCelular"
            className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 ${
              errors.telefoneCelular ? 'border-red-500' : ''
            }`}
            placeholder="(xx) xxxxx-xxxx"
          />
          {errors.telefoneCelular && (
            <p className="text-red-500 text-sm mt-1">
              {errors.telefoneCelular.message}
            </p>
          )}
        </div>

        <div>
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
            *Campo obrigatório
          </label>
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
              className="text-white bg-[#F9AB35] font-bold py-2 px-4 rounded-md text-sm"
            >
              Quero Contato
            </button>
          )}
        </div>
        <div
          className="w-[70vw] md:w-[360px] mx-auto mt-5 h-[29px] bg-[#FFBC00] flex justify-center items-center rounded-3xl p-[9px]"
          style={{ borderRadius: '10px' }}
        >
          <div className="flex items-center">
            <div className="ml-2" />
            <Image src={logoInsta} alt="Logo" width={18} height={18} />
            &nbsp;&nbsp;
            <a
              href="https://www.instagram.com/clubeenergia/"
              target="_blank"
              rel="noreferrer noopener"
              title="instagram clube energia"
              id="individual-obrigado-siga-instagram"
              className="font-inter text-[12px] text-[#3A459C]"
              style={{
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Siga-nos no Instagram
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
