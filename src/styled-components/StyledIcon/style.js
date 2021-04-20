import styled, { css } from "styled-components";

export const IconWrapper = styled.div(({iconPosition}) => {
    const padding = "20px";
    return css`
        
        svg {
            padding-top: ${iconPosition === "bottom" ? padding : 0};
            padding-right: ${iconPosition === "left" ? padding : 0};
            padding-bottom: ${iconPosition === "top" ? padding : 0};
            padding-left: ${iconPosition === "right" ? padding : 0};
            ${iconPosition === "center" && 
                css`
                    padding: 0.5rem;
                    height: 1.5rem;
                    width: 1.5rem; 
                `
            }
        }
    `
});