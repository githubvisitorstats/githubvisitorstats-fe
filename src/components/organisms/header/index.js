import { NavigationItem } from "@/components/atoms";
import { AppBar, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        top: 50,
        padding: '0px 24px'
      }}
    >
      <Image
        src={"assets/img/logo.svg"}
        width={50}
        height={50}
        alt="Github Visitor Stats Logo"
      />
      {/* <Stack flexDirection={"row"} gap={"50px"}>
        <NavigationItem href="/" title="How It Works" />
        <NavigationItem href="/" title="FAQ" />
        <NavigationItem href="/" title="Privacy Policy" />
      </Stack> */}
    </AppBar>
  );
};

export default Header;
