import { useState } from "react";
import "./App.css"
import Header from './Components/Header'
import Banner from './Components/Banner'
import Skills from "./Components/Skills"
import About from "./Components/About"
import ContactMe from "./Components/ContactMe"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <About/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App
