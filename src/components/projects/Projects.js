import Project from "./Project";

import "../../styles/projects.css"

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

const Projects = () => {

    return (
        <div id="projects" className="section projectsSection">
            <h2 className={"projectsTitle"}>
                If you wish to check out some of my previous works
            </h2>
            <div className={"projectsList"}>
                {projects.map((project, index) => (
                    <Project project={project} index={index} />
                ))}
            </div>
            <a href="/#" className={"moreButton"}>Show More</a>
        </div>
    );
};

export default Projects;
