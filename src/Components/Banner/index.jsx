import React, {useEffect} from 'react';
import { styled } from 'styled-components';
import bannerBg from '../../assets/banner-bg.svg';
import bg from '../../assets/bg.svg'
import profileImg from '../../assets/Profile-image.png';
import { cvUrl, fontSizeXsText, fontSizeMdText, fontSizeMdTitle, fontSizeSmText, fontSizeSmTitle, textColor, textColorRemark } from '../../constants';
import { useMediaQuery } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerContainer = styled.section`
  background-image: url(${props => props.bgimage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* height: 700px; */
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px){
    /* height: 986px; */
  }

  @media (min-width: 1200px){
    /* height: 600px; */
    background-position: inherit;
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
    height: 645px;
    justify-content: center;
  }

  @media (min-width: 1200px){
    flex-direction: row;
    width: 1000px;
    height: 507px;
  }
`
const CardImg = styled.img`
  width: 187px;
  height: 187px;
  border-radius: 100px;
  border: #ffff 15px;

  @media (min-width: 768px){
    width: 235px;
    height: 235px;
    margin-top: 35px;
  }
  @media (min-width: 1200px){
    width: 335px;
    height: 335px;
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
    gap: 25px;
  }

  @media (min-width: 768px){
    width: 500px;
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
const CardTitleHighlighted = styled.span`
    font-size: ${fontSizeSmTitle};
    font-weight: 600;
    color: ${textColorRemark};

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
  useEffect(() => {
    AOS.init();
  }, []);  
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  return (
    <BannerContainer bgimage={isDesktop ? bg : bannerBg}>
      <CardContainer>
        <CardImg src={profileImg} alt='my profile image' data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" data-aos-delay="600" />
        <CardDiv>
          <CardTitle data-aos="fade-left" data-aos-duration="500">Yo soy <CardTitleHighlighted data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" data-aos-delay="600">Henry</CardTitleHighlighted> Alexander</CardTitle>
          <CardText data-aos="fade-right" data-aos-duration="500">Soy formado en la Universidad Don Bosco en la carrera de Marketing Digital y actualmente estoy participando del proyecto Oracle ONE en Alura Latam.</CardText>
          <CardBtnContainer>
            <Btn href='#' data-aos="fade-left" data-aos-duration="500" >Ver Proyectos</Btn>
            <Btn secundary="true" href={cvUrl} target="_blank" data-aos="fade-right" data-aos-duration="500" >Descargar CV</Btn>
          </CardBtnContainer>
        </CardDiv>
      </CardContainer>
    </BannerContainer>
  )
}

export default Banner