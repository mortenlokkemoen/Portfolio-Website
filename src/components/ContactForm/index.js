import React from "react";
import { useState } from "react";
import { Container, Wrapper, Title, Desc, FormInput, ContactTitle, ContactInput, ContactInputMessage, ContactButton, Status } from "./ContactStyle";
import axios from 'axios';


const ContactForm = () => {

    const [formData, setFormdata] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState({
        type: '',
        message: '',
    });

    const handleInputChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = 'https://melodic-capybara-026512.netlify.app/.netlify/functions/sendEmail';

        try {
            setStatus({
                type: 'pending',
                message: 'Sending...',
            });

            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Allow-Control-Allow-Origin': '*',
                },
            });

            if(response.status === 200) {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully!',
                });
                setFormdata(formData);
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'An error occured. Please try again later.',
            });
        }
    };

    return (
        <Container id="contact">
            <Wrapper>
                <Title>Contact me</Title>
                <Desc> Feel free to reach out to me in regards to questions or opportunities!</Desc>
                <FormInput onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} required />
                    <ContactInput type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required  />
                    <ContactInput type="text" name="subject" placeholder="Subject: " value={formData.subject} onChange={handleInputChange} required />
                    <ContactInputMessage name="message" placeholder="Your message: " value={formData.message} onChange={handleInputChange} required />
                    <ContactButton
                        type="submit"
                        disabled={status.type === 'pending'}
                        data-pending={status.type === 'pending'}
                        >
                        {status.message && <Status status={status.type}>{status.message}</Status>}
                        </ContactButton>
                </FormInput>
            </Wrapper>
        </Container>
    );
}
  
export default ContactForm;