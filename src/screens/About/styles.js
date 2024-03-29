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
    animation: ${slideSection} 1.5s ease;
    padding: 2rem 1rem;
    margin: 0 2rem;

    @media (max-width: 420px) {
        margin: 0;
        padding: 1rem;
    }
`

export const Title = styled.h1`
    font-size: 3rem;

`

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 420px) {
        padding: 0 2rem;
    }
`

export const Timeline = styled.section`
    width: 100%;
    max-width: 450px;
    padding: 20px 10px;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 3rem;
    &:before {
        content: '';
        position: absolute;
        top: 0px;
        left:calc(28% + 16px);
        bottom: 0px;
        width: 4px;
        background: #ddd;
    }
    &:after {
        content: "";
        display: table;
        clear: both;
    }
    
    @media (max-width: 420px){
        width: 100vw;
        margin-left: -2.5rem;
        
        &:before {
            left: 16px;
        }
    }
`

export const Entry = styled.article`
    clear: both;
    text-align: left;
    position: relative;
    span {
        margin-bottom: .5em;
        float: left;
        width: 30%;
        padding-right: 30px;
        position: relative;
        &:before {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            border: 3px solid green;
            background-color: ${({ theme }) => theme.body};
            border-radius: 100%;
            top: 15%;
            right: -12px;
            z-index: 8;
        }
        h3 {
            margin: 0;
            font-size: 120%;
        }
        h4 {
            margin: 0;
            font-size: 80%;
        }
        p {
            margin: 0;
            font-size: 80%;
        }
    }

    @media (max-width: 420px) {
        display: flex;
        flex-direction: column;

        span {
            width: 100%;
            margin-left: 1.5rem;
            &:before {
                content: '';
                position: absolute;
                width: 16px;
                height: 16px;
                border: 3px solid salmon;
                background-color: ${({ theme }) => theme.body};
                border-radius: 100%;
                top: 5%;
                left: -25px;
                z-index: 8;
            }
        }
    }
`

export const Description = styled.p`
    margin: 0 0 3em;
    float: right;
    width: 70%;
    padding-left: 30px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text};
    background: none;
    border: 1px solid ${({ theme }) => theme.text};
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