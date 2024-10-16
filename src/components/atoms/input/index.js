import { TextField } from "@mui/material";

const Input = ({ label, ...props }) => {
  return <TextField label={label} {...props} />;
};

export default Input;
