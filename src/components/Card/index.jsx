import React from "react";
import { GithubLogo, GlobeHemisphereWest } from "phosphor-react"

import * as S from "./styles";

const Card = (props) => {
  return (
    <S.Container>
      <h2>{props.title}</h2>
      <S.TumbnailContainer>
        <S.Tumbnail>
          <iframe src={props.iframeUrl}></iframe>
        </S.Tumbnail>
      </S.TumbnailContainer>
      <footer>
        <a
          href={props.gitHubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo size={32} weight="fill" />
        </a>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlobeHemisphereWest size={32} weight="fill" />
        </a>
      </footer>
    </S.Container>
  );
};

export default Card;
