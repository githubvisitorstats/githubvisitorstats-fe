import theme from "@/theme";
import { Stack } from "@mui/material";

const SplashBackground = ({ children }) => {
  return (
    <Stack
      position={"relative"}
      sx={{
        backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.palette.purple.main}, ${theme.palette.black.main} 87%)`,
      }}
    >
      <Stack
        position={"absolute"}
        sx={{
          backgroundImage: `url(assets/img/bg-pattern.png)`,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Stack>
      {children}
    </Stack>
  );
};

export default SplashBackground;
