
const ContactForm = () => {
    return (
        <form className={"contactMeForm"} method="post" action="#">
            <input className={"text"} type="text" placeholder="Name" />
            <input className={"text"} type="email" placeholder="Email" />
            <textarea
                className={"body"}
                name="textarea"
                placeholder="What's on your mind?"
            />
            <input className={"send"} type="submit" value="Send" />
        </form>
    );
};

export default ContactForm;
