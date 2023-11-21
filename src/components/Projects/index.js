import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, ToggleButton, ToggleButtonGroup, Divider, CardContainer } from './ProjectStyle';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';


const Projects = ({openModal, setOpenModal}) => {
    const [toggle, setToggle] = useState('all');

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I am currently trying to build up my projects portfolio. Here are some of them.
                </Desc>
                <ToggleButtonGroup>
                    {toggle === 'all' ? <ToggleButton active={toggle === 'all'} value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                    :
                    <ToggleButton active={toggle === 'all'} value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                    }
               <Divider />
          {toggle === 'web app' ?
            <ToggleButton active={toggle === 'web app'} value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active={toggle === 'android app'} value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active={toggle === 'machine learning'}value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard  key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
        </Container>
    )
}



export default Projects;