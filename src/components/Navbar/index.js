import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GithubButton, ButtonContainer, MobileIcon, MobileMenu, MobileMenuLinks, MobileLinkGithubButton } from './NavbarStyledComponent';
import { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from '../../data/constants';



const  Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
      <NavLogo to='/'>
          <a href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20", cursor: "pointer", }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
            <NavLink href='#about'>About</NavLink>
            <NavLink href='#skills'>Skills</NavLink>
            <NavLink href='#experience'>Experience</NavLink>
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#education'>Education</NavLink>
            <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
            <GithubButton href={Bio.github} target="display"> Github Profile</GithubButton>
        </ButtonContainer>
      { 
        isOpen && 
            <MobileMenu isOpen={isOpen}>
                <MobileMenuLinks 
                href="#about" onClick={() => {
                setIsOpen(!isOpen)
                }}>About
                </MobileMenuLinks>

                <MobileMenuLinks 
                href='#skills' onClick={() => {
                setIsOpen(!isOpen)
                }}>Skills
                </MobileMenuLinks>

                <MobileMenuLinks 
                href='#experience' onClick={() => {
                setIsOpen(!isOpen)
                }}>Experience
                </MobileMenuLinks>

                <MobileMenuLinks 
                href='#projects' onClick={() => {
                setIsOpen(!isOpen)
                }}>Projects
                </MobileMenuLinks>

                <MobileMenuLinks 
                href='#education' onClick={() => {
                setIsOpen(!isOpen)
                }}>Education
                </MobileMenuLinks>

                <MobileMenuLinks 
                href='#contact' onClick={() => {
                setIsOpen(!isOpen)
                }}>Contact
                </MobileMenuLinks>
                <MobileLinkGithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="display">Github Profile</MobileLinkGithubButton>
        </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
