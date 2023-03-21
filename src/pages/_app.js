import * as React from "react";
import Head from "next/head";
import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@theme/";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "../store/";
import { Provider } from "react-redux";

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Head>
        <title>Rayda Assessment</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
