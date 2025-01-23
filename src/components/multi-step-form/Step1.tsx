import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import api from './../../lib/api';
import { ToastContainer as TToast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

type TFormValues = {
  email: string;
};

export function Step1() {
  const { onHandleNext, setFormData, formData, setHash, hash } = useFormState();
  const { register, handleSubmit, setValue } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const ToastContainer = TToast as any;

  const [loading, setloading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    'Digite o seu melhor endereço de e-mail',
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setPlaceholder('Digite seu e-mail');
      } else {
        setPlaceholder('Digite o seu melhor endereço de e-mail');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormData({ ...formData, ...data });

    try {
      setloading(true);

      const response = await api
        .post('/csprime/coletivo/iniciar', {
          email: data.email,
        } as any)
        .finally(() => setloading(false));

      if (response.data.hash) {
        setHash(response.data.hash);

        // Limpa os dados de formulário salvos (com exceção do email),
        // caso seja uma nova contratação
        if (response.data.newlyCreated) {
          setFormData({
            email: data.email,
          });
        }

        onHandleNext(3);
      } else {
        throw 'Hash inválido.';
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
    <>
      <form
        onSubmit={handleSubmit(onHandleFormSubmit)}
        className="flex justify-center items-center"
      >
        <div className="p-10 max-w-lg">
          <label
            htmlFor="step1"
            className="font-medium text-lg text-black mt-2 block"
            style={{
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '24px',
              marginTop: '50px',
            }}
          >
            Vamos iniciar validando o e-mail de contato
          </label>
          <label
            htmlFor="step1"
            className="text-[#404040] mt-3 block"
            style={{
              width: '311px',
              color: '#404040',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px',
            }}
          >
            Etapa importante porque o Certificado de Contratação e o boleto
            serão enviados por e-mail.
          </label>

          <input
            id="step1"
            title="input"
            {...(register('email') as any)}
            onChange={(e) => setValue('email', e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            placeholder={placeholder}
            type="email"
            name="email"
            className={'rounded-md lg:w-[350px] w-full shadow-md border mt-2'}
            style={{
              marginTop: '20px',
              outline: 'none',
              fontSize: '1rem',
            }}
          />

          <div className="my-5 flex items-start">
            <div style={{ width: '114px', height: '29px', flexShrink: 0 }}>
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
                *Campos obrigatórios
              </label>
            </div>
            <div className="flex-grow"></div>
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
                className="text-white bg-[#F9AB35] font-bold py-2 px-4 rounded-md text-sm ml-3"
              >
                Continuar
              </button>
            )}
          </div>
        </div>
      </form>
      <ToastContainer position="bottom-right" />
    </>
  );
}
