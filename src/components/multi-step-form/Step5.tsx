import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Oval } from 'react-loader-spinner';
import { useFormState } from './FormContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

type TFormValues = {
  cep: string;
  numero: string;
};

export function Step5() {
  const { onHandleNext, setFormData, onHandleBack, formData, hash } =
    useFormState();
  const { register, handleSubmit, setValue, formState } = useForm<TFormValues>({
    defaultValues: formData.cep?.length > 3 ? formData : null,
  });

  const [loading, setloading] = useState(false);

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormData({ ...formData, ...data });

    try {
      if (!data.cep) {
        toast.error('Campo CEP é obrigatório');
        return;
      }

      const formattedCep = data.cep.replace(/\D/g, '');

      if (formattedCep.length !== 8 || /\D/.test(formattedCep)) {
        toast.error('CEP inválido. Deve conter apenas 8 dígitos numéricos.');
        return;
      }

      setloading(true);

      const response = await axios
        .get(`https://viacep.com.br/ws/${formattedCep}/json/`)
        .finally(() => setloading(false));

      if (response?.data) {
        if (response.data.erro) {
          toast.error('CEP inválido. Por favor, verifique o CEP digitado.');
          return;
        }

        const { cep, complemento, logradouro, bairro, uf, localidade } =
          response.data;

        const addressData = {
          cep,
          logradouro,
          complemento: '',
          bairro,
          cidade: localidade,
          uf,
          numero: data.numero ?? '',
        };

        setFormData((prev: TFormValues) => ({ ...prev, ...addressData }));

        onHandleNext();
      } else {
        toast.error(
          'Erro ao obter os dados do CEP. Por favor, tente novamente.',
        );
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

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex w-full justify-center items-center"
    >
      <div className="p-10 w-[70%] md:w-[60%] lg:w-[35%]">
        <div className="font-medium text-lg text-black mt-2">
          CEP da empresa:
        </div>

        <input
          id="cep"
          {...register('cep', {
            required: 'Campo CEP é obrigatório',
            pattern: {
              value: /^[0-9]{5}-?[0-9]{3}$/,
              message:
                'CEP inválido. Deve ser no formato "XXXXX-XXX" ou "XXXXXXXX".',
            },
          })}
          onChange={(e) => setValue('cep', e.target.value)}
          required
          type="text"
          name="cep"
          className={`rounded-md w-full shadow-md border-[#D1D5DB] mt-2 ${
            formState.errors.cep ? 'border-red-500' : ''
          }`}
        />

        {formState.errors.cep && (
          <p className="text-red-500">{formState.errors.cep.message}</p>
        )}

        <div className="my-5 flex justify-center">
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
              style={{
                width: '234px',
                height: '34px',
                borderRadius: '9px',
                background: '#F9AB35',
                color: '#FFF',
                fontSize: '13.352px',
                fontWeight: '500',
                lineHeight: '17.803px',
              }}
            >
              BUSCAR ENDEREÇO
            </button>
          )}
        </div>
        <div style={{ width: '100%', textAlign: 'left' }}>
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
            }}
          >
            *Campo obrigatório
          </label>
        </div>
        {!loading && (
          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={() => onHandleBack()}
              className="text-gray-700 bg-white border font-bold py-2 px-4 rounded-md text-sm mr-3"
            >
              Voltar
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default Step5;
