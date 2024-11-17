import Head from "next/head";

import { Container } from "@mui/material";
import {
  AboutContent,
  DiscussionContent,
  FeatureContent,
  Footer,
  Header,
  SplashContent,
} from "@/components/organisms";
import { SplashBackground } from "@/components/atoms";
import { TitleSection } from "@/components/molecules";

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
          <SplashContent />
        </Container>
      </SplashBackground>
      <Container>
        <FeatureContent />
        <TitleSection
          category={"GITHUB VISITOR STATS"}
          title={"The Easy Way to Track Your Profile"}
          detail={
            "GitHub Visitor Stats is a simple web application that allows you to track who has visited your GitHub profile."
          }
        />
        <AboutContent />
      </Container>
      <DiscussionContent />
      <Footer />
    </>
  );
}
