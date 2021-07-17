import styled from "styled-components";
import ProgrammingLanguagesList from "./ProgrammingLanguagesList";
import ToolsGrid from "./ToolsGrid";

const SkillsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f70a33;
    color: white;
    /* border: 1px solid; */
`;

const SkillsTitle = styled.h2`
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    font-size: 36px;
    width: fit-content;
    margin: 30px auto 40px auto;

    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    animation: SkillsTitleAnim 1s linear;
    @keyframes SkillsTitleAnim {
        0% {
            transform: translateY(-100px);
        }

        100% {
            transform: translateY(0px);
        }
    }
`;

const MySkills = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const Skills = () => {
    return (
        <SkillsSection id="skills" className="section">
            <SkillsTitle>Here are some of the things I'm good at</SkillsTitle>
            <MySkills>
                <ProgrammingLanguagesList />
                <ToolsGrid />
            </MySkills>
        </SkillsSection>
    );
};

export default Skills;
