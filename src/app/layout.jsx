import React from "react";
import "../app/[locale]/globals.css";
import i18nConfig from "@/app/i18nConfig";
import GoogleAnalytics from "./[locale]/components/GA";
import Head from "next/head";
import { Montserrat } from "next/font/google"; //
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Stable Home",
  description: "Imagine a Stable World",
  icons: {
    icon: "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712374010/Stable%20Mockups/Main/icon_jdfsgg.png",
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={montserrat.className}>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
