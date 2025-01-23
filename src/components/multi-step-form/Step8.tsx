import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import api from '@/lib/api';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

type TFormValues = {
  colaboradorAfastadoOuMais70: string;
};

export function Step8() {
  const { onHandleNext, setFormData, onHandleBack, formData, hash } =
    useFormState();
  const { handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const [loading, setloading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const submit: SubmitHandler<TFormValues> = async (data) => {
    try {
      const { colaboradorAfastadoOuMais70 } = data;

      setFormData({
        ...formData,
        colaboradorAfastadoOuMais70,
      });

      setloading(true);

      const response = await api
        .post(`/csprime/coletivo/${hash}/salvar`, {
          colaboradorAfastadoOuMais70: data.colaboradorAfastadoOuMais70,
        })
        .finally(() => setloading(false));

      if (colaboradorAfastadoOuMais70 === '1') {
        setShowMessage(true);
      } else if (response.data?.message == 'updated') {
        onHandleNext(10);
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

  const handleContact = () => {
    onHandleNext(9);
  };

  const handleBack = () => {
    onHandleBack();
  };

  return (
    <>
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit(submit)}
      >
        <div
          className="p-10 px-[75px]"
          style={{ width: '500px', margin: '0 auto' }}
        >
          <label
            htmlFor="employeesCondition"
            className="text-[#111827] font-medium text-lg whitespace-pre-line text-justify"
          >
            Dentre estas pessoas há uma ou mais em condições de afastamento ou
            de idade acima de 70 anos?
          </label>

          <div className="my-5 flex justify-start">
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
                  onClick={() => {
                    submit({ colaboradorAfastadoOuMais70: '1' });
                    onHandleNext(9);
                  }}
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
                  onClick={() => submit({ colaboradorAfastadoOuMais70: '0' })}
                  className="bg-[#878787] text-white font-bold py-2 px-4 rounded-md text-sm border"
                  style={{ borderRadius: '6px', background: '#F9AB35' }}
                >
                  NÃO
                </button>
              </div>
            )}
          </div>

          {showMessage && (
            <div className="my-3 text-black-800">
              <b>
                Temos a melhor proposta para o caso da sua empresa. Clique no
                botão abaixo.
              </b>
              <div className="my-5 flex justify-end">
                <button
                  type="button"
                  onClick={handleContact}
                  className="text-white bg-[#F9AB35] font-bold py-2 px-4 rounded-md text-sm mt-3"
                >
                  FALE CONOSCO
                </button>
              </div>
            </div>
          )}

          <div className="my-5 flex justify-end">
            {!showMessage && !loading && (
              <button
                type="button"
                onClick={handleBack}
                className="text-gray-700 bg-white border font-bold py-2 px-4 rounded-md text-sm mr-3"
              >
                Voltar
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
