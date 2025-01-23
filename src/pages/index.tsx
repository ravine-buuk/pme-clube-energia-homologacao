import InfoSection from '../components/ui/InfoSection';
import FormSection from '../components/ui/FormSection';
import Head from 'next/head';
import QuestionSection from '../components/ui/QuestionSection';
import ContractSection from '../components/ui/ContractSection';
import HeroSection from '../components/ui/HeroSection';
import Footer from '../components/ui/footer';
import WhatsFlutuante from '../components/FlutuantWhatszap';
import TableComponent from '@/components/ui/TableComponent';
import Space from '@/components/ui/space';
import MobileTableComponent from '@/components/ui/MobileTableComponent';
import MobileReasonsToHire from '@/components/ui/MobileReasonsToHire';

export default function Home() {
  return (
    <div className="font-inter">
      <Head>
        <title>Clube Energia | Seguro de Vida </title>
        <meta
          name="description"
          content="Seguro de Vida Empresarial é uma proteção obrigatória para atividades profissionais que envolvem riscos diários, como postos de combustíveis e construção civil. Ato de responsabilidade que demonstra preocupação com o bem-estar dos colaboradores e seus parentes."
        />
        <link rel="icon" href="/Logo_Energia_Seguridade_2 1.png" />
      </Head>
      <WhatsFlutuante />
      <HeroSection />
      <Space />
      <InfoSection />

      <TableComponent />
      <ContractSection />
      <MobileTableComponent />
      <MobileReasonsToHire />
      <QuestionSection />
      <FormSection />
      <Footer />
    </div>
  );
}
