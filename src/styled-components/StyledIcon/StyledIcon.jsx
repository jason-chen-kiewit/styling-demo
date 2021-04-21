import React from "react";
import styled, { css } from "styled-components";
import { icons } from "../icons";

class StyledIcon extends React.Component {
  constructor(props) {
    super(props);
    this.IconComponent = icons[this.props.icon];
    this.startIcon = this.props.startIcon;
    this.endIcon = this.props.endIcon;
    this.iconOnly = this.props.iconOnly;
    this.column = this.props.column;
  }

  render() {
    const padding = "0.5rem";
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
        padding: ${this.endIcon && "0.25rem"} 0 ${this.startIcon && "0.25rem"} 0;
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
