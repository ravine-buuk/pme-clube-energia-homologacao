import phone from '@/assets/images/Phone.png';
import wpp from '@/assets/images/Modo_de_isolamento.png';
import email from '@/assets/images/Mail.png';
import instagram from '@/assets/images/icon_instagram.png';

import { useState } from 'react';
import NImage from 'next/image';
import InputMask from 'react-input-mask';
import api from '@/lib/api';
import { Oval } from 'react-loader-spinner';
import Swal from 'sweetalert2';

export default function FormSection() {
  const Image = NImage as any;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const submitForm = async (e: any) => {
    try {
      e.preventDefault();

      const nameRegex = /^(\S+\s+\S+)+$/;
      if (!nameRegex.test(form.name)) {
        return Swal.fire({
          text: 'Digite o nome completo (nome e sobrenome).',
          icon: 'error',
          confirmButtonColor: '#F9AB35',
        });
      }

      setLoading(true);

      const response = await api.post('contact', {
        type: 'group',
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });

      console.debug(response);

      return Swal.fire({
        text: 'Recebemos sua mensagem! Obrigado.',
        icon: 'success',
        confirmButtonColor: '#F9AB35',
      }).then(() => location.reload());
    } catch (error: any) {
      console.debug(error);

      if (error?.response.status == 400) {
        Swal.fire({
          text: 'Dados inválidos! Tente novamente.',
          icon: 'warning',
          confirmButtonColor: '#F9AB35',
        });
      } else if (error?.response.status == 500) {
        Swal.fire({
          text: 'Ocorreu um erro na requisição.',
          icon: 'error',
          confirmButtonColor: '#F9AB35',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="presencial-formulario">
      <div className="flex flex-col lg:flex-row bg-[#F2F2F2]">
        <div className="relative py-10 w-full max-w-xl">
          <div className="absolute inset-0 bg-[#F9AB35]" />
          <div className="max-w-7xl mx-auto relative flex justify-center items-center align-middle">
            <div className="px-8 text-[#1E1E1E]">
              <h1 className="uppercase lg:text-3xl font-semibold lg:leading-[36px] text-2xl">
                Em caso de dúvidas
                <br /> fale conosco
              </h1>
              <div className="lg:hidden">
                {/* Conteúdo para mobile */}
                <p className="text-lg font-normal leading-[22px] max-w-xs mt-3">
                  Estamos à disposição para responder às suas perguntas.
                  Preencha os campos do formulário abaixo, e responderemos em
                  breve.
                </p>
              </div>

              <div className="hidden lg:block">
                {/* Conteúdo para desktop */}
                <p className="text-lg font-normal leading-[22px] max-w-xs mt-3">
                  Estamos à disposição para responder às suas perguntas.
                  Preencha os campos do formulário ao lado, e responderemos em
                  breve.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex flex-col items-start">
                  <div className="flex flex-row justify-center items-center my-1">
                    <Image src={phone} alt="phone-icon" />
                    <p className="ml-3 text-[16px] font-normal lg:leading-[24px]">
                      (48) 3224-4884
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center my-1">
                    <Image src={wpp} alt="mail-icon" />
                    <p className="ml-3 text-[16px] font-normal lg:leading-[24px]">
                      (48) 99962-2760
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center my-1">
                    <Image src={email} alt="mail-icon" />
                    <p className="ml-3 text-[16px] font-normal lg:leading-[24px]">
                      clubeenergia@clubeenergia.com.br
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center my-1">
                    <Image src={instagram} alt="mail-icon" />
                    <p className="ml-3 text-[16px] font-normal lg:leading-[24px]">
                      @clubeenergia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={submitForm}
          id=""
          className="form-index grid gap-y-6 my-10 px-8 w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            onChange={handleChange}
          />
          <InputMask
            mask="(99) 99999-9999"
            required
            type="tel"
            name="phone"
            onChange={handleChange}
            autoComplete="tel"
            placeholder="Telefone"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            required
            onChange={handleChange}
          />
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
                className={
                  'justify-center inline-flex items-center bg-[#F9AB35] text-white px-8 py-2 rounded-lg text-2xl lg:w-fit disabled:opacity-75'
                }
                type="submit"
                id="pme-enviar-forms"
              >
                Enviar
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
