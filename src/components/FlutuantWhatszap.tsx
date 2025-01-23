import Image from 'next/image';
import Link from 'next/link';
import WhatsAppIcon from '@/assets/images/whatsapp-flutuante.webp';

export default function WhatsFlutuante() {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5548999622760&text=Olá!%20Estou%20no%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20seguro%20de%20vida%20em%20grupo.%20"
      passHref
    >
      <a target="_blank" rel="noopener noreferrer">
        <button
          id="pme-whatsapp-flutuante"
          className="fixed bottom-5 right-5 z-50 flex justify-end md:bottom-10 md:right-10"
        >
          <Image
            id="pme-whatsapp-flutuante"
            quality={100}
            src={WhatsAppIcon}
            width={55}
            height={55}
            alt="WhatsAppIcon"
          />
        </button>
      </a>
    </Link>
  );
}
