import { Button as MUIButton } from "@mui/material";

const Button = ({ children, ...props }) => {
  return <MUIButton {...props}>{children}</MUIButton>;
};

export default Button;
