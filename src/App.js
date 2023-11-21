import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects/index';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import ContactForm from './components/ContactForm';

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {

const [openModal, setOpenModal] = useState({ state: false, project: null });
const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkTheme ? darkTheme: lightTheme}>
      <Router>
      <Navbar />
      <Body>
        <Herosection />
        <Wrapper>
            <Skills />
            <Experience />
        </Wrapper>
            <Projects  openModal={openModal} setOpenModal={setOpenModal} />
        <Wrapper>
            <Education />
        </Wrapper>
        <ContactForm />
        <Footer />
        {openModal.state && 
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        }
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
