import React from 'react'
import { styled } from 'styled-components'
import bannerBg from '../../assets/Header-bg.png'
import profileImg from '../../assets/Profile-image.png' 
import { cvUrl, fontSizeXsText, fontSizeMdText, fontSizeMdTitle, fontSizeSmText, fontSizeSmTitle, textColor } from '../../constants'

const BannerContainer = styled.section`
  background-image: url(${bannerBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px){
    height: 986px;
  }
`
const CardContainer = styled.div`
  width: 330px;
  height: 525px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 11px;
  background: linear-gradient(146.64deg, rgba(255, 255, 255, 0.5) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
  backdrop-filter: blur(5.61017px);
  border-radius: 112.203px 0 112.203px;
  border: solid 1px rgba(255, 255, 255, 0.5);
  padding: 10px 15px;

  @media (min-width: 768px){
    width: 590px;
    height: 845px;
  }
`
const CardImg = styled.img`
  width: 187px;
  height: 187px;
  border-radius: 100px;
  border: #ffff 15px;

  @media (min-width: 768px){
    width: 335px;
    height: 335px;
    margin-top: 35px;
  }
`
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 11px;
  height: auto;
  padding: 20px 4px;

  @media (min-width: 768px){
    padding: 20px;
  }
`
const CardTitle = styled.h1`
  font-size: ${fontSizeSmTitle};
  font-weight: 600;
  color: ${textColor};

  @media (min-width: 768px){
    font-size: ${fontSizeMdTitle};
  }
`
const CardText = styled.h3`
  font-size: ${fontSizeSmText};
  font-weight: 400;
  color: ${textColor};

  @media (min-width: 768px){
    font-size: ${fontSizeMdText};
  }
`
const CardBtnContainer = styled.div`
  display: flex;
  gap: 5px;
`
const Btn = styled.a`
  font-size: ${fontSizeSmText};
  background-color: ${props => props.secundary ? 'transparent' : '#2157F2'};
  color: ${props => props.secundary ? '#2157F2' : '#ffff'};
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 768px){
    font-size: ${fontSizeXsText};
  }
`


const Banner = () => {
  return (
    <BannerContainer>
      <CardContainer>
        <CardImg src={profileImg} alt='my profile image' />
        <CardDiv>
          <CardTitle>Yo soy Henry Agustin</CardTitle>
          <CardText>Soy formado en la Universidad Don Bosco en la carrera de Marketing Digital y actualmente estoy participando del proyecto Oracle ONE en Alura Latam.</CardText>
          <CardBtnContainer>
            <Btn href='#' >Ver Proyectos</Btn>
            <Btn secundary="true" href={cvUrl} target="_blank" >Descargar CV</Btn>
          </CardBtnContainer>
        </CardDiv>
      </CardContainer>
    </BannerContainer>
  )
}

export default Banner