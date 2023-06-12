import { Head, Html, Main, NextScript } from "next/document";
import React from 'react';
export default function Document(){
    return (
    <Html lang = "vi">
      <Head>
        <meta charSet="UTF-8"/>
        <link rel='shortcut icon' href='/images/favicon.png' />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href='/images/favicon.png' />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <noscript strategy="beforeInteractive"  dangerouslySetInnerHTML={{__html : `<noscript><iframe src=""https://www.googletagmanager.com/ns.html?id=GTM-TN2WKK9""
            height=""0"" width=""0"" style=""display:none;visibility:hidden""></iframe></noscript>`}}/>
        <NextScript />
        <Main/>
      </body>
    </Html>
  )
}