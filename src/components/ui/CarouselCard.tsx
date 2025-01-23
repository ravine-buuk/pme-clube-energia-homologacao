import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import icon from '@/assets/images/check_circle.png';

export default function Values() {
  const [activeCard, setActiveCard] = useState(1);
  const handlers = useSwipeable({
    onSwipedLeft: () => console.log('swiped left'),
    onSwipedRight: () => {
      if (activeCard === 1) {
        setActiveCard(2);
      } else if (activeCard === 2) {
        setActiveCard(3);
      }
    },
  });
  const values = [
    {
      key: 1,
      description:
        'Proteção obrigatória para atividades profissionais que envolvem riscos diários.',
    },
    {
      key: 2,
      description:
        'Ato de responsabilidade que demonstra preocupação com o bem-estar dos colaboradores e seus parentes.',
    },
  ];

  return (
    <div className="max-w-xs pt-12 pb-4 mx-auto overflow-auto">
      <div className="gap-2 flex flex-row md:flex-row md:overflow-auto">
        {values.map((value, index) => (
          <div
            key={value.key}
            className="relative z-20 h-[151px] flex items-center min-w-[80%] md:min-w-[50%] lg:min-w-[33%] xl:min-w-[25%] p-3 bg-[#404040] rounded-3xl"
            {...handlers}
            role="button"
            tabIndex={index}
          >
            <p className="font-normal font-inter text-center text-[14px] text-[#FFF] leading-normal">
              {value.description}
            </p>
            <div
              key={value.key}
              className="absolute right-24 md:right-12 lg:right-24 -top-11"
            >
              <Image src={icon} alt="checked" width={60} height={60} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
