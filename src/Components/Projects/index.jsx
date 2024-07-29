import React, {useEffect} from 'react'
import { styled } from 'styled-components'
import { fontSizeSmTitle, fontSizeLgText, textColorRemark } from '../../constants'
import { v4 as uuid } from 'uuid';
import openFashionImg from "../../assets/openfashion.png"
import primeImg from "../../assets/prime-services-web.png"
import AvoShop from "../../assets/Avocate Shop _ platzi.png"
import DocDocImg from "../../assets/DocDoc-Home.png"
import AGAImg from "../../assets/Advice-Generator-App.png"
import EncriptaImg from "../../assets/Encriptador-de-Texto.png"
import GUSImg from "../../assets/Github-User-Finder.png"
import MyOrgImg from "../../assets/MyOrg.png"
import TipImg from "../../assets/Tip-calculator-app-home.png"
import AluraFlixImg from "../../assets/AluraFlix.png"
import Carrusel from '../Carrusel';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectContainer = styled(Element).attrs(() => ({
    as: 'section',
  }))`
    height: auto;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 25px 20px 35px 20px;
    align-items: center;
`
const ProjectTitle = styled.h2`
    font-size: ${fontSizeLgText};
    font-weight: 500;
    color: ${textColorRemark};

    @media (min-width: 768px){
    font-size: ${fontSizeSmTitle};
  }
`
const Projects = () => {
    useEffect(() => {
            AOS.init();
          }, []);
    const data = [
        {
            id: uuid(),
            title: "Open Fashion Ecommerce",
            subtitle: "Customer project",
            description: "",
            url: openFashionImg,
            repository: "https://github.com/lexcode1227/catalogoWeb",
            demo: "https://openfashion-web.vercel.app/"
        },
        {
            id: uuid(),
            title: "Prime Services",
            subtitle: "Customer project",
            description: "",
            url: primeImg,
            repository: "https://github.com/lexcode1227/prime-services",
            demo: "https://prime-services.vercel.app/"
        },
        {
            id: uuid(),
            title: "Doc Doc Clinic",
            subtitle: "Challenge",
            description: "",
            url: DocDocImg,
            repository: "https://github.com/lexcode1227/docdoc-clinic",
            demo: "https://docdoc-clinic.vercel.app/"
        },
        {
            id: uuid(),
            title: "Avocate Store",
            subtitle: "Platzi Challenge",
            description: "",
            url: AvoShop,
            repository: "https://github.com/lexcode1227/next-aguacates",
            demo: "https://next-aguacates.vercel.app/"
        },
        {
            id: uuid(),
            title: "Github users finder",
            subtitle: "Platzi Challenge",
            description: "",
            img: "https://i.imgur.com/OZoFgIk.png",
            url: GUSImg,
            repository: "https://github.com/lexcode1227/github-user-search",
            demo: "https://fanciful-gecko-057503.netlify.app/"
        },
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
    <ProjectContainer name="Proyectos" id='projects'>
        <ProjectTitle data-aos="fade-up">Proyectos</ProjectTitle>
        <Carrusel data={data}/>
    </ProjectContainer>
  )
}

export default Projects