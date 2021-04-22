import styled, { css } from 'styled-components';
import colors from '../colors';

export const Button = styled.button(({
    isActive, variant, color, round, size, startIcon, endIcon, iconOnly, disabled 
}) => { // https://styled-components.com/docs/basics#styling-any-component
    const mainColor = colors[color];
    const { neutral } = colors;
    const shadeIndex = color === "neutral" ? 11 : 5;

    const contained = () => {
        let containedStyle = {
            text: neutral[1],
            bg: mainColor[shadeIndex],
            hoverText: neutral[1],
            hoverBg: mainColor[shadeIndex + 2],
            border: "none"
        };

        if (isActive) {
            containedStyle.bg = mainColor[shadeIndex + 2];
        }

        if (disabled) {
            containedStyle.text = neutral[7];
            containedStyle.bg = neutral[4];
            containedStyle.hoverText = neutral[7];
            containedStyle.hoverBg = neutral[4];
        }

        return containedStyle;
    }

    // Consider using a function using the same ternary statement repeatedly
    const outlined = () => {
        let outlinedStyle = {
            text: neutral[12],
            bg: neutral[5],
            hoverText: neutral[12],
            hoverBg: neutral[7],
            border: `1px solid ${neutral[6]}`
        }
        
        if (isActive) {
            outlinedStyle.text = mainColor[shadeIndex];
            outlinedStyle.bg = mainColor[1];
            outlinedStyle.hoverText = mainColor[shadeIndex];
            outlinedStyle.hoverBg = mainColor[shadeIndex - 2];
            outlinedStyle.border = `1px solid ${mainColor[shadeIndex]}`;
        }

        if (disabled) {
            outlinedStyle.text = neutral[7];
            outlinedStyle.bg = neutral[4];
            outlinedStyle.hoverText = neutral[7];
            outlinedStyle.hoverBg = neutral[4];
        }

        return outlinedStyle;
    }


    const minimal = () => {
        let minimalStyle = {
            text: mainColor[shadeIndex],
            bg: neutral[1],
            hoverText: mainColor[shadeIndex],
            hoverBg: mainColor[shadeIndex - 3],
        };

        if (isActive) {
            minimalStyle.bg = mainColor[shadeIndex - 3];
        }

        if (disabled) {
            minimalStyle.text = neutral[7];
            minimalStyle.hoverText = neutral[7];
            minimalStyle.hoverBg = neutral[1];
        }

        return minimalStyle;
    }

    const variantStyleGenerators = { contained, outlined, minimal };

    const sizes = {
        small: {
            height: "2rem",
            fontSize: "0.875rem"
        },
        medium: {
            height: "2.25rem",
            fontSize: "1rem"
        },
        large: {
            height: "2.5rem",
            fontSize: "1.25rem"
        },
    };

    const { height, fontSize } = sizes[size];
    const { text, bg, border, hoverText, hoverBg } = variantStyleGenerators[variant]();

    // Wrapping a css property in a ternary should be avoided
    // harder to read and typically not DRY
    // AVOID: ${boolProp && "border-radius: 5px"}
    return css` // https://styled-components.com/docs/api#css
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${round || iconOnly ? 0 : "0.25rem 1rem"};

        flex: none;
        order: 2;
        flex-grow: 0;
        margin: 0 0.5rem;

        border-radius: ${round ? "50%" : "0.25rem"};

        color: ${text};
        background: ${bg};
        border: ${border};

        height: ${height}; 
        width: ${iconOnly ? height : "auto"};
        font-size: ${fontSize};

        &:hover {
            cursor: ${disabled ? "not-allowed" : "pointer"};
            color: ${hoverText}; 
            background: ${hoverBg};
        }

        // targets specifically react-icons
        svg {
            margin-right: ${startIcon ? "0.5rem" : 0};
            margin-left: ${endIcon ? "0.5rem" : 0};
        }
        
    `
});



// ======================================
// OLD VERSIONS

// VERSION 1: STRING TRANSPLANTS
// const inactiveStyleTypes = {
//     primary: `
//         color: ${neutral[1]};
//         background: ${primaryBlue[5]};

//         &:hover {
//             background: ${primaryBlue[7]};
//         }
//     `,
//     secondary: `
//         color: ${neutral[12]};
//         background: ${neutral[5]};
//         border: 1px solid ${neutral[6]};

//         &:hover {
//             background: ${neutral[7]};
//         }
//     `,
// };

