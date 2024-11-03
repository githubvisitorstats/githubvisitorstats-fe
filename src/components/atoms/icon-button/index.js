import React from "react";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

const IconButtonAtom = ({
  children,
  color = "default",
  size = "medium",
  onClick,
  ...rest
}) => {
  return (
    <IconButton color={color} size={size} onClick={onClick} {...rest}>
      {children}
    </IconButton>
  );
};

IconButtonAtom.propTypes = {
  children: PropTypes.node.isRequired, // İçine ikonu yerleştireceğimiz alan
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

export default IconButtonAtom;
