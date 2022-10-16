import React from "react";
import { useNavigate } from "react-router-dom"

import * as S from "./styles";
import { goToContact } from "../../Routes/coordinator";
import { Chats, Terminal } from "phosphor-react"

const Home = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <h3>
        CITAÇÃO
        <S.Quote>Falar é fácil. Mostre-me o código.</S.Quote> - Linus Torvalds
      </h3>
      <h1>Olá me chamo Rommel Santhiago</h1>
      <S.Section>
        <p>
          Full Stack Web Developer, adoro trabalhar com desenvolvimento de
          sistemas web, sites, landing pages, apps e gosto muito de trabalhar com Node JS no Back-end. Meu objetivo é desenvolver
          projetos com qualidade, utilizando as melhores técnicas e padrões de
          desenvolvimento. E para isso estou sempre me atualizando sobre novas features e bucando aprender novas tecnologias de desenvolvimento web.
        </p>
        <Terminal size={192} weight="fill" style={{marginTop: "-1.5rem"}} />
      </S.Section>
      <S.Contact>
        Tem alguma duvida?   
        <S.Button onClick={() => goToContact(navigate)}>
          <Chats weight="fill" />
          Contate-me
        </S.Button>
      </S.Contact>
    </S.Container>
  );
};

export default Home;
