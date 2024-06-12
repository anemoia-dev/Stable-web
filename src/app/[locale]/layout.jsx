import React from "react";
import initTranslations from "../i18n";
import TranslationProvider from "../../app/[locale]/TranslationProvider";
import dynamic from "next/dynamic";
import { namesAllowed } from "../../names";
const ChatBotButton = dynamic(() => import("../Chatbot/ChatBotButton"), {
  loading: () => <p>Loading...</p>,
});
const i18nNamespaces = namesAllowed;

export default async function Layout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      {/* <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/41506338.js"
      ></script> */}
      {children}
      <ChatBotButton />
    </TranslationProvider>
  );
}
