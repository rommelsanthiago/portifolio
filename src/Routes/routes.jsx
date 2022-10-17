import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../screens/Home';
import About from '../screens/About';
import Skills from '../screens/Skills';
import Projects from '../screens/Projects';
import Contact from '../screens/Contact';
import CV from '../assets/RommelSanthiago.pdf'

const Routers = () => (
    <TransitionGroup component={null} >
        <CSSTransition
            timeout={600}
            classNames="page"
            key={location.key}
        >
            <Routes>
                <Route index element={ <Home /> } ></Route>
                <Route path='sobre' element={ <About /> } />
                <Route path='skills' element={ <Skills /> } />
                <Route path='projetos' element={ <Projects /> } />
                <Route path='contato' element={ <Contact /> } />
                <Route path='curriculo' element={CV} />
            </Routes>
        </CSSTransition>
    </TransitionGroup>
);

export default Routers;
