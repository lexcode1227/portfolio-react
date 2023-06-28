import React, {useEffect} from 'react';
import { styled } from 'styled-components';
import { fontSizeMdText, fontSizeMdTitle, fontSizeLgText, fontSizeXsText, fontSizeSmTitle, primaryColor, textColor, secondaryColor, textColorRemark } from '../../constants';
import MapImg from '../../assets/country-.svg';
import Icon from '../../assets/EllipseAbout.svg';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    padding: 25px 0;
    overflow-x: hidden;

    @media (min-width: 768px){
    justify-content: space-between;
    height: 820px;
  }
  @media (min-width: 1200px){
    height: 600px;
    justify-content: space-around;
  }
`
const AboutTitle = styled.h2`
    font-size: ${fontSizeLgText};
    font-weight: 500;
    color: ${secondaryColor};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media (min-width: 1200px){
    max-width: 1440px;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
  }
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

    @media (min-width: 768px){
    width: 563px;
    height: 400px;
    padding: 20px;
  }
`
const CardTitle = styled.h2`
    font-size: ${fontSizeSmTitle};
    font-weight: 600;
    color: ${textColor};

    @media (min-width: 768px){
    font-size: ${fontSizeMdTitle};
  }
`
const CardTitleHighlighted = styled.span`
    font-size: ${fontSizeSmTitle};
    font-weight: 600;
    color: ${textColorRemark};

    @media (min-width: 768px){
    font-size: ${fontSizeMdTitle};
  }    
`
const Text = styled.li`
    font-size: ${fontSizeXsText};
    font-weight: 400;
    color: ${textColor};
    list-style: none;
    &::before {
    content: url(${Icon}) ;
    }

    @media (min-width: 768px){
    font-size: ${fontSizeMdText};
  }
`
const Map = styled.img`
    min-width: 270px;
    max-width: 50%;
    padding: 10px;

    @media (min-width: 768px){
        max-width: 500px;
  }
`

const About = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    const data = [
        {
            text: " Yo nací en El Salvador",
            id: "01"
        },
        {
            text: " Tengo 21 años",
            id: "02"
        },
        {
            text: " Comencé a interesarme en la industria tech desde 2021",
            id: "03"
        },
        {
            text: " Soy un programador web con React",
            id: "04"
        },
    ]
  return (
    <AboutContainer name="Sobre mí">
        <AboutTitle data-aos="fade-up">Sobre mí</AboutTitle>
        <Container>
          <CardContainer data-aos="fade-left" data-aos-duration="500">
            <CardTitle>Yo soy <CardTitleHighlighted>Henry</CardTitleHighlighted> Alexander</CardTitle>
            <ul>
              { data.map((dat)=> <Text key={dat.id}>{dat.text} </Text> ) }
            </ul>
          </CardContainer>
          <Map src={MapImg} data-aos="fade-right" data-aos-duration="500" />
        </Container>  
    </AboutContainer>
  )
}

export default About