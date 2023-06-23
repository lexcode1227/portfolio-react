import React from 'react';
import { styled } from 'styled-components';
import { fontSizeLgText, fontSizeSmText, secondaryColor, textColorRemark } from '../../constants';
import JavascriptIcon from '../../assets/Icon-Javascript.svg';
import ReactIcon from '../../assets/Icon-react.svg';
import MaterialUIIcon from '../../assets/Icon-material-ui.svg';  
import GitIcon from '../../assets/Icon-git.svg' ;
import FigmaIcon from '../../assets/Icon-figma.svg';
import { Element } from 'react-scroll';

const Container = styled(Element).attrs(() => ({
    as: 'section',
  }))`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;
    padding-top: 75px;
`
const SkillsTitle = styled.h2`
    font-size: ${fontSizeLgText};
    font-weight: 500;
    color: ${textColorRemark};
`
const SkillsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 350px;
    height: 365px; 
`
const SkillCard = styled.div`
    width: 146px;
    height: 82px;
    position: relative;
    background: #B880FF;
    box-shadow: 0px 3.62664px 5.43995px rgba(0, 0, 0, 0.15);
    border-radius: 21.7598px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SkillImg = styled.img`
    position: absolute;
    top: -35px;
    left: 40px;
    width: 68px;
    height: auto;
`
const SkillTitle = styled.h2`
    font-size: ${fontSizeSmText};
    font-weight: 600;
    color: ${secondaryColor};
    margin-top: 15px;
`

const Skills = () => {
    const data = [
        {
            id: "001",
            title: "Javascript",
            img: JavascriptIcon,
        },
        {
            id: "002",
            title: "React",
            img: ReactIcon,
        },
        {
            id: "003",
            title: "Material UI",
            img: MaterialUIIcon,
        },
        {
            id: "004",
            title: "Git",
            img: GitIcon,
        },
        {
            id: "005",
            title: "Figma",
            img: FigmaIcon,
        },
    ]
  return (
    <Container name="Habilidades">
        <SkillsTitle>Habilidades</SkillsTitle>
        <SkillsContainer>
            { data.map((dat)=> 
                <SkillCard key={dat.id} props={dat}>
                    <SkillImg  src={dat.img} alt={dat.title} />
                    <SkillTitle>{ dat.title }</SkillTitle>
                </SkillCard>)
            }
        </SkillsContainer>
    </Container>
  )
}

export default Skills