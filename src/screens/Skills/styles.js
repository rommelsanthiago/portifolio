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
  padding: 0 8rem;
  position: relative;
  
  @media (max-width: 420px) {
    padding: 1rem 0;
  }

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Tittle = styled.h2`
  font-size: 3rem;
  margin-left: -4rem;

  @media (max-width: 420px) {
    margin-left: 2rem;
  }

  @media (max-width: 920px) {
    margin-left: 3rem;
  }
`;

export const SkillDescription = styled.div`
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
  height: 16em;
  width: 16em;
  margin: 1rem;
  filter: drop-shadow(5px 5px 10px #000);
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

export const Show = styled.dialog`
    width: 105vw;
    height: 105vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 3rem 10rem;
    background: rgba(0,0,0,0.8);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;

    @media (max-width: 620px){
        padding: 0;
        right: 14%;
    }

    @media (max-width: 920px) {
      padding: 3rem 0;
    }

    h2 {
        width: 95vw;
        background-color: black;
        padding: 4rem 2rem;
        border-radius: 8px;
        position: relative;

        button {
          background: none;
          border: none;
          color: #fff;
          font-size: 1.5rem;
          border-radius: 5px;
          cursor: pointer;
          position: fixed;
          top: 35%;
          right: 15%;
          transition: all 0.3s ease;
  
          &:hover {
              border: 1px solid #fff;
          }

          @media (max-width: 920px) {
            top: 30%;
            right: 6%;
          }

          @media (max-width: 420px) {
            top: 10%;
            right: 5%;
          }
        }

        @media (max-width: 420px){
          width: 100vw;
          height: 100vh;
          padding: 6rem 2rem;
          margin: 0;
        }
    }
`