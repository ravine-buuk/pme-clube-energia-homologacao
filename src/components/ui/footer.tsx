/* eslint-disable prettier/prettier */
export default function Footer() {
  return (
    <footer className="bg-[#F2F2F2] flex justify-center items-center py-10">
      <div className="lg:max-w-7xl flex flex-col justify-center items-center">
        <p className="font-inter font-normal my-5 pb-4 lg:my-0 text-[14px] text-[#393939] leading-[24px]">
          <a href="/politica-de-privacidade" target="_blank">
            Política de Privacidade
          </a>
        </p>
        <p className="max-w-xs text-center lg:max-w-5xl lg:text-left font-inter font-normal text-[14px] text-[#393939] leading-[24px]">
          © 2024 Energia de Seguridade.
        </p>
        <p className="max-w-xs text-center lg:max-w-5xl lg:text-left font-inter font-normal text-[14px] text-[#393939] leading-[24px]">
          Todos os direitos reservados.
        </p>
        <p className="max-w-xs text-center lg:max-w-5xl lg:text-left font-inter font-normal text-[14px] text-[#393939] leading-[24px] mt-2">
          Feito com conhecimento por
          <a
            href="https://www.buuk.com.br/"
            target="_blank"
            className="underline ml-2"
            rel="noopener noreferrer"
          >
            Buuk
          </a>
        </p>
      </div>
    </footer>
  );
}
