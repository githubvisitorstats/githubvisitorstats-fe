import theme from "@/theme";
import { Link, Typography } from "@mui/material";

const NavigationItem = ({ title, ...props }) => {
  return (
    <Link variant="body2">
      {title}
    </Link>
  );
};

export default NavigationItem;
