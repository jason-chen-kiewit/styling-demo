import { icons } from "./icons";

export const Icon =
    // adds padding depending on the position of the icon specified.
    // Note: 20px used display more padding more clearly.
    styled(icons[icon])(({iconPosition}) => {

        // https://styled-components.com/docs/basics#styling-any-component
    

    // Standardizes size of icon and overrides above padding when iconPosition is "center"
    return css`
        height: 1.5rem; // https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
        width: 1.5rem;
        padding-top: ${iconPosition === "bottom" ? "20px" : 0};
        padding-right: ${iconPosition === "left" ? "20px" : 0};
        padding-bottom: ${iconPosition === "top" ? "20px" : 0};
        padding-left: ${iconPosition === "right" ? "20px" : 0};
        ${iconPosition === "center" && "padding: 0.5rem"};
    `}
);