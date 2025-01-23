/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Main, DocumentContext } from 'next/document';
import { GTM_ID } from '../lib/gtm';
import Script from 'next/script';
import { Head as HeadAny } from 'next/document';
import { NextScript as TNextScript } from 'next/document';
const Head = HeadAny as any;
const NextScript = TNextScript as any;

const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID as string;
const adsTrackingId = process.env.NEXT_PUBLIC_ADS_TRACKING_ID as string;
const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID as string;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
            name="facebook-domain-verification"
            content="536018955376263&ev=PageView&noscript=1"
          />
          <meta
            name="google-site-verification"
            content="Fxs9Cg9MreErhGsFDl_KgrzJY-QwvAYbASMduOr3Gr4"
          />
          <Script async strategy="lazyOnload" id="clarity-code">
            {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "j1c148cwnm");
      `}
          </Script>
          {/* Google Tag Manager */}
          <Script async strategy="lazyOnload" id="google-tag-manager-code">
            {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${GTM_ID}');
      `}
          </Script>
          {/* Google Analytics */}
          <Script
            async
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
          />
          <Script async strategy="lazyOnload" id="google-analytics-code">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaTrackingId}', { page_path: window.location.pathname });
      `}
          </Script>

          {/* Google ADS */}
          <Script
            strategy="lazyOnload"
            defer
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${adsTrackingId}`}
          />

          <Script id="gtag" strategy="lazyOnload" defer>
            {`
                 window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16506202365'
                  `}
          </Script>

          {/* Facebook Pixel */}
          <Script async strategy="lazyOnload" id="facebbok-pixel-code">
            {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
      `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="gtm"
            />
          </noscript>

          <noscript>
            <img
              height="0"
              width="0"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt="fb-pixel-no-script-callback"
            />
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
