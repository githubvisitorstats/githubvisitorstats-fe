import { TextField } from "@mui/material";

const Input = ({ label, ...props }) => {
  return <TextField variant="standard" label={label} {...props} />;
};

export default Input;
