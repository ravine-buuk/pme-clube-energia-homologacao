/* eslint-disable prettier/prettier */
import FaqAccordion from './FaqAccordion';

export default function QuestionSection() {
  const data = [
    {
      key: 1,
      title: 'Quais coberturas a empresa deve ?',
      description:
        'Nosso seguro de vida em grupo para empresas contempla todas as coberturas e assistências exigidas  pela convenção coletiva da sua categoria. ',
    },
    {
      key: 2,
      title: `Existe um número mínimo de funcionários necessário
      para a contratação de seguro de vida empresarial?`,
      description:
        'Com o Clube Energia, a partir de duas vidas, você já pode garantir esse benefício. Essas duas vidas podem ser compostas por dois colaboradores ou por um sócio e um colaborador. A única exigência é que 100% dos colaboradores sejam incluídos no seguro.',
    },
    {
      key: 3,
      title: `Colaboradores portadores de necessidades especiais
        podem ser incluídos no seguro de vida empresarial?`,
      description:
        'Sim, desde que declarada a deficiência no ato da contratação para que a seguradora analise o risco a ser aceito.',
    },
    {
      key: 4,
      title: `O que acontece se ocorrer um acidente na obra e a
        empresa não tiver seguro de vida para o funcionário?`,
      description:
        'As implicações podem variar de acordo com a legislação local, as políticas internas da empresa e a origem do acidente. Em muitos casos, a empresa pode ser responsável por arcar com os custos médicos e outras despesas relacionadas ao ocorrido. No entanto, a ausência de um seguro de vida pode deixar o funcionário e sua família desprotegidos em caso de óbito ou invalidez permanente devido ao acidente. Portanto, é altamente recomendável a contratação de seguro de vida para  funcionários como uma medida de proteção e responsabilidade corporativa.',
    },
    {
      key: 5,
      title: `O responsável pela obra pode exigir que seus empreiteiros contratados
        apresentem relação de seguro de vida dos funcionários para atuação no local?`,
      description:
        'Sim, essa é uma prática comum na construção civil, em que, para se isentar de responsabilidade financeira, o responsável exige que seus prestadores mantenham um seguro de vida ativo para os funcionários.',
    },
  ];
  return (
    <section className="px-5 flex items-center justify-center  lg:mx-0 lg:w-full bg-[#F2F2F2] pb-10 lg:h-[700px] ">
      <div className="max-w-6xl flex flex-col items-center">
        <h1 className="py-10 font-inter  italic uppercase lg:text-[60px] text-[24px] max-w-[160px] md:max-w-full lg:max-w-full font-semibold md:text-justify text-center leading-normal text-[#404040]">
          Perguntas frequentes
        </h1>
        <div className="lg:max-w-6xl w-full px-2 lg:px-0">
          {data.map((item) => (
            <FaqAccordion
              key={item.key}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
