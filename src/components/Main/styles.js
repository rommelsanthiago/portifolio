import styled from "styled-components";

import WhatsApp from "../../assets/images/WhatsLogo.png";

export const Main = styled.main`
    display: flex;
    position: relative;
`

export const Section = styled.section`
    width: ${props => props.width};
    position: absolute;
    right: 0;
    overflow-y: auto;
    overflow-x: hidden;
`

export const Button = styled.button`
    background: none;
    border: none;
    z-index: 99;

    &:first-child {
        color: ${({ theme }) => theme.text};
    }
    @media (max-width: 420px) {
        width: 100%;
        background: #b1b1b1ba;
        position: fixed;
    }
`

export const ButtonTheme = styled.button`
    color: ${({ theme }) => theme.text};
    font-size: 1.5em;
    background: none;
    border: none;
    cursor: pointer;
    position: fixed;
    right: 1em;
    top: 0.5em;
    z-index: 99;

    svg{
        transition: all 0.3s ease;
    
        &: hover {
           transform: scale(1.5);
        }
    }
`

export const Contact = styled.a`
    width: 4em;
    height: 4em;
    position: fixed;
    right: 1.5em;
    bottom: 1.5em;
    background: transparent url(${WhatsApp}) center no-repeat;
    filter: drop-shadow(1px 1px 0px #000) drop-shadow(0px 0px 2px #000);
    transition: all 0.3s ease;
    z-index: 99;

    &: hover {
       transform: scale(1.1);
    }
`