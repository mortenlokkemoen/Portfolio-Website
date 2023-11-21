import React from 'react'
import { skills } from '../../data/constants';
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillsStyle';

const  Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          These are some of my skills that Ive learned over the years as a developer.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
    
  
}

export default Skills;