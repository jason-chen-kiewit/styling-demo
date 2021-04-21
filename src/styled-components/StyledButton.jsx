import React, { useState } from "react";
import { Button } from "./style";
import StyledIcon from "./StyledIcon/StyledIcon";

const StyledButton = ({
  // see App.js for prop descriptions
  children,
  onClick,
  variant,
  color,
  text,
  startIcon,
  endIcon,
  iconName,
  iconPosition,
  activatable,
  round,
  submit,
}) => {
  // isActive is only tracked if activatabale is true, otherwise it stays false
  const [isActive, setIsActive] = useState(false);

  // curIcon tracks the current icon StyledButton needs to display. StyledButton
  // takes this string value to dynamically render the icon so long as that icon
  // is exported from icons.js
  // https://stackoverflow.com/questions/53572640/dynamically-load-react-icons-into-component
  const [curIcon, setCurIcon] = useState(iconName);

  const handleClick = (e) => {
    // Bundles the custom click effect with generic click effect
    onClick && onClick(e);
    activatable && toggleIsActive();
  };

  const toggleIsActive = () => {
    let newIcon;
    setIsActive(!isActive);

    // Switches Icon from FILL to OUTLINE, works specifically for AntD Icons
    if (variant === "minimal" && iconName) {
      if (curIcon.includes("Fill")) {
        newIcon = iconName.replace("Fill", "Outline");
      }
      if (curIcon.includes("Outline")) {
        newIcon = iconName.replace("Outline", "Fill");
      }

      setCurIcon(newIcon);
    }
  };

  return (
    <Button
      type={submit ? "submit" : "button"}
      isActive={isActive}
      onClick={handleClick}
      variant={variant}
      color={color}
      round={round}
      iconPosition={iconPosition}
    >
      {(iconPosition === "top" || iconPosition === "left") && (
        <StyledIcon iconName={curIcon} iconPosition={iconPosition} />
      )}
      {text && text}
      {iconPosition === "center" && (
        <StyledIcon iconName={curIcon} iconPosition={iconPosition} />
      )}
      {children}
      {(iconPosition === "bottom" || iconPosition === "right") && (
        <StyledIcon iconName={curIcon} iconPosition={iconPosition} />
      )}
    </Button>
  );
};

export default StyledButton;
