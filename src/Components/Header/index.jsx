import React, { useState } from 'react';
import LogoSmall from "../../assets/logo-grey.svg";
import styled from 'styled-components';
import { BiMenuAltRight } from "react-icons/bi";
import { primaryColor } from '../../constants';
import MobileNavbar from '../MobileNavbar';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 2;
`;

const Logo = styled.img`
  width: 37px;
  height: auto;
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;
  z-index: 2;

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
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = ()=>{
      setOpenMenu(!openMenu)
    }

  return (
    <HeaderContainer>
      <Logo src={LogoSmall} alt="Logo" />
      <MobileMenuButton onClick={toggleMenu}>
        <BiMenuAltRight color={primaryColor} style={MenuIconStyles}/>  
      </MobileMenuButton>
      {openMenu && <MobileNavbar toggleMenu={toggleMenu} /> }
    </HeaderContainer>
  )
}
export default Header