import React, { useState } from 'react';
import LogoSmall from "../../assets/logo-grey.svg";
import styled from 'styled-components';
import { BiMenuAltRight } from "react-icons/bi";
import { primaryColor } from '../../constants';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    const [openmenu, setOpenMenu] = useState(false)
  return (
    <HeaderContainer>
      <Logo src={LogoSmall} alt="Logo" />
      <MobileMenuButton>
        <BiMenuAltRight color={primaryColor} style={MenuIconStyles}/>  
      </MobileMenuButton>
    </HeaderContainer>
  )
}
export default Header