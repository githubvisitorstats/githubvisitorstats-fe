import theme from "@/theme";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const UnderConstruction = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      position={"relative"}
      width={"100vw"}
      height={"100vh"}
      sx={{
        backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.palette.purple.main}, ${theme.palette.black.main} 87%)`,
      }}
      padding={"0px 25px"}
      boxSizing={"border-box"}
    >
      <Stack
        position={"absolute"}
        left={0}
        right={0}
        top={0}
        bottom={0}
        sx={{
          backgroundImage: "url('assets/img/bg-pattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Stack>
      <Stack textAlign={"center"} zIndex={1} gap={"15px"} alignItems={"center"}>
        <Stack marginBottom={"50px"}>
          <Image src={"assets/img/logo.svg"} width={50} height={50} alt="Github Visitor Stats Logo" />
        </Stack>
        <Typography
          variant="h2"
          color={theme.palette.blue.light}
          textTransform={"uppercase"}
        >
          Under Construction
        </Typography>
        <Typography variant="h1" color={theme.palette.white.main}>
          Github Visitor Stats
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.grey.light}
          maxWidth={700}
        >
          Hello! We're working on the official website for the Github Visitor
          Stats application. Soon, you'll be able to easily view visitor
          analytics with exciting new features. Please stay tuned!
        </Typography>
      </Stack>
    </Stack>
  );
};

export default UnderConstruction;
