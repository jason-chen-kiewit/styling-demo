import React from "react";
import styled, { css } from "styled-components";
import { icons } from "../icons";

class StyledIcon extends React.Component {
  constructor(props) {
    super(props);
    this.iconPosition = this.props.iconPosition;
    this.IconComponent = icons[this.props.icon];
    this.startIcon = this.props.startIcon;
    this.endIcon = this.props.endIcon;
    this.iconOnly = this.props.iconOnly;
    this.column = this.props.column;
  }

  render() {
    const padding = "20px";
    const Icon = styled(this.IconComponent)`
      padding-right: ${this.startIcon ? padding : 0};
      padding-left: ${this.endIcon ? padding : 0};
      ${this.iconOnly &&
      css`
        padding: 0.5rem;
        height: 1.5rem;
        width: 1.5rem;
      `}
      ${this.column &&
      css`
        padding: 0rem;
        ${this.startIcon && "padding-bottom: 0.25rem;"}
        ${this.endIcon && "padding-top: 0.25rem;"}
        height: 1.5rem;
        width: 1.5rem;
      `}
    `;
    return <Icon />;
  }
}

export default StyledIcon;

// ${(this.iconPosition === "center" ||
// this.iconPosition === "top" ||
// this.iconPosition === "bottom") &&
// css`
// padding: 0.5rem;
// height: 1.5rem;
// width: 1.5rem;
// `}
