import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import ContactMe from "./components/contacts/ContactMe";
import styled from "styled-components";

const AppStyled = styled.div``;

function App() {
    return (
        <AppStyled id="#fullpage">
            <Home />
            <Skills />
            <Projects />
            <Testimonials />
            <ContactMe />
        </AppStyled>
    );
}

export default App;
