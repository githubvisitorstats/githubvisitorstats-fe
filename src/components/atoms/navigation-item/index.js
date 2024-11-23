import theme from "@/theme";
import { Link, Typography } from "@mui/material";

const NavigationItem = ({ title }) => {
  return (
    <Link
      href="/about"
      variant="body2"
      underline="none"
      color={theme.palette.white.main}
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
