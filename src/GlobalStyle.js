import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    
    body {
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600,800&display=swap');
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        background: whitesmoke;
    }
`;