// const activeStyleTypes = {
//     primary: `
//         color: ${neutral[1]};
//         background: ${primaryBlue[7]};
//     `,
//     secondary: `
//         color: ${primaryBlue[5]};
//         background: ${primaryBlue[1]};
//         border: 1px solid ${primaryBlue[5]};

//         &:hover {
//             background: ${primaryBlue[3]};
//         }
//     `
// }

// =====================================

// VERSION 2: TAGGED TEMPLATE LITERALS
// const primaryStyle = css`
//     color: ${neutral[1]};
//     background: ${({isActive}) => isActive ? primaryBlue[7] : primaryBlue[5]};

//     &:hover {
//         background: ${primaryBlue[7]};
//     }
// `;

// const secondaryStyle = css`
//     color: ${({isActive}) => isActive ? primaryBlue[5] : neutral[12]};
//     background: ${({isActive}) => isActive ? primaryBlue[1] : neutral[5]};
//     border: 1px solid ${({isActive}) => isActive ? primaryBlue[5] : neutral[6]};

//     &:hover {
//         background: ${({isActive}) => isActive ? primaryBlue[3] : neutral[7]};
//     }
// `;

// VERSION 1 & 2
// export const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0.25rem 1rem;

//   flex: none;
//   order: 2;
//   flex-grow: 0;
//   margin: 0 0.5rem;
//   border-radius: 5px;

//   font-size: 1rem;

//   &:hover {
//     cursor: pointer;
//   }


//   ${({primary}) => primary ? primaryStyle : secondaryStyle}
// `;

// export default Button;
// ${({isActive, styleType}) => isActive ? activeStyleTypes[styleType] : inactiveStyleTypes[styleType]}
// VERSION 2 
// primaryStyle & secondaryStyle both reference the isActive prop, but neither
// is connected to <SCStyledButton /> directly.
// The css`` TTL function below acts as the connector between the component's props
// and primaryStyle & secondaryStyle.
// ${({primary}) => primary ? primaryStyle : secondaryStyle}

// =============================
// VERSION 3: 
// const defaultTheme = {
    //     text: neutral[1],
    //     bg: isActive ? primaryBlue[7] : primaryBlue[5],
    //     hoverText: neutral[1],
    //     hoverBg: primaryBlue[7],
    //     border: "none"
    // };

    // const inverted = {
    //     text: isActive ? mainColor[5] : neutral[12],
    //     bg: isActive ? mainColor[1] : neutral[5],
    //     hoverText: isActive ? mainColor[5] : neutral[12],
    //     hoverBg: isActive ? mainColor[3] : neutral[7],
    //     border: `1px solid ${isActive ? mainColor[5] : neutral[6]}`
    // };
    
    // const minimal = {
    //     text: isActive ? mainColor[13] : mainColor[11],
    //     bg: mainColor[1],
    //     hoverText: mainColor[13],
    //     hoverBg: mainColor[1],
    //     border: "none"
    // };

    // const otherThemes = { 
    //     solidRed: {
    //         bg: isActive ? red[7] : red[5],
    //         hoverBg: red[7],
    //     },
    //     invertedBlue: {
    //         text: isActive ? primaryBlue[5] : neutral[12],
    //         bg: isActive ? primaryBlue[1] : neutral[5],
    //         border: `1px solid ${isActive ? primaryBlue[5] : neutral[6]}`,
    //         hoverText: isActive ? primaryBlue[5] : neutral[12],
    //         hoverBg: isActive ? primaryBlue[3] : neutral[7]
    //     },
    //     invertedRed: {
    //         text: isActive ? red[5] : neutral[12],
    //         bg: isActive ? red[1] : neutral[5],
    //         border: `1px solid ${isActive ? red[5] : neutral[6]}`,
    //         hoverText: isActive ? red[5] : neutral[12],
    //         hoverBg: isActive ? red[3] : neutral[7]
    //     },
    //     skeletonNeutral: {
    //         text: isActive ? neutral[13] : neutral[11],
    //         bg: neutral[1],
    //         hoverText: neutral[13],
    //         hoverBg: neutral[1]
    //     },
    //     skeletonRed: {
    //         text: isActive ? red[7] : red[5],
    //         bg: neutral[1],
    //         hoverText: red[7],
    //         hoverBg: neutral[1]
    //     }
    // }
    // const { text, bg, border, hoverText, hoverBg } = Object.assign({}, defaultTheme, theme && otherThemes[theme]);
    