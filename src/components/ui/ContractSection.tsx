/* eslint-disable prettier/prettier */

import grid1 from '@/assets/images/Quadros EMPRESARIAL.png';
import grid2 from '@/assets/images/Quadros EMPRESARIAL (1).png';
import grid3 from '@/assets/images/Quadros EMPRESARIAL (2).png';
import grid4 from '@/assets/images/Quadros EMPRESARIAL (3).png';
import Values from './CarouselCard';
import DesktopBenefits from './DesktopBenefits';
import { StaticImageData } from 'next/image';

export interface BenefitsProps {
  data: {
    image: StaticImageData;
    text: string;
  }[];
}

export default function ContractSection() {
  const data = [
    { image: grid1, text: '' },
    { image: grid2, text: '' },
    { image: grid3, text: '' },
    { image: grid4, text: '' },
  ];

  return (
    <section id="beneficios">
      <DesktopBenefits data={data} />

      <div className="md:hidden">
        <div className="bg-[#FFFFFF] pb-6 pt-2 flex flex-col justify-center items-center">
          <Values />
        </div>
      </div>
    </section>
  );
}
