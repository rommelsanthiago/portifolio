import React from "react";

import * as S from "./styles"

const Aside = ({ setPage }) => {
  return (
    <S.Aside>
      <nav>
        <ul>
          <li>
            <button onClick={() => setPage("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setPage("about")}>Sobre</button>
          </li>
          <li>
            <button onClick={() => setPage("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => setPage("projects")}>Projetos</button>
          </li>
          <li>
            <button onClick={() => setPage("contact")}>Contato</button>
          </li>
        </ul>
      </nav>
    </S.Aside>
  );
};

export default Aside;
