import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import theme from "@/theme";

import { Container, Stack, Typography } from "@mui/material";
import {
  AboutContent,
  FeatureContent,
  Header,
  SplashContent,
} from "@/components/organisms";
import { Button, SplashBackground } from "@/components/atoms";
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
      <Stack bgcolor={theme.palette.grey.dark}>
        <Container>
          <Stack
            padding={"150px 0px"}
            sx={{
              maxWidth: "700px", // Varsayılan olarak %100 genişlik
              "@media (min-width: 576px)": {
                maxWidth: "100%", // small
              },
              "@media (min-width: 768px)": {
                maxWidth: "100%", // medium
              },
              "@media (min-width: 992px)": {
                maxWidth: "400px", // large
              },
              "@media (min-width: 1200px)": {
                maxWidth: "600px", // x-large
              },
              "@media (min-width: 1400px)": {
                maxWidth: "700px", // xx-large
              },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography variant="h5" color={theme.palette.white.main}>
              Got Questions? Join the Discussion!
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.grey.light}
              marginTop={"5px"}
              marginBottom={"50px"}
            >
              Share your questions, suggestions, or feedback with us by joining
              the Discussions area on GitHub. Collaborate with our community to
              solve issues and learn more!
            </Typography>
            <Button variant="contained" style={{ gap: "15px" }}>
              <FontAwesomeIcon
                icon={faGithub}
                fontSize={"20px"}
                color={theme.palette.white.main}
              />
              GitHub Discussions
            </Button>
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              width: "auto",
              height: "100%",
              top: 0,
              right: 0,
              "@media (min-width: 768px)": {
                maxWidth: "100%", // medium
              },
            }}
          >
            <Stack
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                backgroundColor: theme.palette.grey.dark,
                opacity: 0.8,
              }}
            ></Stack>
            <Image
              style={{ width: "auto", height: "100%" }}
              src={"assets/img/discussion-picture.png"}
              width={730}
              height={500}
              alt="Discussion Picture"
            />
          </Stack>
        </Container>
      </Stack>
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
