import Image from 'next/image';
import SubscribeButton from '../SubscribeButton';
import Link from 'next/link';

import grid1 from '@/assets/images/Quadros EMPRESARIAL.png';
import grid2 from '@/assets/images/Quadros EMPRESARIAL (1).png';
import grid3 from '@/assets/images/Quadros EMPRESARIAL (2).png';
import grid4 from '@/assets/images/Quadros EMPRESARIAL (3).png';

export default function MobileReasonsToHire() {
  const data = [
    { image: grid1, text: '' },
    { image: grid2, text: '' },
    { image: grid3, text: '' },
    { image: grid4, text: '' },
  ];

  return (
    <div className="block md:hidden">
      <h1 className="pt-10 pb-5 text-center font-inter italic uppercase text-[24px] font-semibold leading-tight text-[#404040]">
        Motivos para
        <br />
        contratar
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4  ">
          {data.map((item: any, index) => (
            <div className="text-center relative " key={index}>
              <Image
                src={item.image}
                alt={`Imagem ${index + 1}`}
                width={160}
                height={160}
                placeholder="blur"
              />
              <p
                className="text-center font-black text-[10px] absolute w-full bottom-6 mb-4 text-[#FFFFFF] font-inter"
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  items-center justify-center mt-10">
        <Link href={'/seguro-coletivo/'} passHref legacyBehavior>
          <div className="flex justify-center mt-14 mb-2">
            <SubscribeButton
              type="red"
              gtmID="contratar-agora-pme"
              textSize="text-xl"
              widthButton="px-16"
              buttonText="Contratar agora"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
