import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { fontSizeXsText, fontSizeSmText, primaryColor, textColorRemark, } from '../../constants';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {v4 as uuid} from "uuid";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GlobalStyle = createGlobalStyle`
  .hvr-float-shadow::before {
    background: none;
  }
`;

const ProjectCard = styled.div`
    max-width: 345px;
    margin-bottom: 25px;
    text-align: center;
`
const CardImg = styled.img`
    margin-bottom: 15px;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 120px;
`
const CardTitle = styled.h2`
    color: ${primaryColor};
    font-size: ${fontSizeXsText};
    font-weight: 600;
`
const CardSubtitle = styled.h3`
    color: ${primaryColor};
    font-size: ${fontSizeXsText};
    font-weight: 600;
`
const CardText = styled.p`
    color: black;
    font-size: ${fontSizeXsText};
    font-weight: 400;
    text-align: justify;
    padding: 0 35px;
`
const Icon = styled.img`
    /* border: 2px solid ${primaryColor}; */
    border-radius: 50%;
    width: 54px;
    height: 54px;
`
const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 110px;
  background-color: ${textColorRemark};
  color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  position: absolute;
  z-index: 10;
  bottom: 100%; /* Position the tooltip above the element */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  pointer-events: none; /* Prevent the tooltip from interfering with mouse events */
  
  &::after {
    content: '';
    position: absolute;
    top: 100%; /* Arrow pointing down */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #2157F2 transparent transparent transparent;
  }
`;

const TooltipWrapperHover = styled(TooltipWrapper)`
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;
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

const Carrusel = ({data}) => {
    SwiperCore.use([Navigation, Pagination])
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <Swiper 
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: {
                  slidesPerView: "2",
                  spaceBetween: "20",
                },
                1024: {
                  slidesPerView: "3",
                  spaceBetween: "20",
                },
              }}
            navigation // Habilita los botones de navegación
            pagination={{ clickable: true }}
            style={{maxWidth: "1400px", padding: "10px", width: "100%"}}
        >
        {data.map((item)=>
            <SwiperSlide key={uuid()} style={{ display: "flex", justifyContent: "center"}}>
                <GlobalStyle /> 
                <ProjectCard data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" className='hvr-float-shadow' key={item.id}>
                    <CardImg src={item.url} width="100%" height="auto"/>
                    <CardContainer>
                        <CardTitle>{item.title}</CardTitle>
                        <CardSubtitle>{item.subtitle}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        <CardSubtitle>Stack:</CardSubtitle>
                            <div style={{marginTop: "25px", display: "flex", gap: "4px", padding: "0 35px" }}>
                                {item.stack.map((i, index) => (
                                    <div key={index}>
                                        <TooltipWrapperHover>
                                          <Icon src={i.icon}/>
                                          <TooltipText>{i.name}</TooltipText>
                                        </TooltipWrapperHover>
                                    </div>
                                  ) )}
                            </div>
                            <div style={{marginTop: "25px"}}>
                                <Btn target='_blank' href={item.repository} secundary="true" className='hvr-underline-from-left'>Repositorio</Btn>
                                <Btn target='_blank' href={item.demo}>Ver demo</Btn>
                            </div>
                    </CardContainer>
                </ProjectCard>
            </SwiperSlide>  
        )} 
    </Swiper>
  )
}

export default Carrusel