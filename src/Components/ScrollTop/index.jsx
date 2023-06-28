import React, { useState, useEffect } from 'react';
import { ScrollToTopButton } from "../../Components/ScrollToTopButton";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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