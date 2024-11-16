import theme from "@/theme";
import Image from "next/image";

import { Container, Stack, Typography } from "@mui/material";
import { Button } from "@/components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const DiscussionContent = () => {
  return (
    <Stack bgcolor={theme.palette.grey.dark}>
      <Container>
        <Stack
          padding={"150px 0px"}
          sx={{
            maxWidth: "700px",
            "@media (min-width: 576px)": {
              maxWidth: "100%",
            },
            "@media (min-width: 768px)": {
              maxWidth: "100%",
            },
            "@media (min-width: 992px)": {
              maxWidth: "400px",
            },
            "@media (min-width: 1200px)": {
              maxWidth: "600px",
            },
            "@media (min-width: 1400px)": {
              maxWidth: "700px",
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
  );
};

export default DiscussionContent;
