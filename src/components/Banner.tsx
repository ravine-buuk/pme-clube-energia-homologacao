/* eslint-disable prettier/prettier */
import Cookies from 'js-cookie';

import { useState } from 'react';

type BannerProps = {
  icon?: string;
  buttons?: Array<{
    name: string;
    onClick: () => void;
  }>;
  closeButton?: boolean;
  closeBanner?: () => void;
  confirmTechnicallyRequired?: () => void;
  confirmAnalytics?: () => void;
  description?: string;
  summary: string;
  color?: string;
};

export default function Banner({
  buttons,
  closeBanner,
  confirmTechnicallyRequired,
  confirmAnalytics,
  summary,
  description,
}: BannerProps) {
  const [technicallyRequired, setTechnicallyRequired] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  const handleFirstOption = () => {
    if (!technicallyRequired && !analytics) {
      return;
    }
    if (technicallyRequired) {
      Cookies.set(
        'clinicaneuroederma_cookie_consent_technically_required',
        'true',
        {
          expires: 99999,
        },
      );
      if (confirmTechnicallyRequired) {
        confirmTechnicallyRequired();
      }
    }
    if (analytics) {
      Cookies.set('clinicaneuroederma_cookie_consent_analytics', 'true', {
        expires: 99999,
      });
      if (confirmAnalytics) {
        confirmAnalytics();
      }
    }
    if (closeBanner) {
      closeBanner();
    }
  };

  const handleSecondOption = () => {
    window.open('/politica-de-privacidade', '_blank');
  };

  return (
    <div className="fixed bottom-0 z-20 w-full bg-white ">
      <div className="mx-auto mt-2 max-w-7xl py-5 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center justify-center">
            <div className="font-medium text-blue-600">
              <span className="md:hidden">{summary}</span>
              <span className="hidden md:inline">{description ?? summary}</span>
            </div>
          </div>
          {buttons && (
            <div
              className={`order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto ${
                buttons.length > 1 && 'flex justify-around'
              }`}
            >
              {buttons.map((button) => (
                <button
                  type="button"
                  onClick={button.onClick}
                  key={button.name}
                  className="border-transparent mx-2 flex items-center justify-center rounded-md border bg-blue-600 px-4 py-2 text-sm font-medium shadow-sm"
                >
                  {button.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <p className="mr-4">
            Usamos cookies para armazenar informações sobre como você usa o
            nosso site e as páginas que visita. Tudo para tornar sua experiência
            a mais agradável possível. Ao continuar navegando, você concorda com
            a nossa{' '}
            <span onClick={handleSecondOption} style={{ cursor: 'pointer' }}>
              Política de Privacidade
            </span>
            .
          </p>

          <button
            type="button"
            onClick={handleFirstOption}
            className="focus:outline-none rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
            style={{ width: '300px' }}
          >
            Continuar e fechar
          </button>
        </div>
      </div>
    </div>
  );
}
