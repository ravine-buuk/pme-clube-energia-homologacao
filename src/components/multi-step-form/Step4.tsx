import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import api from './../../lib/api';
import InputMask from 'react-input-mask';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

type TFormValues = {
  telefoneCelular: string;
  cpf: string;
  cargo: string;
  nome: string;
};

export function Step4() {
  const { onHandleNext, setFormData, onHandleBack, formData, hash } =
    useFormState();

  const [loading, setloading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: formData,
    resolver: async (data: any) => {
      const cpfValidationSchema = yup
        .string()
        .required('Por favor, informe o CPF')
        .matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/, 'CPF inválido')
        .test('cpf-unique-digits', 'CPF inválido', (value: string) => {
          const digits = value.replace(/\D/g, '');
          return new Set(digits).size !== 1;
        });

      const nomeValidationSchema = yup
        .string()
        .required('Por favor, informe o nome completo')
        .test('full-name', 'Informe o nome completo', (value: string) => {
          const names = value.trim().split(' ');
          return names.length > 1;
        });

      const cargoValidationSchema = yup
        .string()
        .required('Por favor, informe o cargo');

      try {
        const validationSchema = yup.object().shape({
          telefoneCelular: yup
            .string()
            .required('Por favor, informe o telefone celular'),
          cpf: cpfValidationSchema,
          nome: nomeValidationSchema,
          cargo: cargoValidationSchema,
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

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormData({ ...formData, ...data });

    try {
      setloading(true);

      const response = await api
        .post(`csprime/coletivo/${hash}/salvar`, {
          telefoneCelular: data.telefoneCelular,
          responsavel: {
            nome: data.nome,
            cpf: data.cpf,
            cargo: data.cargo,
          },
        })
        .finally(() => {
          setloading(false);
        });

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
        <div className="mt-4 mb-4">
          <label className="font-medium text-xl text-black">
            Dados do responsável pela contratação:
          </label>
        </div>

        <div className="mt-4">
          <label className="font-medium text-lg text-black">Nome</label>
          <input
            {...register('nome')}
            type="text"
            name="nome"
            className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 ${
              errors.nome ? 'border-red-500' : ''
            }`}
          />
          {errors.nome && (
            <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="font-medium text-lg text-black">CPF</label>
          <InputMask
            mask="999.999.999-99"
            {...register('cpf')}
            required
            type="text"
            name="cpf"
            className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 ${
              errors.cpf ? 'border-red-500' : ''
            }`}
          />
          {errors.cpf && (
            <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="font-medium text-lg text-black">Cargo</label>
          <input
            {...register('cargo')}
            type="text"
            name="cargo"
            className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 ${
              errors.cargo ? 'border-red-500' : ''
            }`}
          />
          {errors.cargo && (
            <p className="text-red-500 text-sm mt-1">{errors.cargo.message}</p>
          )}
        </div>

        <div className="my-5">
          <label className="font-medium text-lg text-black">
            Telefone Celular
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

        <div className="my-2 text-[#F9AB35] font-family: Inter; font-size: 12px; font-style: normal; font-weight: 700; line-height: 24px;">
          Inclua o contato que pode receber SMS
        </div>

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
