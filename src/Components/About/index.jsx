import React from 'react';
import { styled } from 'styled-components';
import { textColorRemark, fontSizeLgText, fontSizeXsText, fontSizeSmTitle, primaryColor, textColor, secondaryColor } from '../../constants';
import MapImg from '../../assets/country.png';
import { Element } from 'react-scroll';

const AboutContainer = styled(Element).attrs(() => ({
    as: 'section',
  }))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 600px;
    background-color: ${primaryColor};
    padding: 75px 0;
`
const AboutTitle = styled.h2`
    font-size: ${fontSizeLgText};
    font-weight: 500;
    color: ${secondaryColor};
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    width: 305px;
    height: 300px;
    background: linear-gradient(146.64deg, rgba(255, 255, 255, 0.5) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
    backdrop-filter: blur(5.6px);
    border-radius: 54px 0px 54px;
    border: solid 2px rgba(255, 255, 255, 0.5);
    padding: 0 15px;
`
const CardTitle = styled.h2`
    font-size: ${fontSizeSmTitle};
    font-weight: 600;
    color: ${textColor};
`
const Text = styled.li`
    font-size: ${fontSizeXsText};
    font-weight: 400;
    color: ${textColor};
    list-style: none;
    &::before {
    content: ' 📍 ';
    }
`
const Map = styled.img`
    min-width: 270px;
    max-width: 50%;
    padding: 10px;
`

const About = () => {
    const data = [
        {
            text: "Yo nací en El Salvador",
            id: "01"
        },
        {
            text: "Tengo 21 años",
            id: "02"
        },
        {
            text: "Comencé a interesarme en la industria tech desde 2021",
            id: "03"
        },
        {
            text: "Soy un programador web con React",
            id: "04"
        },
    ]
  return (
    <AboutContainer name="Sobre mí">
        <AboutTitle>Sobre mí</AboutTitle>
        <CardContainer>
            <CardTitle>Yo soy Henry Alexander</CardTitle>
            <ul>
                { data.map((dat)=> <Text key={dat.id}>{dat.text} </Text> ) }
            </ul>
        </CardContainer>
        <Map src={MapImg} />
    </AboutContainer>
  )
}

export default About