import styled, { keyframes } from "styled-components";

// const slideSection = keyframes`
//     0% {
//         transform: translateY(-100%);
//     }
//     75% {
//         transform: translate(0);
//     }
//     75% {
//         transform: translateY(5%);
//     }
//     100% {
//         transform: translate(0);
//     }
// `
const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const Container = styled.div`
  background: lightblue;
  padding: 2rem 1rem;
  margin: 0 2rem;

  if(visibility){
      animation: ${slideInRight} 0.8s forwards;
  }
`;
