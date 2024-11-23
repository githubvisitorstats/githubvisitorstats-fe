import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TB8PH2QP8F"
        ></Script>
        <Script strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments )}
          gtag('js', new Date()); gtag('config', 'G-TB8PH2QP8F');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
