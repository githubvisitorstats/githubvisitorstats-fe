import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import theme from "@/theme";

import { Container, Stack, Typography } from "@mui/material";
import {
  AboutContent,
  DiscussionContent,
  FeatureContent,
  Header,
  SplashContent,
} from "@/components/organisms";
import { SplashBackground } from "@/components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleSection } from "@/components/molecules";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
      <footer
        style={{
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.purple.main}, ${theme.palette.purple.dark})`,
        }}
      >
        <Container>
          <Stack padding={"30px 0px"}>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              borderBottom={`1px solid rgba(255, 255, 255, 0.1)`}
              paddingBottom={"30px"}
              marginBottom={"30px"}
            >
              <Stack maxWidth={"222px"} gap={"30px"}>
                <Link href={"/"}>
                  <Image
                    src={"assets/img/logo-white.svg"}
                    width={40}
                    height={40}
                    alt="Github Visitor Stats Logo"
                  />
                </Link>
                <Typography variant="overline" color={theme.palette.white.main}>
                  GitHub Visitor Stats is a simple web application that allows
                  you to track who has visited your GitHub profile.
                </Typography>
              </Stack>
              <Stack>
                <Link
                  href={"https://github.com/githubvisitorstats"}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    fontSize={"21px"}
                    color={theme.palette.grey.light}
                  />
                </Link>
              </Stack>
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Typography
                variant="overline"
                fontSize={"13px"}
                lineHeight={"normal"}
                color={theme.palette.grey.light}
              >
                © 2024 Yasin B. Kalkan
              </Typography>
              <Stack flexDirection={"row"} gap={"30px"}>
                <Typography variant="button">
                  <Link href={""}>How It Works</Link>
                </Typography>
                <Typography variant="button">
                  <Link href={""}>FAQ</Link>
                </Typography>
                <Typography variant="button">
                  <Link href={""}>Privacy Policy</Link>
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </footer>
    </>
  );
}
