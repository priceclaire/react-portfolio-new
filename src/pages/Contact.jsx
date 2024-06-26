import React from 'react';
import '../index.css'
import styled from 'styled-components';


function Contact() {
    return (
        <SectionWrapper>
            <Intro>
                I would love to hear from you with any queries, please do get in touch!
            </Intro>
            <ContactGrid action="#">
                <FirstName>
                    <label htmlFor="firstName"><h4>First Name *</h4></label>
                    <Input type="text" id="firstName" placeholder="" name="firstName" required />
                </FirstName>
                <LastName>
                    <label htmlFor="lastName"><h4>Last Name *</h4></label>
                    <Input type="text" id="lastName" placeholder="" name="lastName" required />
                </LastName>
                <Email>
                    <label htmlFor="email" ><h4>Your email *</h4></label>
                    <Input type="email" id="email" placeholder="" name="email" required />
                </Email>
                <Subject>
                    <label htmlFor="subject"><h4>Subject *</h4></label>
                    <Input type="text" id="subject" placeholder="" name="subject" required />
                </Subject>
                <Message>
                    <label htmlFor="message" ><h4>Your message *</h4></label>
                    <MessageBox id="message" rows="6" placeholder="" name="message" required></MessageBox>
                </Message>
                <Button>
                    <button type="submit" ><h3>SEND</h3></button>
                </Button>
            </ContactGrid>
        </SectionWrapper>
    );
}

const SectionWrapper = styled.div`
    min-height: calc(100vh - 320px);
    background-color: ${({theme}) => theme.tertiaryLight};
    border: 20px solid ${({theme}) => theme.background};
    padding: 20px;
    
    @media (max-width: 767px) {
        min-height: calc(100vh - 320px);
        height: auto;
    }
`;

const Intro = styled.h3`
    text-align: center;
    color: ${({theme}) => theme.primaryLight};
`;

const Input = styled.input`
    width: calc(100% - 6px);
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid ${({theme}) => theme.primaryLight};;
    background-color: transparent;
`;

const MessageBox = styled.textarea`
    width: calc(100% - 6px);
    border: 2px solid ${({theme}) => theme.primaryLight};;
    resize: none;
    margin: 20px 0px;
    background: transparent;
`;

// Grid areas
const FirstName = styled.div`
    grid-area: firstName;
    padding-right: 20px;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const LastName = styled.div`
    grid-area: lastName;
    padding-left: 20px;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const Email = styled.div`
    grid-area: email;
    padding-right: 20px;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const Subject = styled.div`
    grid-area: subject;
    padding-left: 20px;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const Message = styled.div`
    grid-area: message;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const Button = styled.div`
    grid-area: button;
    justify-self: center;
    
    @media (max-width: 767px) {
        padding: 0px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 30px;
        border: none;
        padding: 10px 0px;
        color: ${({theme}) => theme.primaryDark};
        background-color: ${({theme}) => theme.secondaryDark};
        outline: 2px solid ${({theme}) => theme.primaryDark};
        padding: 0px;

        &:hover {
            background-color: ${({theme}) => theme.primaryLight};
        }
    }
`;

const ContactGrid = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        " . firstName lastName . "
        " . email subject . "
        " . message message . "
        " . button button . ";

    h4 {
        color: ${({theme}) => theme.primaryLight};
    }

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            " firstName "
            " lastName "
            " email "
            " subject "
            " message "
            " button ";
    }
`;

export default Contact;