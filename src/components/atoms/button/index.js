import React from "react";
import { Button as MUIButton, CircularProgress, Stack } from "@mui/material";
import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  loading = false,
  disabled = false,
  ...props
}) => {
  return (
    <MUIButton
      sx={{ pointerEvents: loading ? "none" : "auto" }}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <Stack
        sx={{ opacity: loading ? 0 : 1 }}
        flexDirection={"row"}
        gap={"15px"}
      >
        {children}
      </Stack>
      {loading && (
        <CircularProgress
          size={20}
          color="inherit"
          sx={{ position: "absolute" }}
        />
      )}
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
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
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
