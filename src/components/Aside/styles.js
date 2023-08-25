import styled from "styled-components";

export const Aside = styled.aside`
    width: 20%;
    min-width: 15rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid;
    padding-top: 1rem;
    position: fixed;
    transition: all 0.5s ease;
    left: ${props => props.left};
    top: 0;
    z-index: 9;
`

export const Img = styled.img`
    max-width: 12rem;
    filter: drop-shadow(1px 1px 2px green)
        drop-shadow(-1px -1px 2px green)
`

export const Nav = styled.nav`
    background: #63D471;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
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
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.text};
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
        color: ${({ theme }) => theme.text};
        font-size: 1.2rem;
        transition: all 0.3s ease;

        &: hover {
            color: green;
            transform: scale(1.3);
        }
    }
`
