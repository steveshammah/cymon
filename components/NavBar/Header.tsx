import Head from "next/head";
import React from "react";

export default function Header() {
  return (
    <Head>
      <title>CYMON | cybersecurity assessment needs </title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="We derive insights that allow you to reach the data decisions you need instantly. We make sharing your findings easy with attractive data reports and visuals designed just for your Audience."
        key="desc"
      />
      <meta name="viewport" content="width=device-width" />

      <meta property="og:title" content="CYMON by Fourbic" />
      <meta property="og:type" content="website" />

      <meta
        name="og:description"
        content="We derive insights that allow you to reach the data decisions you need instantly. We make sharing your findings easy with attractive data reports and visuals designed just for your Audience."
      />
      <meta property="og:url" content="https://fourbic.com/" />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="CYMON by Fourbic" />
      <meta property="fb:app_id" content="123456789" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@fourb1c" />
      <meta name="twitter:creator" content="@steveshammah_" />
      <meta name="twitter:url" content="https://twitter.com/fourb1c" />
      <meta
        name="twitter:title"
        content="Sustainability starts with #data, We are building a sustainable future, one data point at a time."
      />
      <meta
        name="twitter:description"
        content="Sustainability starts with #data, We are building a sustainable future, one data point at a time."
      />
      <meta name="twitter:image" content="https://twitter.com/fourb1c/photo" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="CYMON" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#F16722" />

      <link rel="canonical" href="https://fourbic.com/" key="canonical" />
    </Head>
  );
}
