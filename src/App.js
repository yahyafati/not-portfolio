import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import ContactMe from "./components/contacts/ContactMe";
import GameSection from "./components/game/GameSection";
import styled from "styled-components";
import NavigationPanel from "./components/navigation/NavigationPanel";

const AppStyled = styled.div``;

function App() {
    return (
        <AppStyled id="#fullpage">
            <NavigationPanel />
            <Home />
            <Skills />
            <Projects />
            <Testimonials />
            <ContactMe />
            <GameSection />
        </AppStyled>
    );
}

export default App;
