import React from 'react'
import Typewriter from 'typewriter-effect';
import { HeroContainer, HeroBg, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Title, TextLoop, Span, SubTitle, ResumeButton, Image } from './HeroStyle';
import { Bio } from '../../data/constants';
import ProfileImg from "../../assets/img/profil.png";
import HeroBgAnimation from './HeroBGAnimation/BGStyle';

const  Herosection = () => {
  
  const handleClick = () => {
    console.log("Button was clicked");
  }
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>Hi, I am <br />{Bio.name}</Title>
            <TextLoop>
              I am a 
              <Span>
                <Typewriter 
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}/>
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton className="hero-btn" onClick={handleClick} href={Bio.resume} target="display">Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={ProfileImg} alt="profilepicture" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Herosection;