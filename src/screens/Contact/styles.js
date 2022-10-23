import style, { keyframes } from "styled-components";
import { styled } from '@mui/material/styles';
import { FormContainer } from "react-hook-form-mui";
import LoadingButton from '@mui/lab/LoadingButton';

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

const animateModal = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1
    }
`

export const Container = style.div`
    transition: all 0.3s ease;
    animation: ${slideSection} 2s ease;
    padding: 2rem 1rem;
    margin: 0 2rem;

    h1 {
        font-size: 3rem;
    }
    
    @media (max-width: 420px) {
        margin: 0;
    }
`

export const Content = style.section`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 420px) {
        width: 90%;
    }
`

export const SendButton = styled(LoadingButton)(() => ({
    color: '#008000',
    backgroundColor: 'transparent',
    border: '1px solid',
    '&:hover': {
      backgroundColor: '#008000',
      color: '#FFF',
      border: 'transparent'
    },
}));

export const Modal = style.dialog`
    width: 60%;
    border-radius: 8px;
    border: 1px solid #888;
    animation: ${animateModal} 2s ease;
  
    ::backdrop {
      background: rgba(0, 0, 0, 0.7);
    }

    h2, p {
        text-align: center;
    }

    button {
        float: right;
    }
`