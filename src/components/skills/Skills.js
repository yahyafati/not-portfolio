import ProgrammingLanguagesList from "./ProgrammingLanguagesList";
import ToolsGrid from "./ToolsGrid";
import "../../styles/skills.css"


const Skills = () => {
    return (
        <div id="skills" className="section skillsSection">
            <h2 className={"skillsTitle"}>Here are some of the things I'm good at</h2>
            <div className={"mySkills"}>
                <ProgrammingLanguagesList />
                <ToolsGrid />
            </div>
        </div>
    );
};

export default Skills;
