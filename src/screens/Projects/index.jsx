import React from "react";
import { GithubLogo } from "phosphor-react"

import * as S from "./styles";
import Card from "../../components/Card"
import listOfProjects from "../../data/projects.json"

const Projects = () => {
  return (
    <S.Container>
      <h1>Projetos</h1>
      <h2>Aqui encontra-se alguns projetos de front-end</h2>
      <S.Content>
        {listOfProjects.map(project => {
          if(project.id) {
            return <Card 
              key={project.id}
              title={project.title}
              iframeUrl={project.iframeUrl}
              gitHubUrl={project.gitHubUrl}
              url={project.url}
            />
          }
        })}
      </S.Content>
      <h3>
        Projetos de back-end disponiveis no meu github: 
        <a href="https://github.com/rommelsanthiago">
          <GithubLogo size={26} weight="fill" />
        </a>
      </h3>
    </S.Container>
  );
};

export default Projects;
