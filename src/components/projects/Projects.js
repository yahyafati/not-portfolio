import styled from "styled-components";
import Project from "./Project";

const ProjectsStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ProjectsList = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(480px, 600px));
`;

const ProjectsTitle = styled.h2`
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    font-size: 36px;
    width: fit-content;
    margin: 30px auto;
`;

const MoreButton = styled.a`
    display: block;
    width: fit-content;
    margin: 10px auto;
    color: #d11435;
    padding: 5px 10px;
    border: 1px solid #d11435;
    border-radius: 5px;
    transition: all 0.5s;

    &:hover {
        background-color: #d11435;
        border-color: white;
        color: white;
    }
`;

const Projects = () => {
    const projects = [
        {
            name: "Helio IMS",
            description:
                "Helio IMS is an Inventory Management System designed and developed for multiple platforms. It has Mobile and Web version. It is an app where stores could manage their stocks easily.",
            tags: ["Web", "Mobile", "Cloud"],
            langs: ["Java", "Kotlin", "MySQL", "React", "Spring"],
        },
        {
            name: "LetMeTalk",
            description:
                "LetMeTalk is a blogging platform created from scratch using Express, MongoDB, and React",
            tags: ["Web", "Cloud"],
            langs: ["NextJS", "MongoDB", "React", "Javascript"],
        },
        {
            name: "Octopus",
            description:
                "Octopus is a web scraping tool designed with Python and Beautiful Soup. It is an ideal tool for Data Science practitioners because of its ease of use, and wide range of applications.",
            tags: ["Desktop", "Data Science"],
            langs: ["Python", "Soup"],
        },
        {
            name: "Nafidi",
            description:
                "Nafidi is a food delivery app. It is an Android app developed using Kotlin.",
            tags: ["Mobile", "Android", "Cloud"],
            langs: ["Kotlin", "MongoDB"],
        },
    ];

    return (
        <ProjectsStyled>
            <ProjectsTitle>
                If you wish to check out some of my previous works
            </ProjectsTitle>
            <ProjectsList>
                {projects.map((project, index) => (
                    <Project project={project} index={index} />
                ))}
            </ProjectsList>
            <MoreButton href="#">Show More</MoreButton>
        </ProjectsStyled>
    );
};

export default Projects;
