import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Oval as ROval } from 'react-loader-spinner';
import { useFormState } from './FormContext';
import api from './../../lib/api';
import { toast, ToastContainer as TToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CModal from './Modal';
import Swal from 'sweetalert2';

const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

function applyCnpjMask(value: string) {
  if (value.length == 0) return '';

  const numericValue = value.replace(/\D/g, '');

  if (numericValue.length <= 2) {
    return numericValue.replace(/^(\d{0,2})/, '$1');
  }

  if (numericValue.length <= 5) {
    return numericValue.replace(/^(\d{0,2})(\d{0,3})/, '$1.$2');
  }

  if (numericValue.length <= 8) {
    return numericValue.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})/, '$1.$2.$3');
  }

  if (numericValue.length <= 12) {
    return numericValue.replace(
      /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})/,
      '$1.$2.$3/$4',
    );
  }

  return numericValue.replace(
    /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/,
    '$1.$2.$3/$4-$5',
  );
}

type FormValues = {
  cnpj: string;
  razaoSocial: string;
  cnae: string;
};

export function Step3() {
  const { onHandleNext, setFormData, formData, setHash, hash, onHandleBack } =
    useFormState();

  const {
    clearErrors,
    reset,
    formState,
    register,
    handleSubmit,
    setValue,
    setError,
  } = useForm<FormValues>({
    defaultValues: formData ?? { cnpj: '' },
  });

  const Oval = ROval as any;
  const ToastContainer = TToast as any;
  const Modal = CModal as any;

  const [loading, setloading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cnpj, setCnpj] = useState(formData.cnpj);

  const buscarDados = async () => {
    if (!cnpj) return;

    clearErrors();

    if (cnpj.length < 18) {
      reset();
      return setError('cnpj', { message: 'CNPJ deve conter 13 dígitos' });
    }

    setValue('cnpj', cnpj);

    try {
      const resp = await api.get(
        `/csprime/coletivo/pesquisar-cnpj/${cnpj.replace(/\D/g, '')}`,
        {},
      );

      if (resp?.data) {
        setFormData((prev: any) => ({
          ...prev,
          cnpj,
          cnae: resp.data.cnae,
          razaoSocial: resp.data.razaoSocial,
        }));

        setValue('cnae', resp.data.cnae);
        setValue('razaoSocial', resp.data.razaoSocial);
      }
    } catch (error) {
      setError('cnpj', { message: 'CNPJ inválido!' });
    }
  };

  const onCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyCnpjMask(e.target.value);
    setCnpj(maskedValue);
  };

  const onHandleFormSubmit = async (data: FormValues) => {
    setFormData({ ...formData, ...data });

    try {
      clearErrors();

      setloading(true);

      const response = await api
        .post(`/csprime/coletivo/${hash}/salvar`, { cnpj: data.cnpj })
        .finally(() => setloading(false));

      if (
        !formData?.cnae ||
        !['41', '42', '43', '47'].includes(formData.cnae.toString().slice(0, 2))
      ) {
        return onHandleNext(16);
      }

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
    <>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <form
        onSubmit={handleSubmit(onHandleFormSubmit)}
        className="flex justify-center"
        style={{ width: '450px', margin: '0 auto' }}
      >
        <div className="p-10 mx-auto">
          <label
            htmlFor="cnpj"
            className="font-medium text-lg text-black mt-2 block"
            style={{
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '24px',
            }}
          >
            A partir de agora, queremos saber os dados cadastrais da empresa
            contratante:
          </label>

          <input
            {...register('cnpj', {
              required: 'CNPJ é obrigatório',
              pattern: { value: cnpjRegex, message: 'CNPJ inválido' },
            })}
            onChange={onCnpjChange}
            onBlur={buscarDados}
            value={cnpj}
            placeholder="CNPJ (apenas números)"
            className={
              'w-full p-3 mt-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40'
            }
          />

          {formState.errors.cnpj && (
            <span className="block text-red-500 text-sm mt-1 error-message">
              {(formState.errors.cnpj as any)?.message || formState.errors.cnpj}
            </span>
          )}

          <input
            id="razaoSocial"
            type="text"
            placeholder="Razão Social"
            required
            {...(register('razaoSocial') as any)}
            className="w-full p-3 mt-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40"
          />
          {formState.errors.razaoSocial && (
            <span className="block text-red-500 text-sm mt-1 error-message">
              {formState.errors.razaoSocial.message as any}
            </span>
          )}

          <input
            id="cnae"
            type="text"
            placeholder="CNAE"
            required
            {...(register('cnae') as any)}
            className="w-full p-3 mt-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#F9AB35] focus:ring focus:ring-[#F9AB35] focus:ring-opacity-40"
          />
          {formState.errors.cnae && (
            <span className="block text-red-500 text-sm mt-1 error-message">
              {formState.errors.cnae.message as any}
            </span>
          )}

          <div style={{ position: 'relative', width: '100%' }}>
            <label
              htmlFor="mandatory-fields"
              className="text-[#404040] block"
              style={{
                color: '#404040',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                fontFamily: 'Inter',
                marginBottom: '10px',
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
                    onClick={() => onHandleBack(1)}
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
      <ToastContainer position="bottom-right" />
    </>
  );
}
