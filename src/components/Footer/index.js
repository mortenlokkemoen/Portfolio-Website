import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Bio } from "../../data/constants";
import { Copyright, FooterContainer, FooterWrapper, Logo, SocialMediaIcon, SocialMediaIcons, Nav, NavLink } from "./FooterStyle";


function Footer() {
    return (
        <FooterContainer id="footer">
            <FooterWrapper>
                <Logo> Morten Løkkemoen </Logo>
                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.github} target="display"><FaGithub /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="display"><FaLinkedin /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.instagram} target="display"><FaInstagram /></SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>
                    &copy; 2023 Morten Løkkemoen. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};


export default Footer;