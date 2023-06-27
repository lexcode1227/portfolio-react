import React from 'react';
import { styled } from 'styled-components';
import { fontSizeXsText, fontSizeSmText, primaryColor, } from '../../constants';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {v4 as uuid} from "uuid";
import { createGlobalStyle } from 'styled-components';

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
                <ProjectCard className='hvr-float-shadow' key={item.id}>
                    <CardImg src={item.url} width="100%" height="auto"/>
                    <CardContainer>
                        <CardTitle>{item.title}</CardTitle>
                        <CardSubtitle>{item.subtitle}</CardSubtitle>
                            <div style={{marginTop: "25px"}}>
                                <Btn target='_blank' href={item.repository} secundary="true">Repositorio</Btn>
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