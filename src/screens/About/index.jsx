import React from "react";
import { FilePdf } from "phosphor-react";

import * as S from "./styles";
import CV from "../../assets/RommelSanthiago.pdf";

const About = () => {
  const onGetCv = () => {
    fetch(CV).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "RommelSanthiago.pdf";
        alink.click();
      });
    });
  };

  return (
    <S.Container>
      <h1>Sobre</h1>
      <h2>Sou Rommel Santhiago Desenvolvedor Web Full Stack</h2>
      <p>
        Sou apaixonado por programação, com foco em desenvolvimento Web. Estou
        sempre aprimorando meus conhecimentos para desenvolver softwares de
        qualidade que façam sentido e diferença na vida das pessoas.
      </p>
      <S.Section>
        <section>
          <h2>Formação</h2>
          <S.Timeline>
            <S.Entry>
              <span>
                <h3>Logica de programação</h3>
                <h4>Alura - 70h</h4>
                <p>Dezembro de 2019</p>
                <p>Março de 2020</p>
              </span>
              <S.Description>
                Desenvolvi capacidades de lógica de programação independente da
                linguagem a ser escolhida
              </S.Description>
            </S.Entry>
            <S.Entry>
              <span>
                <h3>Front-end</h3>
                <h4>Alura - 100h</h4>
                <p>Fevereiro de 2020</p>
                <p>Março de 2020</p>
              </span>
              <S.Description>
                Curso de desenvolvimento web com as pricipais tecnologias do
                front-end, HTML, Javascript e CSS
              </S.Description>
            </S.Entry>
            <S.Entry>
              <span>
                <h3>Java</h3>
                <h4>Alura - 120h</h4>
                <p>Março de 2020</p>
                <p>Maio de 2020</p>
              </span>
              <S.Description>
                Curso de JAVA, onde apredi os principios do desenvolvimento na
                linguagem com boas práticas e testes
              </S.Description>
            </S.Entry>
          </S.Timeline>
        </section>
        <section>
          <h2>Bootcamp</h2>
          <S.Timeline>
            <S.Entry>
              <span>
                <h3>Dev Web FullStack</h3>
                <h4>Labenu - +1000h</h4>
                <p>Outubro de 2021</p>
                <p>Novembro de 2022</p>
              </span>
              <S.Description>
                Programa com mais de 1000 horas de experiência prática em
                desenvolvimento Full-stack, guiadas por metodologias ágeis
                (Kanban/Scrum). Entre as habilidades aprendidas durante o curso
                estão HTML, CSS, JavaScript, React, Styled-Components, React
                Hooks, REST, Api Restful, HTTP, Jest, Node.JS, Knex, TypeScript,
                MySQL, AWS, SQL, Git, Github, Firebase, Testes unitários e UI Design.
              </S.Description>
            </S.Entry>
            <S.Entry>
              <span>
                <h3>Impulso Javascript Evolution</h3>
                <h4>DIO - 104h</h4>
                <p>Junho de 2022</p>
                <p>Agosto de 2022</p>
              </span>
              <S.Description>
                Programa de desenvolvimento web e back-end utilizando a linguagem Javascript como sua stack principal, além de adiquirir conhecimentos em bancos de dados SQL e noSQL.
              </S.Description>
            </S.Entry>
            <S.Entry>
              <span>
                <h3>Ciência de Dados</h3>
                <h4>DIO - 126h</h4>
                <p>Setembro de 2022</p>
                <p>Novembro de 2022</p>
              </span>
              <S.Description>
                Programa de desenvolvimento de experiências em Python, banco de dados relacional e não relacional, além de uma imersão Cloud Computer e Machine Learning
              </S.Description>
            </S.Entry>
          </S.Timeline>
        </section>
      </S.Section>
      <S.Button onClick={onGetCv}>
        <FilePdf size={32} weight="fill" />
        Meu CV
      </S.Button>
    </S.Container>
  );
};

export default About;
