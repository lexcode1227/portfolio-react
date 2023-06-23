import React from 'react';
import { styled } from 'styled-components';
import { primaryColor, secondaryColor, fontSizeMdText, textColorRemark } from '../../constants'
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
    left: 0;
    top: 69px;
    width: 100%;
    height: auto;
    background-color: ${primaryColor};
    z-index: 1;
    padding-bottom: 20px;
`
const Item = styled(Link)`
    /* width: 100%; */
    padding: 20px;
    letter-spacing: 1px;
    text-align: center;
    text-decoration: none;
    color: ${secondaryColor};
    font-size: ${fontSizeMdText};
    cursor: pointer;
`
const MobileNavbar = ({toggleMenu}) => {
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
                <Item className='hvr-underline-from-left' key={e.id} to={e.title} smooth="true" duration={500} onClick={toggleMenu} >{e.title}</Item>
            )}
        </NavBar>
    </>
  )
}

export default MobileNavbar