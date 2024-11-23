import "../styles/style.css";

import theme from "@/theme";

import { ThemeProvider } from "@emotion/react";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
