import styled from "styled-components";

export const Aside = styled.aside`
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid;
    padding-top: 1rem;
    position: fixed;
    left: 0;
    top: 0;
`

export const Img = styled.img`
    max-width: 12rem;
    filter: drop-shadow(1px 1px 2px green)
        drop-shadow(-1px -1px 2px green)
`

export const Ul = styled.ul`
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
`

export const Button = styled("button")`
    width: 100%;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 1px solid;
    margin-top: 1rem;
    transition: all 0.3s ease;

    &: focus, &: hover {
        border-bottom: 1px solid green;
        color: green;
        transform: scale(1.1);
    }

    svg {
        margin-right: 0.5rem;
    }
`

export const Social = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    padding-top: 3rem;

    svg {
        color: black;
        font-size: 1.2rem;
        transition: all 0.3s ease;

        &: hover {
            color: green;
            transform: scale(1.3);
        }
    }
`
