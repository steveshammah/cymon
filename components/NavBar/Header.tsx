import Head from "next/head";
import React from "react";

export default function Header() {
  return (
    <Head>
      <title>Takeover Media </title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="We aim to transform mainstream media using tech and high end coverage of events."
        key="desc"
      />
      <meta name="viewport" content="width=device-width" />

      <meta property="og:title" content="Takeover Media by Shammah" />
      <meta property="og:type" content="website" />

      <meta
        name="og:description"
        content="We aim to transform mainstream media using tech and high end coverage of events."
      />
      <meta property="og:url" content="https://fourbic.com/" />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="Takeover Media by Shammah" />
      <meta property="fb:app_id" content="123456789" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@steveshammah_" />
      <meta name="twitter:creator" content="@steveshammah_" />
      <meta name="twitter:url" content="https://twitter.com/steveshammah_" />
      <meta
        name="twitter:title"
        content="We aim to transform mainstream media using tech and high end coverage of events."
      />
      <meta
        name="twitter:description"
        content="We aim to transform mainstream media using tech and high end coverage of events."
      />
      <meta
        name="twitter:image"
        content="https://twitter.com/steveshammah_/photo"
      />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Takeover Media" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#F16722" />

      <link
        rel="canonical"
        href="https://takeover.vercel.app"
        key="canonical"
      />
    </Head>
  );
}
