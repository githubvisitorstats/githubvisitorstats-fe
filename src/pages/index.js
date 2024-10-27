import Head from "next/head";
import theme from "@/theme";

import { ThemeProvider } from "@mui/material";
import { UnderConstruction } from "@/components/templates";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Github Visitor Stats - A tool to track visits to your GitHub profile
        </title>
        <meta
          name="description"
          content="A tool to track visits to your GitHub profile"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UnderConstruction />
    </>
  );
}
