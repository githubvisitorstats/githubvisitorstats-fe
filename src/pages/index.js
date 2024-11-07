import Head from "next/head";

import { Container, Stack, Typography } from "@mui/material";
import { Header } from "@/components/organisms";
import {
  Button,
  IconButton,
  Input,
  SplashBackground,
} from "@/components/atoms";
import theme from "@/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FeatureBox, TitleSection } from "@/components/molecules";
import {
  faCoins,
  faGear,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
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
            <Stack
              flexDirection={"row"}
              justifyContent={"center"}
              marginTop={"100px"}
              marginBottom={"30px"}
            >
              <Input
                variant="standard"
                placeholder="Github Username"
                style={{ width: "250px" }}
                className="ButtonAction"
              />
              <Button variant="contained" className="ButtonAction">
                Get Code
              </Button>
            </Stack>
            <Stack width={"70%"} margin={"auto"}>
              <Stack flexDirection={"row"} justifyContent={"center"}>
                <Input
                  variant="filled"
                  value="![Profile Visits](https://img.shields.io/endpoint?url=https://yasinkalkan.com/github-analytics/track.php?user=yasgo)"
                  style={{ width: "100%" }}
                  className="ButtonAction"
                />
                <IconButton className="ButtonAction">
                  <FontAwesomeIcon
                    icon={faCopy}
                    fontSize={"14px"}
                    color={theme.palette.white.main}
                  />
                </IconButton>
              </Stack>
              <Typography
                variant="overline"
                color={theme.palette.grey.light}
                marginTop={"10px"}
              >
                * Paste the tracking code you received into your GitHub
                profile’s README file. This is essential for tracking your
                visitor statistics.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </SplashBackground>
      <Container>
        <Stack
          flexDirection={"row"}
          gap={"40px"}
          marginTop={"-100px"}
          marginBottom={"300px"}
        >
          <FeatureBox
            icon={faCoins}
            title={"Free to Use"}
            detail={
              "You don’t need to pay anything to use GitHub Visitor Stats! All features are completely free with unlimited access. Monitoring your profile is now easy and cost-free!"
            }
          />
          <FeatureBox
            icon={faUserSlash}
            title={"No Registration Required"}
            detail={
              "You don’t need to create an account to use GitHub Visitor Stats! Start using it right away without the hassle of signing up."
            }
          />
          <FeatureBox
            icon={faGear}
            title={"Simple Integration"}
            detail={
              "Easily add a dynamic visitor badge to your GitHub profile with just a few lines of code. Start tracking visitors in seconds!"
            }
          />
        </Stack>
        <TitleSection
          category={"GITHUB VISITOR STATS"}
          title={"The Easy Way to Track Your Profile"}
          detail={
            "GitHub Visitor Stats is a simple web application that allows you to track who has visited your GitHub profile."
          }
        />
        <Stack
          flexDirection={"row"}
          gap={"100px"}
          alignItems={"center"}
          marginBottom={"300px"}
        >
          <Image
            src={"assets/img/preview.png"}
            width={570}
            height={434}
            alt="Preview Picture"
          />
          <Stack gap={"15px"}>
            <Typography variant="body1" color={theme.palette.blue.dark}>
              Users can add a tracking code to their GitHub profiles and see how
              many people have viewed their profile and on which days. This way,
              you can manage your profile more effectively and understand which
              content attracts the most interest from your visitors.
            </Typography>
            <Typography variant="body1" color={theme.palette.blue.dark}>
              The application works in a very straightforward way: The user adds
              a small piece of code generated by the app to their GitHub
              profile. When visitors access your profile, these visits are
              automatically recorded in the app. The system collects daily
              visitor data and displays it on your GitHub profile. This allows
              you to know who visited and when without the need for complex
              tools. Plus, there’s no need for any registration to use this
              system.
            </Typography>
            <Typography variant="body1" color={theme.palette.blue.dark}>
              You can also use{" "}
              <Link
                href={"https://github.com/orgs/githubvisitorstats/discussions"}
                target="_blank"
              >
                GitHub’s Discussions
              </Link>{" "}
              section to ask questions and share feedback about the app with the
              community, or get more information.
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Stack bgcolor={theme.palette.grey.dark}>
        <Container>
          <Stack padding={"150px 0px"} maxWidth={"700px"}>
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
          <Image
            style={{
              position: "absolute",
              width: "auto",
              height: "100%",
              top: 0,
              right: 0,
            }}
            src={"assets/img/discussion-picture.png"}
            width={730}
            height={500}
            alt="Discussion Picture"
          />
        </Container>
      </Stack>
    </>
  );
}
