import Link from 'next/link';
import Image from 'next/image';
import { BenefitsProps } from './ContractSection';
import SubscribeButton from '../SubscribeButton';

export default function DesktopBenefits({ data }: BenefitsProps) {
  return (
    <div className="hidden md:block bg-[#F2F2F2] pt-40 lg:pb-2">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="py-10 font-inter italic uppercase text-[60px] font-semibold leading-normal text-[#404040]">
          Motivos para contratar
        </h1>
        <div className="lg:max-w-7xl grid lg:grid-cols-4 grid-cols-2 gap-4">
          {data.map((item: any, index) => (
            <div className="text-center relative" key={index}>
              <div className="relative group">
                <Image
                  src={item.image}
                  alt="image"
                  width={376}
                  height={376}
                  className="transition duration-300 hover:shadow-white"
                  placeholder="blur"
                />
                <div className="absolute top-0 left-0 w-full h-full transition duration-300 opacity-0 group-hover:opacity-25 bg-white"></div>
              </div>

              <p
                className="max-w-xl text-center font-black text-[21px] absolute w-full bottom-36 mb-4 text-[#FFFFFF] font-inter"
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></p>
            </div>
          ))}
        </div>
        <Link href="/seguro-coletivo/" passHref legacyBehavior>
          <div className="flex justify-center mt-14 mb-2">
            <SubscribeButton
              gtmID="contratar-agora-pme"
              type="red"
              textSize="text-3xl"
              widthButton="px-16"
              buttonText="Contratar agora"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
