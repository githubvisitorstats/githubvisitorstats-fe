import { Button as MUIButton } from "@mui/material";

const Button = ({ label, ...props }) => {
  return <MUIButton {...props}>{label}</MUIButton>;
};

export default Button;
