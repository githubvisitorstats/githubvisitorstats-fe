import { Stack } from "@mui/material";
import { FeatureBox } from "@/components/molecules";
import {
  faCoins,
  faGear,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";

const FeatureContent = () => {
  return (
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
  );
};

export default FeatureContent;
