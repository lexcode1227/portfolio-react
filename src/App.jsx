import { useState, useEffect } from "react";
import "./App.css"
import Header from './Components/Header'
import Banner from './Components/Banner'
import Skills from "./Components/Skills"
import About from "./Components/About"
import ContactMe from "./Components/ContactMe"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"
import { ScrollToTopButton } from "./Components/ScrollToTopButton";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
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
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <About/>
      <ContactMe/>
      <Footer/>
      {showScrollButton && (
        <ScrollToTopButton onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </ScrollToTopButton>
      )}
    </>
  )
}

export default App
