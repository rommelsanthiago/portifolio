import styled from "styled-components";

export const Aside = styled.aside`
    width: 25%;
    height: 100vh;
    border-right: 1px solid;
    position: fixed;
    left: 0;
    top: 0;
`

export const Ul = styled.ul`
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style-type: none;
`

export const Button = styled.button`
    width: 70%;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    border-bottom: 1px solid;
    margin-top: 1rem;
    padding: 0 0 0.5rem 1.2rem;

    &: hover {
        border-bottom: 1px solid green;
        color: green;
    }

    svg {
        margin-right: 0.5rem;
    }
`