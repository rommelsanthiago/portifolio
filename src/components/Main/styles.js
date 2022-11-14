import styled from "styled-components";

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

    @media (max-width: 420px) {
        width: 100%;
        background: #b1b1b1ba;
        position: fixed;
    }
`

export const Contact = styled.a`
    width: 4em;
    position: fixed;
    right: 1.5em;
    bottom: 1.5em;
    z-index: 99;

    svg {
        width: 100%;
        height: auto;
        color: #25D366;
        transition: all 0.3s ease;
        background: white;
        border-radius: 50%;
        border: 3px solid #25D366;
        padding: 0.1em;

        &: hover {
            transform: scale(1.1);
        }
    }
`