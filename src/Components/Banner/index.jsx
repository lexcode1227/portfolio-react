import React from 'react'
import { styled } from 'styled-components'
import bannerBg from '../../assets/Header-bg.png'
import profileImg from '../../assets/profile-img-border.png' 
import { cvUrl, fontSizeSmText, fontSizeSmTitle, textColor } from '../../constants'

const BannerContainer = styled.section`
  background-image: url(${bannerBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`
const CardImg = styled.img`
  width: 187px;
  height: 187px;
  border-radius: 100px;
  border: #ffff 15px;
  rotate: 3.24°;
`
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 11px;
  height: 205px;
`
const CardTitle = styled.h1`
  font-size: ${fontSizeSmTitle};
  font-weight: 600;
  color: ${textColor};
`
const CardText = styled.h3`
  font-size: ${fontSizeSmText};
  font-weight: 400;
  color: ${textColor};
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