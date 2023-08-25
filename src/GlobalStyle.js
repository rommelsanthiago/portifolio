import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: 'whitesmoke',
    text: '#000'
};
export const darkTheme = {
    body: '#111',
    text: 'whitesmoke'
};

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.3s ease-in, color 0.3s ease-in;
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
    }
`;

export default GlobalStyle;