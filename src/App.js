import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
    return (
        <div className="App">
            <Home />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
