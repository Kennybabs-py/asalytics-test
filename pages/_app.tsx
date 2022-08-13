import React, { Fragment } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Head from "next/head";
import "styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <title>ASAlytics</title>
            <meta name="description" content="Asalytics assessment" />
            <link rel="icon" href="/favicon.ico" />
          </Head>{" "}
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default MyApp;
