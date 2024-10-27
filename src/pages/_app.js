import "../styles/style.css";

import theme from "@/theme";
import Script from "next/script";

import { ThemeProvider } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
