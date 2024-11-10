import theme from "@/theme";

import { Stack, Typography } from "@mui/material";
import { Button, IconButton, Input } from "@/components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const SplashContent = () => {
  return (
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
        Easily track your GitHub profile visits and get detailed analytics.
        Monitor your visitor statistics in real-time with a simple code added to
        your profile.
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
          * Paste the tracking code you received into your GitHub profile’s
          README file. This is essential for tracking your visitor statistics.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SplashContent;
