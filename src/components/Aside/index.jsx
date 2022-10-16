import React from "react";
import { useNavigate } from "react-router-dom"
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
import { goToAbout, goToContact, goToHome, goToProjects, goToSkills } from "../../Routes/coordinator";

const Aside = () => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      <S.Img src={Avatar} alt="Rommel Santhiago" />
      <nav>
        <S.Ul>
          <li>
            <S.Button 
                onClick={() => goToHome(navigate)}
            >
              <House weight="fill" />
              Home
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => goToAbout(navigate)}>
              <User weight="fill" />
              Sobre
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => goToSkills(navigate)}>
              <Code weight="fill" />
              Skills
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => goToProjects(navigate)}>
              <Briefcase weight="fill" />
              Projetos
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => goToContact(navigate)}>
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
