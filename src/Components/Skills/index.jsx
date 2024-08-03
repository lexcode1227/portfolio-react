import React, {useEffect} from 'react';
import { styled } from 'styled-components';
import { fontSizeMdText, fontSizeSmTitle, fontSizeLgText, fontSizeSmText, secondaryColor, textColorRemark } from '../../constants';
import HtmlIcon from '../../assets/Icon-html.svg';
import CssIcon from '../../assets/Icon-css.svg';
import JavascriptIcon from '../../assets/Icon-Javascript.svg';
import ReactIcon from '../../assets/Icon-react.svg';
import MaterialUIIcon from '../../assets/Icon-material-ui.svg'; 
import StyledIcon from '../../assets/Icon-styled.svg';
import TailwindIcon from '../../assets/Icon-tailwind.svg';
import GitIcon from '../../assets/Icon-git.svg' ;
import FigmaIcon from '../../assets/Icon-figma.svg';
import ReduxIcon from '../../assets/Icon-redux.svg';
import NextIcon from '../../assets/Icon-next.svg';
import NodeIcon from '../../assets/Icon-nodejs.svg';
import ExpressIcon from '../../assets/Icon-express.svg';
import JWTIcon from '../../assets/Icon-jwt.svg';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { v4 as uuid } from 'uuid';

const Container = styled(Element).attrs(() => ({
    as: 'section',
  }))`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 25px;
`
const SkillsTitle = styled.h2`
    font-size: ${fontSizeLgText};
    font-weight: 500;
    color: ${textColorRemark};

    @media (min-width: 768px){
    font-size: ${fontSizeSmTitle};
  }
`
const SkillsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 350px;
    height: 1080px; 
    column-gap: 20px;

    @media (min-width: 768px){
    font-size: ${fontSizeSmTitle};
    width: 680px;
    height: 800px;
  }
    @media (min-width: 1024px){
    font-size: ${fontSizeSmTitle};
    width: 100%;
    max-width: 1065px;
    height: 550px;
    column-gap: 20px;
    justify-content: space-between;
    padding: 0 20px;
  }
    @media (min-width: 1075px) {
      justify-content: flex-start;
      padding: 0;
    }
`
const SkillCard = styled.div`
    width: 146px;
    height: 92px;
    position: relative;
    background: #B880FF;
    box-shadow: 0px 3.62664px 5.43995px rgba(0, 0, 0, 0.15);
    border-radius: 21.7598px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px){
    width: 160px;
    height: 100px;
    font-size: 20px;
  }
`
const SkillImg = styled.img`
    position: absolute;
    top: -35px;
    left: 40px;
    width: 68px;
    height: auto;
    color: white;

    @media (min-width: 768px){
    left: 46px;
  }
`
const SkillTitle = styled.h2`
    font-size: ${fontSizeSmText};
    font-weight: 600;
    color: ${secondaryColor};
    margin-top: 15px;
    text-align: center;

    @media (min-width: 768px){
    font-size: ${fontSizeMdText};
  }
`

const Skills = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    const data = [
        // {
        //     id: uuid(),
        //     title: "Html",
        //     img: HtmlIcon,
        // },
        // {
        //     id: uuid(),
        //     title: "Css",
        //     img: CssIcon,
        // },
        {
            id: uuid(),
            title: "Javascript",
            img: JavascriptIcon,
        },
        {
            id: uuid(),
            title: "React",
            img: ReactIcon,
        },
        {
          id: uuid(),
          title: "Redux Toolkit",
          img: ReduxIcon,
        },
        {
          id: uuid(),
          title: "Next Js",
          img: NextIcon,
        },
        {
          id: uuid(),
          title: "Material UI",
          img: MaterialUIIcon,
        },
        {
          id: uuid(),
          title: "Styled-Components",
          img: StyledIcon,
        },
        {
          id: uuid(),
          title: "TailwindCss",
          img: TailwindIcon,
        },
        {
          id: uuid(),
          title: "Figma",
          img: FigmaIcon,
        },
        {
          id: uuid(),
          title: "Git",
          img: GitIcon,
        },
        {
          id: uuid(),
          title: "Node js",
          img: NodeIcon,
        },
        {
          id: uuid(),
          title: "Express js",
          img: ExpressIcon,
        },
        {
          id: uuid(),
          title: "JWT",
          img: JWTIcon,
        },
    ]
  return (
    <Container name="Habilidades">
        <SkillsTitle data-aos="fade-up">Habilidades</SkillsTitle>
        <SkillsContainer>
            { data.map((dat)=> 
                <SkillCard key={dat.id} data-aos="fade-up" data-aos-duration="500">
                    <SkillImg src={dat.img} alt={dat.title} />
                    <SkillTitle>{ dat.title }</SkillTitle>
                </SkillCard>)
            }
        </SkillsContainer>
    </Container>
  )
}

export default Skills