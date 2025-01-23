/* eslint-disable prettier/prettier */
import Image from 'next/image';
import logo from '@/assets/images/Logo_Energia_Seguridade_2 2.png';

export default function InfoSection() {
  return (
    <section className="bg-[#D9D9D9] flex justify-center items-center lg:h-[521px] h-[400px]">
      <div className="lg:max-w-7xl flex flex-col items-center justify-center">
        <div className="lg:h-[210px] lg:w-[196px] w-[100px] h-[107px] my-5 lg:my-0">
          <Image src={logo} alt="clube-energia" height={200} width={196} />
        </div>
        <div className="lg:max-w-[1185px]">
          <p className="lg:text-[30px] text-[16px] px-8 lg:px-0 lg:leading-[36px] leading-normal text-center font-semibold italic text-[#404040]">
            Em decorrência dos 32 anos de atuação no mercado segurador, o Clube
            Energia se tornou referência no segmento de seguro de vida
            empresarial, dispondo assim de todas as coberturas que sua empresa
            precisa para atender às exigências da convenção coletiva e ainda
            garantir tranquilidade para a empresa, seus colaboradores e
            familiares.
          </p>
        </div>
      </div>
    </section>
  );
}
