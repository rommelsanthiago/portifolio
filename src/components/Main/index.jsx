import React, { useState } from "react";
import { Divide as Hamburger } from 'hamburger-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import * as S from "./styles";
import Aside from "../Aside";
import Routers from '../../Routes/routes';

export default function Main() {
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
            <S.Contact href="https://wa.me/5588988750959" target="_blank" >
                <WhatsAppIcon />
            </S.Contact>
            <S.Section width={screen > 920 ? '80%' : '100%'} >
                <Routers />
            </S.Section>
        </S.Main>
    );
};
