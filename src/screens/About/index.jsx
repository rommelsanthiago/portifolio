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
      <S.Title>Sobre</S.Title>
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
                <h3>Desenvolvimento Java com Cloud AWS</h3>
                <h4>DIO - 65h</h4>
                <p>Agosto de 2023</p>
                <p>Setembro de 2023</p>
              </span>
              <S.Description>
                <b>Coding The Future - GFT e AWS | Desenvolvimento Java com Cloud AWS</b><br/>
                Bootcamp da DIO em parceria com a GFT e a AWS, duas gigantes do mercado tecnológico, onde pude aprimorar meu conhecimento em Java com ênfase em computação em nuvem AWS e Inteligência Artificial.
                Estudei conteúdos que abrangem desde os princípios de desenvolvimento de software, orientação a objetos, bancos de dados, Spring Boot e AWS, até mentorias técnicas altamente especializadas, focadas e aprofundadas em Inteligência Artificial, como programação assistida por IA com o Amazon CodeWhisperer.
              </S.Description>
            </S.Entry>
            <S.Entry>
              <span>
                <h3>Segurança da Informação</h3>
                <h4>Alura - 461h</h4>
                <p>Fevereiro de 2023</p>
                <p>Julho de 2023</p>
              </span>
              <S.Description>
                <b>Trilha Desenvolve - GBTech</b><br/>
                Programa de treinamento intensivo destinado a capacitar profissionais na área de Segurança da Informação. Ele abrange diversos aspectos relacionados à proteção de dados e sistemas, visando garantir a confidencialidade, integridade e disponibilidade das informações.
                O curso é estruturado em módulos que abrangem desde conceitos iniciais, como lógica de programação e arquitetura de computadores, até tópicos mais avançados, como segurança de rede, práticas de pentest (teste de penetração) e conformidade com a Lei Geral de Proteção de Dados (LGPD).

              </S.Description>
            </S.Entry>
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
                <h3>Pottencial .NET Developer</h3>
                <h4>DIO - 96h</h4>
                <p>Novembro de 2022</p>
                <p>Janeiro de 2023</p>
              </span>
              <S.Description>
                O Pottencial .NET Developer é o bootcamp para profissionais que buscam aperfeiçoar suas habilidades em desenvolvimento back-end com .NET e C#, e querem ganhar mais confiança no desenvolvimento de projetos. Uma trilha completa em .NET, Banco de Dados SQL e projetos práticos que te preparam para atuar em grandes cases de mercado. Ao final do programa, você ainda ficará disponível para o processo seletivo da Pottencial, maior insurtech do Brasil, com vagas full remotas.
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
