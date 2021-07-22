import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import ContactMe from "./components/contacts/ContactMe";
import GameSection from "./components/game/GameSection";
import styled from "styled-components";
import NavigationPanel from "./components/navigation/NavigationPanel";
import Particles from "react-tsparticles";

const AppStyled = styled.div``;

const ParticleStyled = styled(Particles)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -200;
`;

function App() {
    return (
        <AppStyled id="#fullpage">
            <ParticleStyled
                options={{
                    background: {
                        color: {
                            value: "#ffffff",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#000000",
                        },
                        links: {
                            color: "#000000",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
                width="100vw"
                height="100vh"
            />

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
