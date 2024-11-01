import Head from "next/head";

import { Container, Stack, Typography } from "@mui/material";
import { Header } from "@/components/organisms";
import { SplashBackground } from "@/components/atoms";
import theme from "@/theme";
import Input from "@/components/atoms/input";

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
      {/* <UnderConstruction /> */}
      <SplashBackground>
        <Container>
          <Header />
          <Stack
            flexDirection={"column"}
            padding={"300px 0px"}
            maxWidth={"700px"}
            justifyContent={"center"}
            margin={"auto"}
            textAlign={"center"}
          >
            <Typography
              variant="h1"
              color={theme.palette.white.main}
              marginBottom={"5px"}
            >
              Github Visitor Stats
            </Typography>
            <Typography variant="h4" color={theme.palette.grey.light}>
              Easily track your GitHub profile visits and get detailed
              analytics. Monitor your visitor statistics in real-time with a
              simple code added to your profile.
            </Typography>
            <Input placeholder="Github Username" />
          </Stack>
        </Container>
      </SplashBackground>
    </>
  );
}
