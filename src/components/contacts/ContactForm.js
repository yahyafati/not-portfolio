import styled from "styled-components";

const ContactMeForm = styled.form`
    width: 480px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;

    animation: ContactMeFormAnim 3s linear;

    @keyframes ContactMeFormAnim {
        0% {
            transform: scale(1.1);
        }

        50% {
            transform: scale(0.95);
        }

        75% {
            transform: scale(1.05);
        }

        100% {
            transform: scale(1);
        }
    }
`;

const TextInputStyled = styled.input`
    font-family: "Montserrat", sans-serif;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
    border: 2px solid #ccc;

    &:focus {
        border: 2px solid #d11435;
    }
`;

const BodyStyled = styled.textarea`
    /* border: 2px solid #fff; */
    font-family: "Montserrat", sans-serif;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    grid-column: 1/3;
    outline: none;
    resize: none;
    height: 120px;

    &:focus {
        border: 2px solid #d11435;
    }
`;

const SendMessageInput = styled.input`
    background: #d11435ee;
    cursor: pointer;
    color: white;
    padding: 5px 10px;
    border: 2px solid #fff;
    padding: 10px;
    grid-column: 2/3;

    border-radius: 10px;

    &:hover {
        background: #d11435;
    }

    &:focus {
        outline: none;
        background: #d11435;
    }
`;

const ContactForm = () => {
    return (
        <ContactMeForm method="post" action="#">
            <TextInputStyled type="text" placeholder="Name" />
            <TextInputStyled type="email" placeholder="Email" />
            <BodyStyled
                name="textarea"
                placeholder="What's on your mind?"
            ></BodyStyled>
            <SendMessageInput type="submit" value="Send" />
        </ContactMeForm>
    );
};

export default ContactForm;
