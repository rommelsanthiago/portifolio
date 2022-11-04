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
