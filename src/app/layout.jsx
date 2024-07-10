import React from "react";
import "../app/[locale]/globals.css";
import i18nConfig from "@/app/i18nConfig";

import Head from "next/head";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <head>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
        {/*  <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} /> */}
        <Script
          id="google-analytics"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        ></Script>
        <Script>
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
