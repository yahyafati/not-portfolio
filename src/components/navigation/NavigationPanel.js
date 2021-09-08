import NavigationItem from "./NavigationItem";


const NavigationPanel = () => {
    return (
        <div className={"navPanel"} id="navigation">
            <ul className={"list"}>
                <NavigationItem active={true} text="Home" to="home" />
                <NavigationItem active={false} text="Skills" to="skills" />
                <NavigationItem active={false} text="Projects" to="projects" />
                <NavigationItem
                    active={false}
                    text="Testimonials"
                    to="testimonials"
                />
                <NavigationItem active={false} text="Contact" to="contact" />
                <NavigationItem active={false} text="Space" to="game" />
            </ul>
        </div>
    );
};

export default NavigationPanel;
