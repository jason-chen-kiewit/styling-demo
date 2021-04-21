import { IconWrapper } from "./style";
import styled, { css } from "styled-components";
import { icons } from "../icons";

const StyledIcon = ({ iconName, iconPosition }) => {
  //   const Icon = icons[iconName];
  const padding = "20px";
  const Icon = styled(icons[iconName])`
    padding-right: ${iconPosition === "left" ? padding : 0};
    padding-left: ${iconPosition === "right" ? padding : 0};
    ${(iconPosition === "center" ||
      iconPosition === "top" ||
      iconPosition === "bottom") &&
    css`
      padding: 0.5rem;
      height: 1.5rem;
      width: 1.5rem;
    `}
  `;
  //   console.log(Icon);
  return (
    // <IconWrapper iconPosition={iconPosition}>
    <Icon />
    // </IconWrapper>
  );
};

export default StyledIcon;
