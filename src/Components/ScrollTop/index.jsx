import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { secondaryColor, textColorRemark } from '../../constants';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: ${secondaryColor};
  background-color: ${textColorRemark};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  z-index: 1;
`;

const ScrollTop = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };    
  return (
    <>
      {showScrollButton && (
        <ScrollToTopButton onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </ScrollToTopButton>
      )}        
    </>
  )
}

export default ScrollTop