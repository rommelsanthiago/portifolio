import React, { useState } from "react";
import { Divide as Hamburger } from 'hamburger-react';
import { Sun, Moon } from 'phosphor-react';

import * as S from "./styles";
import Aside from "../Aside";
import Routers from '../../Routes/routes';

export default function Main({toggleTheme, isDarkTheme}) {
    const [show, setShow] = useState(false);
    const [screen, setScreen] = useState();
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setShow(!show)
    }

    new ResizeObserver(entries => {
        for (let entry of entries) {
            const cr = entry.contentRect;
            setScreen(cr.width)
        }
    }).observe(document.body)

    return(
        <S.Main>
            {
                screen < 920 ?
                <S.Button onClick={handleToggle}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </S.Button>
                : null
            }
            <Aside 
                show={show} 
                screen={screen} 
                handleToggle={handleToggle}
                isOpen={isOpen} 
                setOpen={setOpen} 
            />
            <S.Contact
                href="https://wa.me/5588988750959"
                target="_blank"
                rel="noopener noreferrer"
            >
            </S.Contact>
            <S.ButtonTheme onClick={toggleTheme} title={isDarkTheme ? "Modo claro" : "Modo escuro"}>
                {
                    isDarkTheme ?
                    <Sun weight="fill" /> :
                    <Moon weight="fill"/>
                }
            </S.ButtonTheme>
            <S.Section width={screen > 920 ? '80%' : '100%'} >
                <Routers />
            </S.Section>
        </S.Main>
    );
};
