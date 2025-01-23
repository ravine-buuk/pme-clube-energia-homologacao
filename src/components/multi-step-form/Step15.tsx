import React from 'react';

export function Step15() {
  return (
    <form className="flex w-full justify-center items-center">
      <div className="flex flex-col max-w-[80vh] md:max-w-[380px] mx-auto px-[40px] text-center">
        <div className="mt-14">
          <div className="flex flex-col gap-6 items-center">
            <label className="text-[#111827] text-lg font-medium leading-6">
              Deseja tirar alguma dúvida com um de nossos consultores?
            </label>
            <div className="grid gap-3">
              <label className="text-xl font-semibold text-[#111827]">
                Estamos disponíveis
              </label>

              <label className="text-[#6B7280] text-base max-w-[200px]">
                Clique no botão abaixo e fale conosco via WhatsApp.
              </label>
            </div>
            <div className="grid gap-3">
              <div className="w-full h-[0.5px] bg-gray-200" />
              <a
                id="siticom-whatsapp-clube-energia-cart"
                href="https://api.whatsapp.com/send?phone=5548999622760&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida."
                target="_blank"
                rel="noreferrer"
                className="bg-[#F9AB35] p-2 rounded-xl shadow-[0_1px_3px_0px_#00000029]"
              >
                <span className="text-white">WHATSAPP CLUBE ENERGIA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Step15;
