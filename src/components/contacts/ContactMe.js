import styled from "styled-components";
import ContactForm from "./ContactForm";
import SocialMediaButtons from "./SocialMediaButtons";

const ContactMeStyled = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ContactMeTitle = styled.h2`
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    font-size: 36px;
    width: fit-content;
    margin: 0 auto;

    animation: ContactMeTitleAnim 3s linear;

    @keyframes ContactMeTitleAnim {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(0);
        }
    }
`;

const ContactMeSubtitle = styled.h4`
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    font-size: 18px;
    width: fit-content;
    margin: 8px auto 18px auto;

    animation: ContactMeSubtitleAnim 3s linear;

    @keyframes ContactMeSubtitleAnim {
        0% {
            transform: translateX(200px);
        }

        100% {
            transform: translateX(0px);
        }
    }
`;

const ContactMe = () => {
    return (
        <ContactMeStyled id="contact" className="section">
            <ContactMeTitle>Let's have a talk</ContactMeTitle>
            <ContactMeSubtitle>
                If you have any business inquiries or any feedback related to
                anything, contact me down below.
            </ContactMeSubtitle>
            <ContactForm />
            <SocialMediaButtons />
        </ContactMeStyled>
    );
};

export default ContactMe;
