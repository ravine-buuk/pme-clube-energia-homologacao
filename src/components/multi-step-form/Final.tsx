import Image from 'next/image';
import logoInsta from '@/assets/images/Instagram.png';
import { useFormState } from './FormContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Final() {
  const formState = useFormState();
  const { formData, onHandleBack } = formState;
  const [apiStatus, setApiStatus] = useState('');

  async function enviarRequisicaoAPI() {
    const url = 'https://csprime.buuk.com.br/csprime/seguro/coletivo';
    const authToken =
      '1a6f22c26e3c7516b8978903cae4af6ea9a4e4c49bc9a34a8e4245ee90ddd61b';

    const data = {
      cnpj: formData.cnpj,
      email: formData.email,
      telefone: formData.telefone,
      endereco: {
        cep: formData.cep,
        logradouro: formData.logradouro,
        numero: formData.numero,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
      },
      responsavel: {
        nome: formData.nomeContratacao,
        cpf: formData.cpfContratacao,
        cargo: formData.cargoContratacao,
        email: formData.emailContratacao,
        telefone: formData.telefoneContratacao,
      },
      segurados: [],
    };

    const headers = {
      Authorization: authToken,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.post(url, data, { headers });
      if (response.status === 200) {
        console.log('Resposta da API:', response.data);
        console.log('success');
        setApiStatus('success');
      }
    } catch (error) {
      setApiStatus('error');
      console.log(error);
      console.log(formData);
    }
  }

  useEffect(() => {
    enviarRequisicaoAPI();
    console.log('executou');
  }, []);
  return (
    <section className="flex justify-center items-center flex-col mt-20">
      {apiStatus === 'success' ? (
        <div className="xl:w-[382px] w-[342px] h-[236px] rounded-3xl bg-[#404040] flex flex-col">
          <p className="font-inter text-[18px] text-[#FFF] leading-[27.5px] uppercase p-5 font-bold">
            Em breve voltamos a falar. Estamos a um passo do acesso à apólice.
          </p>

          <p className="font-inter text-[12px] text-[#FFF] leading-[17px] uppercase px-5 font-normal">
            Quando o seu pagamento for aprovado, você receberá um e-mail de
            confirmação com mais detalhes da sua apólice Clube Energia.
          </p>
        </div>
      ) : apiStatus === 'error' ? (
        <div className="xl:w-[382px] w-[342px] h-[236px] rounded-3xl bg-[#404040] flex flex-col">
          <p className="font-inter text-[18px] text-[#FFF] leading-[27.5px] uppercase p-5 font-bold">
            Ops! Algo deu errado.
          </p>

          <p className="font-inter text-[12px] text-[#FFF] leading-[17px] uppercase px-5 font-normal">
            Verifique se os dados inseridos estão corretos e tente novamente.
          </p>
        </div>
      ) : null}

      <div className="xl:w-[382px] w-[342px] mt-5 h-[39px] bg-[#FFBC00] flex justify-center items-center rounded-3xl">
        <div className="flex flex-row">
          <Image src={logoInsta} alt="Logo" width={18} height={18} />
          <div className="ml-2" />
          <a
            href="https://www.instagram.com/clubeenergia/"
            target="_blank"
            rel="noreferrer noopener"
            title="instagram clube energia"
            id="cart-obrigado-siga-instagram"
          >
            <p className="font-inter text-[12px] text-[#3A459C]">
              Siga-nos no Instagram
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
