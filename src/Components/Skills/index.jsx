import React from 'react';
import { styled } from 'styled-components';
import { fontSizeMdText, fontSizeSmTitle, fontSizeLgText, fontSizeSmText, secondaryColor, textColorRemark } from '../../constants';
import HtmlIcon from '../../assets/Icon-react.svg';
import CssIcon from '../../assets/Icon-react.svg';
import JavascriptIcon from '../../assets/Icon-Javascript.svg';
import ReactIcon from '../../assets/Icon-react.svg';
import MaterialUIIcon from '../../assets/Icon-material-ui.svg'; 
import StyledIcon from '../../assets/Icon-react.svg'; 
import GitIcon from '../../assets/Icon-git.svg' ;
import FigmaIcon from '../../assets/Icon-figma.svg';
import { Element } from 'react-scroll';
import Dots from '../../assets/Dots.svg';

const Container = styled(Element).attrs(() => ({
    as: 'section',
  }))`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;
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
    justify-content: space-around;
    flex-wrap: wrap;
    width: 350px;
    height: 530px; 

    @media (min-width: 768px){
    font-size: ${fontSizeSmTitle};
    width: 680px;
    height: 400px;
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
    const data = [
        {
            id: "001",
            title: "Html",
            img: HtmlIcon,
        },
        {
            id: "002",
            title: "Css",
            img: CssIcon,
        },
        {
            id: "003",
            title: "Javascript",
            img: JavascriptIcon,
        },
        {
            id: "004",
            title: "React",
            img: ReactIcon,
        },
        {
            id: "005",
            title: "Material UI",
            img: MaterialUIIcon,
        },
        {
            id: "006",
            title: "Styled-Components",
            img: StyledIcon,
        },
        {
            id: "007",
            title: "Figma",
            img: FigmaIcon,
        },
        {
            id: "008",
            title: "Git",
            img: GitIcon,
        },
    ]
  return (
    <Container name="Habilidades">
        <SkillsTitle>Habilidades</SkillsTitle>
        <SkillsContainer>
            { data.map((dat)=> 
                <SkillCard key={dat.id}>
                    <SkillImg  src={dat.img} alt={dat.title} />
                    <SkillTitle>{ dat.title }</SkillTitle>
                </SkillCard>)
            }
        </SkillsContainer>
    </Container>
  )
}

export default Skills