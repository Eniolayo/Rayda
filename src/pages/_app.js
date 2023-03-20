import * as React from "react";
import Head from "next/head";
import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@theme/";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "./createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
