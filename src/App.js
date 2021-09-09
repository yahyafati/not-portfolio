import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import ContactMe from "./components/contacts/ContactMe";
import GameSection from "./components/game/GameSection";
import NavigationPanel from "./components/navigation/NavigationPanel";
import ParticlesBackground from "./components/ParticlesBackground";
// import ReactFullpage from '@fullpage/react-fullpage-umd'; // will return static version on server and "live" version on client
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
    return (
        <div id="#fullpage">
            <ParticlesBackground />

            <NavigationPanel />
            <ReactFullpage
                render={({ state, fullPageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Home />
                            <Skills />
                            <Projects />
                            <Testimonials />
                            <ContactMe />
                            <GameSection />
                        </ReactFullpage.Wrapper>
                    );
                }}
            />

            {/*<ReactFullpage.Wrapper>*/}
            {/*</ReactFullpage.Wrapper>*/}
        </div>
    );
}

export default App;
