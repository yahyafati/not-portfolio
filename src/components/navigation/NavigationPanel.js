import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const NavigationPanelStyled = styled.div`
    z-index: 200;
    position: fixed;
    top: 50%;
    right: 0;
    color: purple;
    transform: translate3d(0, -50%, 0);
`;

const ListStyled = styled.ul`
    list-style-type: none;
`;

const NavigationPanel = () => {
    return (
        <NavigationPanelStyled id="navigation">
            <ListStyled>
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
            </ListStyled>
        </NavigationPanelStyled>
    );
};

export default NavigationPanel;
