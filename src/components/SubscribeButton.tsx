import { useState } from 'react';

export interface Props {
  type?: 'white' | 'red';
  clickId?: string;
  gtmID?: string;
  centered?: boolean;
  buttonText?: string;
  textSize?: string;
  widthButton?: string;
  link?: string;
  textweight?: string;
  paddingPX?: string;
  className?: string;
  id?: string; // Adicione a prop id
  children?: React.ReactNode; // Adicione a prop children
}

export default function SubscribeButton({
  type,
  centered = false,
  buttonText = 'Matricule-se agora',
  textSize = 'text-3xl',
  widthButton = 'px-8',
  textweight = 'font-medium',
  paddingPX = '',
  className = '',
  id = '', // Adicione a prop id
  children,
}: Props) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative flex flex-row ${
        centered ? 'items-center' : 'items-start'
      }`}
    >
      <button
        className={`uppercase ${
          type === 'red' &&
          `bg-[#404040] text-[#F9AB35] border-2 border-b-0 border-l-0 border-[#6B6262] ${textweight} ${paddingPX} `
        } ${
          type === 'white' &&
          `bg-white text-[#A4161A] border border-[#A4161A] ${
            isHovered ? 'hover:bg-[#A4161A] hover:text-white' : ''
          }`
        } ${widthButton} py-2 rounded-lg ${textSize} w-fit ${textweight} ${paddingPX} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsSubscribed(!isSubscribed)}
        id={id} // Adicione a prop id aqui
      >
        {children ? (
          children
        ) : (
          <span
            className={`pr-2 ${
              type === 'white' ? 'font-semibold' : 'font-medium'
            }`}
          >
            {buttonText}
          </span>
        )}
      </button>
    </div>
  );
}
