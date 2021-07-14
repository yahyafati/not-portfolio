import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import ContactMe from "./components/contacts/ContactMe";

function App() {
    return (
        <div className="App">
            <Home />
            <Skills />
            <Projects />
            <Testimonials />
            <ContactMe />
        </div>
    );
}

export default App;
