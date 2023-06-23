import React from 'react'
import { styled } from 'styled-components'
import { fontSizeLgText, textColorRemark } from '../../constants'
import { v4 as uuid } from 'uuid';
import AGAImg from "../../assets/Advice-Generator-App.png"
import EncriptaImg from "../../assets/Encriptador-de-Texto.png"
import GUSImg from "../../assets/GithubUserSearch.png"
import MyOrgImg from "../../assets/MyOrg.png"
import TipImg from "../../assets/Tip-calculator-app-home.png"
import AluraFlixImg from "../../assets/AluraFlix.png"
import Carrusel from '../Carrusel';
import { Element } from 'react-scroll';

const ProjectContainer = styled(Element).attrs(() => ({
    as: 'section',
  }))`
    height: auto;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 75px 20px 35px 20px;
    align-items: center;
`
const ProjectTitle = styled.h2`
    font-size: ${fontSizeLgText};
    font-weight: 500;
    color: ${textColorRemark};
`
const Projects = () => {
    const data = [
        {
            id: uuid(),
            title: "Tip Calculator App",
            subtitle: "Frontend Mentor Challenge",
            description: "",
            img: "https://i.imgur.com/JOFcRl8.png",
            url: TipImg,
            repository: "https://github.com/lexcode1227/Tip-calculator-app",
            demo: "https://lexcode1227.github.io/Tip-calculator-app/"
        },
        {
            id: uuid(),
            title: "Advice Generator App",
            subtitle: "Frontend Mentor Challenge",
            description: "",
            img: "https://i.imgur.com/h0lbm5r.png",
            url: AGAImg,
            repository: "https://github.com/lexcode1227/advice-generator-app",
            demo: "https://lexcode1227.github.io/advice-generator-app/"
        },
        {
            id: uuid(),
            title: "Encriptador de texto",
            subtitle: "Challenge ONE Alura | Oracle",
            description: "",
            img: "https://i.imgur.com/222pzGm.png",
            url: EncriptaImg,
            repository: "https://github.com/lexcode1227/decodificador-de-texto",
            demo: "https://lexcode1227.github.io/decodificador-de-texto/"
        },
        {
            id: uuid(),
            title: "Github users search",
            subtitle: "Platzi Challenge",
            description: "",
            img: "https://i.imgur.com/OZoFgIk.png",
            url: GUSImg,
            repository: "https://github.com/lexcode1227/Tip-calculator-app",
            demo: "https://lexcode1227.github.io/Tip-calculator-app/"
        },
        {
            id: uuid(),
            title: "AluraFlix Challenges",
            subtitle: "Challenge ONE Alura | Oracle",
            description: "",
            img: "https://i.imgur.com/CfISCcG.png",
            url: AluraFlixImg,
            repository: "https://github.com/lexcode1227/AluraFlix-Challenge",
            demo: "https://alura-flix-challenge.vercel.app/"
        },
        {
            id: uuid(),
            title: "MyOrg Challenge",
            subtitle: "Alura Challenge",
            description: "",
            img: "https://i.imgur.com/a4ZxaJ6.png",
            url: MyOrgImg,
            repository: "https://github.com/lexcode1227/React-Org",
            demo: "https://react-org-psi.vercel.app/"
        },
    ]
  return (
    <ProjectContainer name="Proyectos">
        <ProjectTitle>Proyectos</ProjectTitle>
        <Carrusel data={data}/>
    </ProjectContainer>
  )
}

export default Projects