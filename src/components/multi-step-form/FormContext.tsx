/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IFormContext {
  hash: any;
  setHash: Dispatch<SetStateAction<any>>;
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  urlBoleto: any;
  setUrlBoleto: Dispatch<SetStateAction<any>>;
  urlContrato: any;
  setUrlContrato: Dispatch<SetStateAction<any>>;
  onHandleBack: (val?: number) => void;
  onHandleNext: (val?: number) => void;
  onHandleContinue: () => void;
  step: number;
}

const FormContext = createContext<IFormContext>({
  hash: '',
  setHash: () => {},
  formData: {},
  setFormData: () => {},
  urlBoleto: '',
  setUrlBoleto: () => {},
  urlContrato: '',
  setUrlContrato: () => {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  onHandleContinue: () => {},
  step: 0,
});

interface IProps {
  children: ReactNode;
}

export function FormProvider({ children }: IProps) {
  const [step, setStep] = useState<number>(1);
  const [urlBoleto, setUrlBoleto] = useState<any>('');
  const [urlContrato, setUrlContrato] = useState<any>('');

  // Obtém o hash do formulário,
  // necessário para identificar o cliente nas requisições
  const [hash, setHash] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('formHash')!;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('formHash', hash!);
  }, [hash]);

  // Obtém os dados salvos do formulário
  const [formData, setFormData] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('formData');
      return savedData ? JSON.parse(savedData) : {};
    }
    return {};
  });

  useEffect(() => {
    if (typeof window !== 'undefined')
      localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  function onHandleNext(stepTo?: number) {
    setStep((prev) => stepTo ?? prev + 1);
  }

  function onHandleBack(stepTo?: number) {
    setStep((prev) => stepTo ?? prev - 1);
  }

  const Provider = FormContext.Provider as any;

  return (
    <Provider
      value={{
        hash,
        setHash,
        formData,
        setFormData,
        urlBoleto,
        setUrlBoleto,
        urlContrato,
        setUrlContrato,
        onHandleBack,
        onHandleNext,
        onHandleContinue: () => {},
        step,
      }}
    >
      {children}
    </Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
