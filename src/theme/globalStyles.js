import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,body{
        width: 100%;
        height: 100%;
        color: #000000;
        font-family: 'Work Sans', sans-serif;
        font-size: 100%;
    }

    * {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;