import Image from 'next/image';
import logo from '@/assets/images/Logo_Energia_Seguridade_2 1.png';
import dynamic from 'next/dynamic';

import { Step1 } from '../../components/multi-step-form/Step1';
import { Step2 } from '../../components/multi-step-form/Step2';
import { Step3 } from '../../components/multi-step-form/Step3';
import { Step4 } from '../../components/multi-step-form/Step4';
import { Step5 } from '../../components/multi-step-form/Step5';
import { Step6 } from '../../components/multi-step-form/Step6';
import { Step7 } from '../../components/multi-step-form/Step7';
import { Step8 } from '../../components/multi-step-form/Step8';
import { Step9 } from '../../components/multi-step-form/Step9';
import { Step10 } from '../../components/multi-step-form/Step10';
import { Step11 } from '../../components/multi-step-form/Step11';
import { Step12 } from '../../components/multi-step-form/Step12';
import { Step13 } from '../../components/multi-step-form/Step13';
import { Step14 } from '../../components/multi-step-form/Step14';

const Step15 = dynamic(
  () => import('../../components/multi-step-form/Step15'),
  {
    ssr: false,
  },
) as any;

import { Step16 } from '../../components/multi-step-form/Step16';

import { useFormState } from '../../components/multi-step-form/FormContext';
import StepIndicator from '../../components/multi-step-form/StepIndicator';

function ActiveStepFormComponent() {
  const { step } = useFormState();

  function updateUrl(url: string) {
    typeof history != 'undefined' && history.replaceState(null, '', url);
  }

  switch (step) {
    case 1: {
      updateUrl('/seguro-coletivo/validar-email');
      return <Step1 />;
    }
    case 2: {
      updateUrl('/seguro-coletivo/codigo-de-validacao-email');
      return <Step2 />;
    }
    case 3: {
      updateUrl('/seguro-coletivo/dados-da-empresa-contratante');
      return <Step3 />;
    }
    case 4: {
      updateUrl('/seguro-coletivo/dados-responsavel');
      return <Step4 />;
    }
    case 5: {
      updateUrl('/seguro-coletivo/cep-empresa');
      return <Step5 />;
    }
    case 6: {
      updateUrl('/seguro-coletivo/endereco-completo');
      return <Step6 />;
    }
    case 7: {
      updateUrl('/seguro-coletivo/quantidade-de-funcionarios');
      return <Step7 />;
    }
    case 8: {
      updateUrl('/seguro-coletivo/funcionarios-com-condicoes-ou-70+');
      return <Step8 />;
    }
    case 9: {
      updateUrl('/seguro-coletivo/numero-para-contato');
      return <Step9 />;
    }
    case 10: {
      updateUrl(
        '/seguro-coletivo/confirmacao-dos-dados-preenchidos-para-apolice',
      );
      return <Step10 />;
    }
    case 11: {
      updateUrl(
        '/seguro-coletivo/confirmacao-do-endereço-preenchido-para-apolice',
      );
      return <Step11 />;
    }
    case 12: {
      updateUrl('/seguro-coletivo/coberturas-aceitar-proposta');
      return <Step12 />;
    }
    case 13: {
      updateUrl('/seguro-coletivo/baixar-contrato-e-boleto');
      return <Step13 />;
    }
    case 14: {
      updateUrl('/seguro-coletivo/obrigada');
      return <Step14 />;
    }
    case 15: {
      updateUrl('/seguro-coletivo/retire-duvidas-com-consultores-no-whatsapp');
      return <Step15 />;
    }
    case 16: {
      updateUrl('/seguro-coletivo/nao-e-empresa-de-construcao-civil');
      return <Step16 />;
    }
    default: {
      updateUrl('/seguro-coletivo/validar-email');
      return <Step1 />;
    }
  }
}

function StepContent({ step }: any) {
  return (
    <section className="flex flex-col items-center justify-center p-5">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        title="Clube Energia"
      >
        {step !== 12 && step !== 13 && (
          <Image src={logo} alt="Logo" width={67} height={73} />
        )}
      </a>

      {step !== 15 && <StepIndicator />}

      <div className="flex flex-col w-full md:w-[100%]">
        <div className="my-2">
          <ActiveStepFormComponent />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { step } = useFormState();
  return <StepContent step={step} />;
}
