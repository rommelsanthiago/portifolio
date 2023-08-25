import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: 'whitesmoke',
    text: '#000'
};
export const darkTheme = {
    body: '#111',
    text: 'whitesmoke'
};

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
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background 0.3s ease-in, color 0.3s ease-in;
    }
`;
