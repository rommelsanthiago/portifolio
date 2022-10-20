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
    background: whitesmoke;
    transition: all 0.3s ease;
    animation: ${slideSection} 2s ease;
    padding: 2rem 1rem;
    margin: 0 2rem;

    h1 {
        font-size: 3rem;
    }

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            color: black;
            transition: all 0.3s ease;

            &:hover {
                transform: scale(1.3);
            }
        }
    }
`

export const Content = styled.section`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 1200px) {
        justify-content: center;
    }
`
