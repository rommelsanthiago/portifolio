import React, { useState } from "react";

import * as S from "./styles";
import Aside from "../Aside";
import Home from "../../screens/Home";
import About from "../../screens/About";
import Skills from "../../screens/Skills";
import Contact from "../../screens/Contact";
import Projects from "../../screens/Projects";

export default function Main() {
    const [page, setPage] = useState("home");

    const pageToggle = () => {
        switch(page){
            case "home":
                return <Home />
            case "about":
                return <About />
            case "skills":
                return <Skills />
            case "projects":
                return <Projects />
            case "contact":
                return <Contact />
            default:
                return <Home />
        };
    };

    return(
        <S.Main>
            <Aside setPage={setPage} />
            <S.Section>
                {pageToggle()}
            </S.Section>
        </S.Main>
    );
};
