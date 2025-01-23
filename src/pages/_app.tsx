import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import CGoogleTagManager from '../components/GoogleTagManager';
import CFacebookPixel from '../components/FacebookPixel';
import '@/styles/global.css';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { FormProvider as CFormProvider } from '../components/multi-step-form/FormContext';
import { useState } from 'react';
import { useRouter } from 'next/router';
import CBanner from '../components/Banner';

export default function MyApp({ Component, pageProps }: AppProps) {
  const MainComponent = Component as any;
  const Banner = CBanner as any;
  const GoogleTagManager = CGoogleTagManager as any;
  const FacebookPixel = CFacebookPixel as any;
  const FormProvider = CFormProvider as any;

  const [cookieBanner, setCookieBanner] = useState<boolean>(false);
  const router = useRouter();
  const [vibeCookieConsentAnalytics, setVibeCookieConsentAnalytics] =
    useState<boolean>(
      Cookies.get('clinicaneuroederma_cookie_consent_analytics') === 'true',
    );
  const [
    vibeCookieConsentTechnicallyRequired,
    setVibeCookieConsentTechnicallyRequired,
  ] = useState<boolean>(
    Cookies.get('clinicaneuroederma_cookie_consent_technically_required') ===
      'true',
  );

  useEffect(() => {
    if (
      Cookies.get('clinicaneuroederma_cookie_consent_technically_required') ===
      undefined
    ) {
      setCookieBanner(true);
    }
    if (Cookies.get('clinicaneuroederma_cookie_consent_analytics') === 'true') {
      setVibeCookieConsentAnalytics(true);
    }
    if (
      Cookies.get('clinicaneuroederma_cookie_consent_technically_required') ===
      'true'
    ) {
      setVibeCookieConsentTechnicallyRequired(true);
    }
  }, [
    cookieBanner,
    vibeCookieConsentAnalytics,
    vibeCookieConsentTechnicallyRequired,
  ]);

  useEffect(() => {
    if (
      Cookies.get('clinicaneuroederma_cookie_consent_technically_required') ===
      undefined
    ) {
      setCookieBanner(true);
    }
    if (Cookies.get('clinicaneuroederma_cookie_consent_analytics') === 'true') {
      setVibeCookieConsentAnalytics(true);
    }
    if (
      Cookies.get('clinicaneuroederma_cookie_consent_technically_required') ===
      'true'
    ) {
      setVibeCookieConsentTechnicallyRequired(true);
    }
  }, []);

  useEffect(() => {
    if (
      Cookies.get('clinicaneuroederma_cookie_consent_technically_required') ===
      undefined
    ) {
      setCookieBanner(true);
    }
    if (Cookies.get('clinicaneuroederma_cookie_consent_analytics') === 'true') {
      setVibeCookieConsentAnalytics(true);
    }
    if (
      Cookies.get('clinicaneuroederma_cookie_consent_technically_required') ===
      'true'
    ) {
      setVibeCookieConsentTechnicallyRequired(true);
    }
  }, [router.events]);

  return (
    <div className="relative">
      {cookieBanner && (
        <Banner
          closeBanner={() => {
            setCookieBanner(false);
          }}
          confirmTechnicallyRequired={() => {
            setVibeCookieConsentTechnicallyRequired(true);
          }}
          confirmAnalytics={() => {
            setVibeCookieConsentAnalytics(true);
          }}
        />
      )}
      <div className={`${cookieBanner && 'brightness-50'}`}>
        <GoogleTagManager>
          <FacebookPixel>
            <FormProvider>
              <MainComponent {...pageProps} />
            </FormProvider>
          </FacebookPixel>
        </GoogleTagManager>
      </div>
    </div>
  );
}
