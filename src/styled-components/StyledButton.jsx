import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "./style";
import { icons } from "./icons";
// import StyledIcon from "./StyledIcon/StyledIcon";

const StyledButton = ({
  // see App.js for prop descriptions
  children,
  onClick,
  variant,
  color,
  text,
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

  const Icon =
    // adds padding depending on the position of the icon specified.
    // Note: 20px used display more padding more clearly.
    iconName &&
    styled(icons[curIcon])`
      // https://styled-components.com/docs/basics#styling-any-component
      padding-top: ${iconPosition === "bottom" ? "20px" : 0};
      padding-right: ${iconPosition === "left" ? "20px" : 0};
      padding-bottom: ${iconPosition === "top" ? "20px" : 0};
      padding-left: ${iconPosition === "right" ? "20px" : 0};

      // Standardizes size of icon and overrides above padding when iconPosition is "center"
      ${iconPosition === "center" &&
      css`
        height: 1.5rem; // https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
        width: 1.5rem;
        padding: 0.5rem;
      `}
    `;

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
      {(iconPosition === "top" || iconPosition === "left") && <Icon />}
      {text && text}
      {iconPosition === "center" && <Icon />}
      {children}
      {(iconPosition === "bottom" || iconPosition === "right") && <Icon />}
    </Button>
  );
};

export default StyledButton;
