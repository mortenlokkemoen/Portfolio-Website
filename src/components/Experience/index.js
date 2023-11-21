import React from "react";
import { Container, Wrapper, Title, Desc, TimeLineSection } from "./ExperienceStyle";
import { experiences } from "../../data/constants";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from "../Cards/ExperienceCard";

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc> Here are some of the things I've worked on. More to come!</Desc>
                <TimeLineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot  variant="outlined" color="secondary"/>
                                    {index !== experience.length - 1 && <TimelineConnector />}
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{py: '12px', px: 2}}>
                                    <ExperienceCard key={experience.id} experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    )
};

export default Experience;