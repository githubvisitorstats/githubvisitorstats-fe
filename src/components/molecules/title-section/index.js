import theme from "@/theme";
import { Stack, Typography } from "@mui/material";

const TitleSection = ({ category, title, detail }) => {
  return (
    <Stack
      maxWidth={"850px"}
      margin={"auto"}
      alignItems={"center"}
      textAlign={"center"}
      marginBottom={"100px"}
    >
      <Typography variant="h2" color={theme.palette.blue.light}>
        {category}
      </Typography>
      <Typography
        variant="h3"
        color={theme.palette.purple.main}
        marginTop={"15px"}
        marginBottom={"5px"}
      >
        {title}
      </Typography>
      <Typography variant="h4" color={theme.palette.blue.dark}>
        {detail}
      </Typography>
    </Stack>
  );
};

export default TitleSection;
