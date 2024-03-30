import React from "react";
import "../app/[locale]/globals.css";
import i18nConfig from "@/app/i18nConfig";
import Head from "next/head";
import { Montserrat } from "next/font/google"; //
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Stable Home",
  description: "Imagine a Stable World",
  icons: {
    icon: "/icon.png",
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
