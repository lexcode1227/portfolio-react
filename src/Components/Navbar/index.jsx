import React from 'react';
import { styled } from 'styled-components';
import { primaryColor, secondaryColor, fontSizeXsText, textColorRemark } from '../../constants'
import { Link, animateScroll as scroll } from 'react-scroll';
import {v4 as uuid} from "uuid";
import 'hover.css/css/hover.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .hvr-underline-from-left::before {
    background-color: #2157f2;
  }
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 69px;
    width: 100%;
    height: auto;
    background-color: ${primaryColor};
    padding-bottom: 20px;
    animation: ease .4s left forwards;

    @keyframes left {
    0% {
        left: 100%;
    }
    100% {
        left: 0;
    }
}

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-end;
        gap: 15px;
        position: relative;
        left: 0;
        top: 0;
        background-color: ${secondaryColor};
        color: ${primaryColor};
        z-index: 0;
        padding-bottom: 0;
    }
`

const Item = styled(Link)`
    /* width: 100%; */
    padding: 20px;
    letter-spacing: 1px;
    text-align: center;
    text-decoration: none;
    color: ${secondaryColor};
    font-size: ${fontSizeXsText};
    cursor: pointer;

    &:hover {
    color: ${textColorRemark};
  }

  @media (min-width: 768px) {
        padding: 10px 0;
        color: ${primaryColor};
    }
`
const Navbar = () => {
    const data = [
        {
            id: uuid(), 
            title : "Habilidades",
        },
        {
            id: uuid(), 
            title : "Proyectos",
        },
        {
            id: uuid(), 
            title : "Sobre mí",
        },
        {
            id: uuid(), 
            title : "Contacto",
        },
    ]
  return (
    <>
        <GlobalStyle />
        <NavBar>
            {data.map((e)=>
                <Item className='hvr-underline-from-left' key={e.id} to={e.title} smooth="true" duration={500}>{e.title}</Item>
            )}
        </NavBar>
    </>
  )
}

export default Navbar