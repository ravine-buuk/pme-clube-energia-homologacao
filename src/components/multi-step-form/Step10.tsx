import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';

type FormValues = {
  razaoSocial: string;
  email: string;
  telefoneCelular: string;
  cnpj: string;
  nomeFantasia: string;
  totalColaboradores: string;
  colaboradorAfastadoOuMais70: string;
};

export function Step10() {
  const { onHandleNext, onHandleBack, formData, hash } = useFormState();
  const { register, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = async (data: FormValues) => {
    onHandleNext();
  };

  const handleBack = () => {
    if (formData.colaboradorAfastadoOuMais70 == '0') onHandleBack(8);
  };

  const colaboradorAfastadoOuMais70Options = [
    { value: '0', label: 'Não' },
    { value: '1', label: 'Sim' },
  ];

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex justify-center items-center"
    >
      <div className="p-10 max-w-lg px-[70px]">
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
          Dados preenchidos, vamos validar as informações.
        </label>
        <div className="mt-4">
          <label className="font-medium text-lg text-black">Razão Social</label>
          <input
            value={formData.razaoSocial}
            type="text"
            name="razaoSocial"
            disabled={true}
            className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          />
        </div>

        <div className="mt-4">
          <label className="font-medium text-lg text-black">CNPJ</label>

          <input
            value={formData.cnpj}
            {...register('cnpj')}
            type="text"
            name="cnpj"
            disabled={true}
            className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          />
        </div>

        <div className="mt-4">
          <label className="font-medium text-lg text-black">
            E-mail de Contato
          </label>
          <input
            {...register('email')}
            type="text"
            name="email"
            disabled={true}
            className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          />
        </div>

        <div className="mt-4">
          <label className="font-medium text-lg text-black">Telefone</label>
          <input
            {...register('telefoneCelular')}
            type="text"
            name="telefoneCelular"
            disabled={true}
            className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          />
        </div>

        <div className="mt-4">
          <label className="font-medium text-lg text-black">
            Quantidade de Funcionários
          </label>
          <input
            {...register('totalColaboradores')}
            type="number"
            step={1}
            min={1}
            name="totalColaboradores"
            disabled={true}
            className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          />
        </div>

        <div className="mt-4">
          <label className="font-medium text-lg text-black">
            Há condição de funcionário 70+ ou afastado?
          </label>

          <select
            disabled={true}
            id="colaboradorAfastadoOuMais70"
            {...register('colaboradorAfastadoOuMais70')}
            onChange={(e) =>
              setValue('colaboradorAfastadoOuMais70', e.target.value)
            }
            className="rounded-md w-full shadow-md border-[#D1D5DB] mt-2"
          >
            <option value="">Selecione</option>
            {colaboradorAfastadoOuMais70Options.map(
              (colaboradorAfastadoOuMais70) => (
                <option
                  key={colaboradorAfastadoOuMais70.value}
                  value={colaboradorAfastadoOuMais70.value}
                >
                  {colaboradorAfastadoOuMais70.label}
                </option>
              ),
            )}
          </select>
        </div>

        <div className="my-5 flex justify-end">
          <button
            type="button"
            onClick={() => handleBack()}
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

export default Step10;
