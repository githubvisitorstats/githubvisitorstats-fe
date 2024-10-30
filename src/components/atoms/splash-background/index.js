import theme from "@/theme";
import { Stack } from "@mui/material";

const SplashBackground = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.palette.purple.main}, ${theme.palette.black.main} 87%)`,
      }}
    ></Stack>
  );
};

export default SplashBackground;
