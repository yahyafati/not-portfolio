import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
    return (
        <div className="App">
            <Home />
            <Skills />
            <Projects />
            <Testimonials />
        </div>
    );
}

export default App;
