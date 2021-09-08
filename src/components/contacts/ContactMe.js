import ContactForm from "./ContactForm";
import SocialMediaButtons from "./SocialMediaButtons";
import "../../styles/contact.css"

const ContactMe = () => {
    return (
        <div id="contact" className="section contactSection">
            <h2 className={"contactMe"}>Let's have a talk</h2>
            <h4 className={"subtitle"}>
                If you have any business inquiries or any feedback related to
                anything, contact me down below.
            </h4>
            <ContactForm />
            <SocialMediaButtons />
        </div>
    );
};

export default ContactMe;
