import React from "react";
import { Button as MUIButton } from "@mui/material";
import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  ...props
}) => {
  return (
    <MUIButton
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired, // Butonun içinde gösterilecek içerik
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

export default Button;
