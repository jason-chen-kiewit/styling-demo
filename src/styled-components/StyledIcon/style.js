import styled, { css } from "styled-components";

export const IconWrapper = styled.div(({iconPosition}) => {
    const padding = "20px";
    return css`
        padding-top: ${iconPosition === "bottom" ? padding : 0};
        padding-right: ${iconPosition === "left" ? padding : 0};
        padding-bottom: ${iconPosition === "top" ? padding : 0};
        padding-left: ${iconPosition === "right" ? padding : 0};
        ${iconPosition === "center" && "padding: 0.5rem;"};
        svg {
            height: 1.5rem; // https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
            width: 1.5rem; 
        }
    `
});