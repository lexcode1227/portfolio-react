import React, {useEffect} from 'react'
import { styled } from 'styled-components'
import { fontSizeSmTitle, fontSizeLgText, textColorRemark } from '../../constants'
import { v4 as uuid } from 'uuid';
import openFashionImg from "../../assets/openfashion.png"
import primeImg from "../../assets/prime-services-web.png"
import AvoShop from "../../assets/Avocate Shop _ platzi.png"
import DocDocImg from "../../assets/DocDoc-Home.png"
// import AGAImg from "../../assets/Advice-Generator-App.png"
import EncriptaImg from "../../assets/Encriptador-de-Texto.png"
import GUSImg from "../../assets/Github-User-Finder.png"
// import MyOrgImg from "../../assets/MyOrg.png"
// import TipImg from "../../assets/Tip-calculator-app-home.png"
// import AluraFlixImg from "../../assets/AluraFlix.png"
import HtmlIcon from '../../assets/Icon-html.svg';
import CssIcon from '../../assets/Icon-css.svg';
import JavascriptIcon from '../../assets/Icon-Javascript.svg';
import ReactIcon from '../../assets/Icon-react.svg';
import MaterialUIIcon from '../../assets/Icon-material-ui.svg'; 
import StyledIcon from '../../assets/Icon-styled.svg'; 
import GitIcon from '../../assets/Icon-git.svg' ;
import FigmaIcon from '../../assets/Icon-figma.svg';
import ReduxIcon from '../../assets/Icon-redux.svg';
import NextIcon from '../../assets/Icon-next.svg';
import NodeIcon from '../../assets/Icon-nodejs.svg';
import ExpressIcon from '../../assets/Icon-express.svg';
import MongoIcon from '../../assets/Icon-mongoDB.svg';
import TailwindIcon from '../../assets/Icon-tailwind.svg';
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
            description: "OpenFashion es una tienda de moda online que ofrece una amplia variedad de ropa y accesorios. Este proyecto fullstack se construyó usando tecnologías modernas para ofrecer una experiencia de usuario rápida y atractiva.",
            url: openFashionImg,
            stack: [
                {name: "React",  icon: ReactIcon}, 
                {name: "Node",  icon: NodeIcon}, 
                {name: "Express Js",  icon: ExpressIcon}, 
                {name: "MongoDb",  icon: MongoIcon}, 
                {name: "TailwindCss",  icon: TailwindIcon}
            ],
            repository: "https://github.com/lexcode1227/catalogoWeb",
            demo: "https://openfashion-digital.vercel.app/"
        },
        {
            id: uuid(),
            title: "Prime Services",
            subtitle: "Customer project",
            description: "Prime Services es un sitio web empresarial que ofrece servicios outsoursing de interpretación. Este proyecto se construyó usando tecnologías como react, tailwindCss y un backend con la libreria Resend para manejar el envio de correos.",
            url: primeImg,
            stack: [
                {name: "React",  icon: ReactIcon}, 
                {name: "Node",  icon: NodeIcon}, 
                {name: "Express Js",  icon: ExpressIcon},
                {name: "TailwindCss",  icon: TailwindIcon}
            ],
            repository: "https://github.com/lexcode1227/prime-services",
            demo: "https://prime-services.vercel.app/"
        },
        {
            id: uuid(),
            title: "Doc Doc Clinic",
            subtitle: "Challenge",
            description: "Es un sitio web de una clínica médica ficticia desarrollada con Next.js. En este proyecto se transformó un diseño de Figma en un sitio web responsivo y desplegado.",
            url: DocDocImg,
            stack: [
                {name: "React",  icon: ReactIcon}, 
                {name: "Next Js",  icon: NextIcon}, 
                {name: "TailwindCss",  icon: TailwindIcon}, 

            ],
            repository: "https://github.com/lexcode1227/docdoc-clinic",
            demo: "https://docdoc-clinic.vercel.app/"
        },
        {
            id: uuid(),
            title: "Avocate Store",
            subtitle: "Platzi Challenge",
            description: "Es un proyecto de comercio electrónico de aguacates en línea donde los usuarios pueden explorar y simular comprar una variedad de aguacates. Los usuarios pueden navegar por diferentes productos, ver detalles y agregarlos al carrito.",
            url: AvoShop,
            stack: [
                {name: "React",  icon: ReactIcon}, 
                {name: "Redux Toolkit",  icon: ReduxIcon}, 
                {name: "Next Js",  icon: NextIcon},
                {name: "TailwindCss",  icon: TailwindIcon}
            ],
            repository: "https://github.com/lexcode1227/next-aguacates",
            demo: "https://next-aguacates.vercel.app/"
        },
        {
            id: uuid(),
            title: "Github users finder",
            subtitle: "Platzi Challenge",
            description: "Este es un proyecto desarrollado como un reto de platzi para aprender los fundamentos de React hooks asi como practicar como consumir una API",
            img: "https://i.imgur.com/OZoFgIk.png",
            url: GUSImg,
            stack: [
                {name: "Html",  icon: HtmlIcon}, 
                {name: "Css",  icon: CssIcon}, 
                {name: "Javascript",  icon: JavascriptIcon}
            ],
            repository: "https://github.com/lexcode1227/github-user-search",
            demo: "https://fanciful-gecko-057503.netlify.app/"
        },
        // {
        //     id: uuid(),
        //     title: "Tip Calculator App",
        //     subtitle: "Frontend Mentor Challenge",
        //     description: "",
        //     img: "https://i.imgur.com/JOFcRl8.png",
        //     url: TipImg,
        //     repository: "https://github.com/lexcode1227/Tip-calculator-app",
        //     demo: "https://lexcode1227.github.io/Tip-calculator-app/"
        // },
        // {
        //     id: uuid(),
        //     title: "Advice Generator App",
        //     subtitle: "Frontend Mentor Challenge",
        //     description: "",
        //     img: "https://i.imgur.com/h0lbm5r.png",
        //     url: AGAImg,
        //     repository: "https://github.com/lexcode1227/advice-generator-app",
        //     demo: "https://lexcode1227.github.io/advice-generator-app/"
        // },
        {
            id: uuid(),
            title: "Encriptador de texto",
            subtitle: "Challenge ONE Alura | Oracle",
            description: "Este es mi proyecto como parte del Alura Challenge, que consiste en una herramienta que codifica y decodifica texto. Este reto me ha ayudado a mejorar mis habilidades al crear proyectos para mi portafolio.",
            img: "https://i.imgur.com/222pzGm.png",
            url: EncriptaImg,
            stack: [
                {name: "Html",  icon: HtmlIcon}, 
                {name: "Css",  icon: CssIcon}, 
                {name: "Javascript",  icon: JavascriptIcon}
            ],
            repository: "https://github.com/lexcode1227/decodificador-de-texto",
            demo: "https://lexcode1227.github.io/decodificador-de-texto/"
        },
        // {
        //     id: uuid(),
        //     title: "AluraFlix Challenges",
        //     subtitle: "Challenge ONE Alura | Oracle",
        //     description: "",
        //     img: "https://i.imgur.com/CfISCcG.png",
        //     url: AluraFlixImg,
        //     repository: "https://github.com/lexcode1227/AluraFlix-Challenge",
        //     demo: "https://alura-flix-challenge.vercel.app/"
        // },
        // {
        //     id: uuid(),
        //     title: "MyOrg Challenge",
        //     subtitle: "Alura Challenge",
        //     description: "",
        //     img: "https://i.imgur.com/a4ZxaJ6.png",
        //     url: MyOrgImg,
        //     repository: "https://github.com/lexcode1227/React-Org",
        //     demo: "https://react-org-psi.vercel.app/"
        // },
    ]
  return (
    <ProjectContainer name="Proyectos" id='projects'>
        <ProjectTitle data-aos="fade-up">Proyectos</ProjectTitle>
        <Carrusel data={data}/>
    </ProjectContainer>
  )
}

export default Projects