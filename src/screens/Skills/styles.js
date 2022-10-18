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
`;

export const Container = styled.section`
  transition: all 0.3s ease;
  animation: ${slideSection} 1.5s ease;
  padding: 0 10rem;
  
  @media (max-width: 540px) {
    padding: 0 6rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Tittle = styled.h2`
  font-size: 5rem;
  text-align: center;
`;

export const SkillDescription = styled.div`
  height: 30rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    margin-right: 2rem;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  height: 22em;
  width: 22em;
  margin: 1rem;
  transition: all 0.3s ease;

  @media (max-width: 1367px) {
    height: 8.5em;
    width: 8.5em;
  }

  @media (max-width: 768px) {
    height: 8rem;
    width: 8rem;
  }

  &:hover {
    transform: scale(1.3);
  }
`;

export const Show = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 3rem 10rem;
    background: none;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    z-index: 99;

    @media (max-width: 620px){
        left: 47%;
    }

    h2 {
        height: 20rem;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 4rem 2rem;
    }

    button {
        background: none;
        border: none;
        color: #fff;
        font-size: 1.5rem;
        border-radius: 5px;
        cursor: pointer;
        position: fixed;
        top: 25%;
        right: 14%;
        transition: all 0.3s ease;

        &:hover {
            border: 1px solid #fff;
        }
    }
`