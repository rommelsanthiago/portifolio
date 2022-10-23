import styled from "styled-components";

export const Container = styled.article`
    width: 22rem;
    height: 18rem;
    border: 1rem solid white;
    border-radius: 1rem;
    padding: 0.5rem 0.5rem 0;
    margin: 1rem 3rem;
    filter: drop-shadow(5px 5px 10px rgb(110 110 110));

    h2 {
        margin: 0;
        text-align: center;
    }

    footer {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 3rem;

        a {
            color: black;
            transition: all 0.3s ease;

            &:hover {
                transform: scale(1.3);
            }
        }
    }

    @media (max-width: 420px) {
        margin: 1rem 1rem;
    }
`

export const TumbnailContainer = styled.div`
    width: calc(1235px * 0.25);
    height: calc(685px * 0.25);
    display: inline-block;
    overflow: hidden;
    position: relative;
`

export const Tumbnail = styled.div`
    position: relative;
    -ms-zoom: 0.25;
    -moz-transform: scale(0.25);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.25);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.25);
    -webkit-transform-origin: 0 0;

    ::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    iframe {
        width: 1235px;
        height: 685px;
    }
`