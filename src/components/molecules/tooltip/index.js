import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Tooltip as MuiTooltip, Stack } from "@mui/material";

// Custom Tooltip bileşeni
const CustomTooltip = forwardRef(function CustomTooltip(props, ref) {
  const { title, children, placement = "top", ...rest } = props;

  // Eğer children bir React bileşeni ise, ref uyumluluğu için sarmalıyoruz
  const wrappedChildren =
    React.isValidElement(children) && typeof children.type !== "string" ? (
      <span style={{display: 'flex'}}>{children}</span>
    ) : (
      children
    );

  return (
    <MuiTooltip
      title={title}
      placement={placement}
      {...rest}
      ref={ref} // Tooltip'e ref geçiyoruz
    >
      {wrappedChildren}
    </MuiTooltip>
  );
});

// PropTypes ile prop tiplerini belirtiyoruz
CustomTooltip.propTypes = {
  title: PropTypes.string.isRequired, // Tooltip içeriği
  children: PropTypes.node.isRequired, // Tooltip'in içine yerleştirilecek element
  placement: PropTypes.oneOf([
    "top",
    "left",
    "bottom",
    "right",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-start",
    "left-end",
    "right-start",
    "right-end",
  ]), // Tooltip'in yerleşimi
};

// Default props
CustomTooltip.defaultProps = {
  placement: "top",
};

export default CustomTooltip;
