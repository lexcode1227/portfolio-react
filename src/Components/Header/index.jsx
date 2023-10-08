import React, { useState } from 'react';
import LogoSmall from "../../assets/logo-grey.svg";
import LogoWhite from "../../assets/logo-white.svg";
import styled from 'styled-components';
import { BiMenuAltRight } from "react-icons/bi";
import { primaryColor } from '../../constants';
import Navbar from '../Navbar';
import { useMediaQuery } from '@mui/material';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px){
    height: 75px;
  }
  @media (min-width: 1200px){
    padding-left: 0;
  }
`;
const LogoContainer = styled.div`
  width: 34.7%;
  background-color: ${primaryColor};
  @media (min-width: 1440px){
    width: 50%;
  }
  @media (min-width: 1920px){
    width: 49.5%;
  }
`
const Logo = styled.img`
  width: 37px;
  height: auto;

  @media (min-width: 768px){
    width: 72px;
  }
  @media (min-width: 1440px){
    width: 79px;
    margin-left: 50px;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const MenuIconStyles = {
  width: "37px",
  height: "37px",
  marginRight: "8px",
}

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isDesktop = useMediaQuery('(min-width: 1200px)');
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = ()=>{
      setOpenMenu(!openMenu)
      if (!openMenu) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }

  return (
    <HeaderContainer>
      {isDesktop ? <LogoContainer><Logo src={LogoWhite} alt="Logo" /></LogoContainer> : <Logo src={LogoSmall} alt="Logo" />}
      {isMobile ? 
        <MobileMenuButton onClick={toggleMenu}>
          <BiMenuAltRight color={primaryColor} style={MenuIconStyles}/>  
        </MobileMenuButton> 
      : <Navbar/>
      }
      {openMenu && <Navbar toggleMenu={toggleMenu}/>}
    </HeaderContainer>
  )
}
export default Header