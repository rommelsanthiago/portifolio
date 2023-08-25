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

const Aside = ({show, screen, handleToggle, isOpen, setOpen}) => {
  const navigate = useNavigate()

  return (
    <S.Aside left={show || screen > 920 ? 0 : '-15rem'}>
      <S.Img src={Avatar} alt="Rommel Santhiago" />
      <nav>
        <S.Ul>
          <li>
            <S.Button 
                onClick={() => goToHome(navigate, handleToggle(), setOpen(!isOpen))}
            >
              <House weight="fill" />
              Home
            </S.Button>
          </li>
          <li>
            <S.Button 
              onClick={() => goToAbout(navigate, handleToggle(), setOpen(!isOpen))}
            >
              <User weight="fill" />
              Sobre
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => goToSkills(navigate, handleToggle(), setOpen(!isOpen))}>
              <Code weight="fill" />
              Skills
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => goToProjects(navigate, handleToggle(), setOpen(!isOpen))}>
              <Briefcase weight="fill" />
              Projetos
            </S.Button>
          </li>
          <li>
            <S.Button onClick={() => goToContact(navigate, handleToggle(), setOpen(!isOpen))}>
              <Chats weight="fill" />
              Contato
            </S.Button>
          </li>
        </S.Ul>
      </nav>
      <S.Social>
        <a
         href="https://www.linkedin.com/in/rommelsanthiago" 
         target="_blank" 
         rel="noopener noreferrer"
         title="LinkedIn"
        >
          <LinkedinLogo weight="fill" />
        </a>
        <a
         href="https://github.com/rommelsanthiago" 
         target="_blank" 
         rel="noopener noreferrer"
         title="Github"
        >
          <GithubLogo weight="fill" />
        </a>
        <a
         href="https://twitter.com/RommelSanthiago" 
         target="_blank" 
         rel="noopener noreferrer"
         title="Twitter"
        >
          <TwitterLogo weight="fill" />
        </a>
        <a
         href="https://www.youtube.com/channel/UC3IpAXprcUJRaCn7G7Hh9YQ" 
         target="_blank" 
         rel="noopener noreferrer"
         title="Youtube"
        >
          <YoutubeLogo weight="fill" />
        </a>
        <a
         href="https://www.instagram.com/rommelsanthiago/" 
         target="_blank" 
         rel="noopener noreferrer"
         title="Instagram"
        >
          <InstagramLogo weight="fill" />
        </a>
        <a
         href="https://pt.stackoverflow.com/users/271415/rommel-santhiago" 
         target="_blank" 
         rel="noopener noreferrer"
         title="Stack Overflow"
        >
          <StackOverflowLogo weight="fill" />
        </a>
        <a
         href="https://discord.com/users/724842559779766312" 
         target="_blank" 
         rel="noopener noreferrer"
         title="Discord"
        >
          <DiscordLogo weight="fill" />
        </a>
      </S.Social>
    </S.Aside>
  );
};

export default Aside;
