import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        background:  no-repeat center / 100% radial-gradient(#1f3756, #141539);
        overflow-x: hidden;
    }

    input, button, text-area {
        border: 0;
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    ul, li, ol, a {
        text-decoration: none;
    }
`;