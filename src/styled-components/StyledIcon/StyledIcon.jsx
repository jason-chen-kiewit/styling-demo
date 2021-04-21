import React from "react";
import styled, { css } from "styled-components";
import { icons } from "../icons";

class StyledIcon extends React.Component {
  constructor(props) {
    super(props);
    this.iconPosition = this.props.iconPosition;
    this.IconComponent = icons[this.props.iconName];
  }

  render() {
    const padding = "20px";
    const Icon = styled(this.IconComponent)`
      padding-right: ${this.iconPosition === "left" ? padding : 0};
      padding-left: ${this.iconPosition === "right" ? padding : 0};
      ${(this.iconPosition === "center" ||
        this.iconPosition === "top" ||
        this.iconPosition === "bottom") &&
      css`
        padding: 0.5rem;
        height: 1.5rem;
        width: 1.5rem;
      `}
    `;
    return <Icon />;
  }
}

export default StyledIcon;
