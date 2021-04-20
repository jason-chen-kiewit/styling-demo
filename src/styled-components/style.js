import styled, { css } from 'styled-components';
import colors from '../styled-components/colors';

export const Button = styled.button(({isActive, variant, color, round, iconPosition }) => { // https://styled-components.com/docs/basics#styling-any-component
    const mainColor = colors[color];
    const { neutral } = colors;
    const active = isActive ? "active" : "inactive";
    
    // const solid = {
    //     active: {
    //         text: neutral[1],
    //         bg: mainColor[7],
    //         hoverText: neutral[1],
    //         hoverBg: mainColor[7],
    //         border: "none"
    //     },
    //     inactive: {
    //         text: neutral[1],
    //         bg: mainColor[5],
    //         hoverText: neutral[1],
    //         hoverBg: mainColor[7],
    //         border: "none"
    //     }
    // };

    const contained = () => {
        let containedStyle = {
            text: neutral[1],
            bg: mainColor[5],
            hoverText: neutral[1],
            hoverBg: mainColor[7],
            border: "none"
        };

        if (isActive) {
            containedStyle.bg = mainColor[7];
        }

        return containedStyle;
    }


    const outlined = () => {
        let outlinedStyle = {
            text: neutral[12],
            bg: neutral[5],
            hoverText: neutral[12],
            hoverBg: neutral[7],
            border: `1px solid ${neutral[6]}`
        }
        
        if (isActive) {
            outlinedStyle.text = mainColor[5];
            outlinedStyle.bg = mainColor[1];
            outlinedStyle.hoverText = mainColor[5];
            outlinedStyle.hoverBg = mainColor[3];
            outlinedStyle.border = `1px solid ${mainColor[5]}`
        }

        return outlinedStyle;
    }


    const minimal = () => {
        const index = color === "neutral" ? 11 : 5;
        let minimalStyle = {
            text: mainColor[index],
            bg: neutral[1],
            hoverText: mainColor[index + 2],
            hoverBg: neutral[1],
            border: "1px"
        };

        if (isActive) {
            minimalStyle.text = mainColor[index + 2];
        }

        return minimalStyle;
    }

    const variants = { contained, outlined, minimal };

    
    const { text, bg, border, hoverText, hoverBg } = variants[variant]();
    return css` // https://styled-components.com/docs/api#css
        display: flex;
        flex-direction: ${iconPosition === "top" || iconPosition === "bottom" ? "column" : "row"};
        justify-content: center;
        align-items: center;
        padding: ${round ? 0 : "0.25rem 1rem"};

        flex: none;
        order: 2;
        flex-grow: 0;
        margin: 0 0.5rem;
        border-radius: ${round ? "50%" : "5px"};

        font-size: 1rem;

        color: ${text};
        background: ${bg};
        border: ${border};

        &:hover {
            cursor: pointer;
            color: ${hoverText}; 
            background: ${hoverBg};
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
    