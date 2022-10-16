import styled, { keyframes } from "styled-components";

const slideSection = keyframes`
    0% {
        transform: translateY(-100%);
    }
    75% {
        transform: translate(0);
    }
    75% {
        transform: translateY(5%);
    }
    100% {
        transform: translate(0);
    }
`

export const Container = styled.div`
    background: lightcoral;
    transition: all 0.3s ease;
    animation: ${slideSection} 2.5s ease;
    padding: 2rem 1rem;
    margin: 0 2rem;
`