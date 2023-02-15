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
        <div>

          <p>
          Desenvolvedor Web, adoro trabalhar com desenvolvimento de sistemas web, sites, landing pages, apps, api's, gosto muito de trabalhar com Node JS e Express no Back-end e sou apaixonado por React com NextJS e uma boa estilizada nas paginas com styled-components, mas tenho muita facilidade em aprender e já fiz alguns projetinhos com SASS, Tailwind CSS e adquiri um pouco de conhecimento com .Net e C# desenvolvendo algumas api's e sisteminhas pessoais. 
          </p>
          <p>
          Tenho como objetivo desenvolver projetos com qualidade, utilizando as melhores técnicas e padrões de desenvolvimento.
          </p>
          <p>
          E para isso estou sempre me atualizando sobre novas features e buscando aprender novas tecnologias de desenvolvimento web.
          </p>
        </div>
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
