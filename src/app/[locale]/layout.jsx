import React from "react";
import initTranslations from "../i18n";
import TranslationProvider from "../../app/[locale]/TranslationProvider";
import dynamic from "next/dynamic";
import { namesAllowed } from "../../names";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

const ChatBotButton = dynamic(() => import("../Chatbot/ChatBotButton"), {
  loading: () => <p>Loading...</p>,
});
const i18nNamespaces = namesAllowed;

import CookieBanner from "./components/CookiesBanner";
import Head from "next/head";

export default async function Layout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <Head>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      </Head>
      {/* <head>
        <Script
          id="google-analytics"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        ></Script>
        <Script>
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
          `}
        </Script>
      </head> */}
      {/* <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/41506338.js"
      ></script> */}
      {children}
      <CookieBanner />
      <ChatBotButton />
    </TranslationProvider>
  );
}
