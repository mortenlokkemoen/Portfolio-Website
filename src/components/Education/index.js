import React from 'react'
import { education, experiences } from '../../data/constants';
import { Container, Wrapper, Title, Desc, TimelineSection } from './EducationStyle';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from '../Cards/Educationcard';

const Education = () => {
  return (
    <Container id="education">
        <Wrapper>
            <Title>Education</Title>
            <Desc>
                I always had a passion for anything computers related from a very early age,
                but the journey has been a long one. Finally I can proudly say I have a degree,
                thanks to these schools.
            </Desc>
            <TimelineSection>
                <Timeline>
                    {education.map((education, index) => (
                        <TimelineItem key={index}>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <EducationCard key={education.id}  education={education}/>
                            </TimelineContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="secondary" />
                                {index !== experiences.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                            </TimelineSeparator>
                        </TimelineItem>
                    ))}
                </Timeline>

            </TimelineSection>
        </Wrapper>
    </Container>
)
}

export default Education;