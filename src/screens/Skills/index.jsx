import React, { useState } from "react";

import * as S from "./styles";
import CSS from "../../assets/images/css.png"
import HTML from "../../assets/images/html.png"
import javaScript from "../../assets/images/javascript.png"
import REACT from "../../assets/images/react.png"
import styled from "../../assets/images/styled-components.png"
import git from "../../assets/images/git.png"
import gitHub from "../../assets/images/github.jpg"
import typeScript from "../../assets/images/typescript.png"
import nextjs from "../../assets/images/nextjs.png"
import scrum from "../../assets/images/scrum.png"
import kanban from "../../assets/images/kanban.png"

const Skills = () => {
  const [showDescription, setShowDescription] = useState();

  const titles = {
    html: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.",
    css: "Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.",
    js: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    typeScript:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    styled:
      "Styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. Com ele, você pode criar websites bonitos e funcionais. Além disso, ganhar mais agilidade e precisão no desenvolvimento web.",
    react:
      "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.",
    nextjs: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.",
    git: "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
    gitHub:
      "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",
    scrum: "Traduzido do inglês-Scrum é um framework para gerenciamento de projetos com ênfase inicial no desenvolvimento de software, embora tenha sido usado em outros campos, incluindo pesquisa, vendas, marketing e tecnologias avançadas.",
    kanban: "Em administração da produção, Kanban é um quadro de sinalização que controla os fluxos de produção ou transportes em uma indústria. O cartão pode ser trocado por outro sistema de sinalização, como luzes, caixas vazias e até locais vazios demarcados."
  };

  return (
    <S.Container>
      <S.Tittle>SKILLS</S.Tittle>
        <S.SkillDescription>
          <S.Image
            src={CSS}
            onClick={() => setShowDescription(titles.css)}
            title="CSS"
          />
          <S.Image
            src={HTML}
            onClick={() => setShowDescription(titles.html)}
            title="HTML"
          />
          <S.Image
            src={javaScript}
            onClick={() => setShowDescription(titles.js)}
            title="JavaScript"
          />
          <S.Image
            src={typeScript}
            onClick={() => setShowDescription(titles.typeScript)}
            title="TypeScript"
          />
          <S.Image
            src={styled}
            onClick={() => setShowDescription(titles.styled)}
            title="Styled-Components"
          />
          <S.Image
            src={REACT}
            onClick={() => setShowDescription(titles.react)}
            title="React JS"
          />
          <S.Image
            src={nextjs}
            onClick={() => setShowDescription(titles.nextjs)}
            title="Next JS"
          />
          <S.Image
            src={git}
            onClick={() => setShowDescription(titles.git)}
            title="GIT"
          />
          <S.Image
            src={gitHub}
            onClick={() => setShowDescription(titles.gitHub)}
            title="GITHUB"
          />
          <S.Image
            src={scrum}
            onClick={() => setShowDescription(titles.scrum)}
            title="SCRUM"
          />
          <S.Image
            src={kanban}
            onClick={() => setShowDescription(titles.kanban)}
            title="KANBAN"
          />
        </S.SkillDescription>
        {
            showDescription ?
            <S.Show>
              <h2>
                <button onClick={() => setShowDescription()}>X</button>
                {showDescription}
              </h2>
            </S.Show>
            : ''
        }
    </S.Container>
  );
};

export default Skills;
