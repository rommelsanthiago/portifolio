import React from "react";
import { House, User, Code, Briefcase, Chats } from "phosphor-react"

import * as S from "./styles"

const Aside = ({ setPage }) => {
  return (
    <S.Aside>
      <nav>
        <S.Ul>
          <li>
            <S.Button onClick={() => setPage("home")}>
              <House weight="fill" />
              Home
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => setPage("about")}>
              <User weight="fill" />
              Sobre
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => setPage("skills")}>
              <Code weight="fill" />
              Skills
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => setPage("projects")}>
              <Briefcase weight="fill" />
              Projetos
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => setPage("contact")}>
              <Chats weight="fill" />
              Contato
            </S.Button>
          </li>
        </S.Ul>
      </nav>
    </S.Aside>
  );
};

export default Aside;
