import theme from "@/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";

const FeatureBox = ({ icon, title, detail }) => {
  return (
    <Stack
      alignItems={"flex-start"}
      borderRadius={"6px"}
      boxShadow={"0 0 4px 0 rgba(0, 0, 0, 0.1)"}
      padding={"50px"}
      bgcolor={theme.palette.white.main}
      flex={1}
    >
      <FontAwesomeIcon
        icon={icon}
        fontSize={"30px"}
        color={theme.palette.purple.main}
      />
      <Typography
        variant="h5"
        marginTop={"30px"}
        marginBottom={"15px"}
        color={theme.palette.purple.main}
      >
        {title}
      </Typography>
      <Typography variant="body1" color={theme.palette.blue.dark}>
        {detail}
      </Typography>
    </Stack>
  );
};

export default FeatureBox;
