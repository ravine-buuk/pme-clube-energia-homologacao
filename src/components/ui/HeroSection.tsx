import Image from 'next/image';
import banner from '@/assets/images/banner.webp';
import logo from '@/assets/images/Logo_Energia_Seguridade_2 1.png';
import icon from '@/assets/images/check_circle.png';
import SubscribeButton from '../SubscribeButton';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col h-4/5 xl:min-h-[720px] 2xl:min-h-[1067px] justify-between max-556:overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={banner}
          alt="Dois profissionais de costas em uma área de construção civil com vários metais. Estão usando chapéu de proteção individual."
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex flex-col relative z-20">
        <div className="bg-[#FFF] lg:w-[242px] w-[130px] h-[120px] lg:h-[310px] flex justify-center items-end lg:ml-16 ml-4 sm:ml-0 rounded-br-3xl rounded-bl-3xl z-30">
          <div className="lg:w-[196px] lg:h-[210px] w-[96px] h-[104px] mb-5 flex items-center justify-center">
            <Image src={logo} alt="logo" width={165} height={180} />
          </div>
        </div>

        <div className="flex w-full flex-col md:flex-row flex-1 mb-10 z-20 relative">
          <div className="flex flex-1 flex-col mr-10">
            <div className="ml-8 lg:ml-16 mt-10">
              <h1 className="font-inter text-5xl xl:text-5xl text-2xl font-semibold leading-tight text-[#FFF] z-20">
                SEGURO DE VIDA
              </h1>
              <h4 className="font-inter text-3xl xl:text-2xl text-lg font-semibold leading-tight text-[#FFF] z-20">
                PARA EMPRESAS DA CONSTRUÇÃO CIVIL
              </h4>
            </div>
            <div className="ml-8 lg:ml-16 mt-2 z-20 relative">
              <p className="font-inter lg:max-w-xl 2xl:text-[24px] xl:text-[20px] text-[16px] font-normal lg:leading-[32px] text-[#FFF] mt-2 pr-8 lg:pr-0">
                Atenção – Seguro Obrigatório para o setor, conforme convenção
                coletiva!
              </p>
            </div>

            <div className="ml-0 lg:ml-0 mt-2 hidden md:flex items-start justify-start">
              <Link href="/seguro-coletivo/" passHref legacyBehavior>
                <div className="ml-0 lg:ml-0 mt-4">
                  <SubscribeButton
                    gtmID="pme-hero-contratar"
                    clickId="pme-hero-contratar"
                    textSize="text-xl"
                    widthButton="px-4"
                    className="custom-subscribe-button ml-2 lg:ml-16"
                  >
                    <span className="subscribe-button-content">
                      CONTRATAR <FaArrowRight className="inline" />
                    </span>
                  </SubscribeButton>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex md:hidden w-full items-center justify-center">
            <Link href="/seguro-coletivo/" passHref legacyBehavior>
              <div className="ml-8 lg:ml-16 mt-4">
                <SubscribeButton
                  gtmID="pme-hero-contratar"
                  clickId="pme-hero-contratar"
                  textSize="text-xl"
                  widthButton="px-4"
                  className="custom-subscribe-button"
                >
                  <span className="subscribe-button-content">
                    CONTRATAR <FaArrowRight className="inline" />
                  </span>
                </SubscribeButton>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative h-20 hidden lg:flex">
        <div className="hidden lg:px-20 absolute top-0 lg:flex flex-row gap-10 w-full items-center justify-center">
          <div className="2xl:bottom-[-95px] 2xl:left-[22rem] xl:bottom-[-95px] xl:left-[3rem] w-[574px] h-[166px]  rounded-[24px] bg-[#404040] flex justify-center items-center pr-5">
            <div className="flex flex-row justify-center items-center">
              <div className="w-[160px] h-[160px] ml-2 flex justify-center items-center">
                <Image src={icon} alt="checked" width={80} height={80} />
              </div>
              <div className="ml-2 lg:max-w-md">
                <p className="font-inter text-[19px] font-normal text-[#FFF] mr-10">
                  Proteção obrigatória para atividades profissionais que
                  envolvem riscos diários.
                </p>
              </div>
            </div>
          </div>
          <div className="2xl:bottom-[-95px] 2xl:right-[22rem] xl:bottom-[-95px] xl:right-[3rem]  w-[574px] h-[166px] rounded-[24px] bg-[#404040] flex justify-center items-center pr-5">
            <div className="flex flex-row justify-center items-center">
              <div className="w-[160px] h-[160px] ml-2 flex justify-center items-center">
                <Image src={icon} alt="checked" width={80} height={80} />
              </div>
              <div className="ml-2 lg:max-w-md">
                <p className="font-inter text-[19px] font-normal text-[#FFF] mr-10">
                  Ato de responsabilidade que demonstra preocupação com o
                  bem-estar dos colaboradores e seus parentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
