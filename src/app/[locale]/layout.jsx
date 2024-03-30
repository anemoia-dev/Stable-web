import React from "react";
import initTranslations from "../i18n";
import TranslationProvider from "../../app/[locale]/TranslationProvider";
import { namesAllowed } from "../../names";

const i18nNamespaces = namesAllowed;

export default async function Layout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      {children}
    </TranslationProvider>
  );
}
