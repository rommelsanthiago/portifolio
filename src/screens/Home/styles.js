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

export const Container = styled.main`
  padding: 2rem 3rem;
  transition: all 0.3s ease;
  animation: ${slideSection} 1.5s forwards;
  margin: 0 1rem;

  h3{
    max-width: 450px;
  }

  @media (max-width: 420px) {
    padding: 2.5em 0;
  }
`;

export const Quote = styled.q`
  display: flex;
  justify-content: center;
`

export const Contact = styled.h2`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: 1px solid black;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 400;
    transition: all 0.3s ease;
    margin-left: 0.5rem;

    &: focus, &: hover {
        color: green;
        border: 1px solid green;
        transform: scale(1.05);
    }

    svg {
        margin-right: 0.5rem;
    }
`

export const Section = styled.section`
  display: flex;
  align-items: center;

  p {
    width: 75%;
  }

  @media (max-width: 420px) {
    flex-direction: column;

    p {
      width: 100%;
      text-align: justify;
    }
  }
`