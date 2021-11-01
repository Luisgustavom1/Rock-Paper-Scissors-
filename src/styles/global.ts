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
        background-color: ${({ theme }) => theme.background};
    }

    input, button, text-area {
        border: 0;
        font-family: 'Barlow Semi Condensed', sans-serif;
    }
`;