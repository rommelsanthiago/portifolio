import React from "react";
import { 
  House, 
  User, 
  Code, 
  Briefcase, 
  Chats,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  YoutubeLogo,
  InstagramLogo,
  StackOverflowLogo,
  DiscordLogo
} from "phosphor-react"

import * as S from "./styles"
import Avatar from "../../assets/images/perfil.png";

const Aside = ({ setPage }) => {
  return (
    <S.Aside>
      <S.Img src={Avatar} alt="Rommel Santhiago" />
      <nav>
        <S.Ul>
          <li>
            <S.Button 
              onClick={() => setPage("home")}
            >
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
      <S.Social>
        <a href="https://www.linkedin.com/in/rommelsanthiago" target="_blank" >
          <LinkedinLogo weight="fill" />
        </a>
        <a href="https://github.com/rommelsanthiago" target="_blank" >
          <GithubLogo weight="fill" />
        </a>
        <a href="https://twitter.com/RommelSanthiago" target="_blank" >
          <TwitterLogo weight="fill" />
        </a>
        <a href="https://www.youtube.com/channel/UC3IpAXprcUJRaCn7G7Hh9YQ" target="_blank" >
          <YoutubeLogo weight="fill" />
        </a>
        <a href="https://www.instagram.com/rommelsanthiago/" target="_blank" >
          <InstagramLogo weight="fill" />
        </a>
        <a href="https://pt.stackoverflow.com/users/271415/rommel-santhiago" target="_blank" >
          <StackOverflowLogo weight="fill" />
        </a>
        <a href="https://discord.com/users/724842559779766312" target="_blank" >
          <DiscordLogo weight="fill" />
        </a>
      </S.Social>
    </S.Aside>
  );
};

export default Aside;
