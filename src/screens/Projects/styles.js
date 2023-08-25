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
    transition: all 0.3s ease;
    animation: ${slideSection} 2s ease;
    padding: 2rem 1rem;
    margin: 4rem;

    h1 {
        font-size: 3rem;
    }

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            margin-left: .5em;

            svg {
                color: ${({ theme }) => theme.text};
                transition: all 0.3s ease;
                &: hover {
                    color: green;
                    transform: scale(1.3);
                }
            }
        }
    }
    
    @media (max-width: 420px) {
        padding: 1rem;
        margin: 0;

        h3 {
            flex-direction: column;
            text-align: center;
            font-size: 1.5em;
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
