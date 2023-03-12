import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
const GlobalStyle = createGlobalStyle`
    ${normalize}

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.6rem; 
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.25;
        background-color: white;
    }

    ul, ol {
        margin: 0;
        padding: 0;

        > li {
            list-style: none;
        }
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, p {
        margin: 0;
    }

    img {
        display: block;
        height: auto;
        width: 100%;
        max-width: 100%;
    }

`;

export default GlobalStyle;
