import React from "react";
import initTranslations from "../i18n";
import TranslationProvider from "../../app/[locale]/TranslationProvider";
import dynamic from "next/dynamic";
import { namesAllowed } from "../../names";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

import ConsentForm from "./components/ConsentFormComp";

const ChatBotButton = dynamic(() => import("../Chatbot/ChatBotButton"), {
  loading: () => <p>Loading...</p>,
});
const i18nNamespaces = namesAllowed;

import Head from "next/head";

export default async function Layout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      {children}
      {/*  <CookieBanner /> */}

      <ChatBotButton />
      <ConsentForm />
    </TranslationProvider>
  );
}
