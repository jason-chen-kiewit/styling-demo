import { IconWrapper } from "./style";
import styled, { css } from "styled-components";
import { icons } from "../icons";

const StyledIcon = ({ iconName, iconPosition }) => {
  //   const Icon = icons[iconName];
  const padding = "20px";
  const Icon = styled(icons[iconName])`
    padding-top: ${iconPosition === "bottom" ? padding : 0};
    padding-right: ${iconPosition === "left" ? padding : 0};
    padding-bottom: ${iconPosition === "top" ? padding : 0};
    padding-left: ${iconPosition === "right" ? padding : 0};
    ${iconPosition === "center" &&
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
