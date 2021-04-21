import React, { useState } from "react";
import { Button } from "./style";
import { icons } from "../icons";

const StyledButton = ({
  children,
  onClick,
  variant = "contained",
  size = "medium",
  color,
  text,
  startIcon,
  endIcon,
  iconOnly,
  column,
  activatable,
  round,
  submit,
}) => {
  // isActive is only tracked if activatabale is true, otherwise it stays false
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    // Bundles the custom click effect with generic click effect
    onClick && onClick(e);
    activatable && setIsActive(!isActive);
  };

  const Icon = icons[startIcon || endIcon || iconOnly];

  return (
    <Button
      type={submit ? "submit" : "button"}
      isActive={isActive}
      onClick={handleClick}
      variant={variant}
      color={color}
      round={round}
      size={size}
      column={column}
      text={text}
      startIcon={startIcon}
      endIcon={endIcon}
      iconOnly={iconOnly}
    >
      {startIcon && <Icon />}
      {text && text}
      {iconOnly && <Icon />}
      {iconOnly && text && "y u do dis? ლ(ಠ益ಠლ)"}
      {children}
      {endIcon && <Icon />}
    </Button>
  );
};

export default StyledButton;
