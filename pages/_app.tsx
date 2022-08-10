import React, { Fragment } from "react";
import Head from "next/head";
import "styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>ASAlytics</title>
        <meta name="description" content="Asalytics assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
