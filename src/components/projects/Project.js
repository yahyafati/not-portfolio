import { Icon, InlineIcon } from "@iconify/react";
import githubIcon from "@iconify-icons/logos/github-icon";
import javaIcon from "@iconify-icons/logos/java";
import javascriptIcon from "@iconify-icons/logos/javascript";
import cPlusplus from "@iconify-icons/logos/c-plusplus";
import cIcon from "@iconify-icons/logos/c";
import cSharp from "@iconify-icons/logos/c-sharp";
import kotlinIcon from "@iconify-icons/logos/kotlin";
import pythonIcon from "@iconify-icons/logos/python";
import reactIcon from "@iconify-icons/logos/react";
import springIcon from "@iconify-icons/logos/spring";
import mysqlIcon from "@iconify-icons/logos/mysql";
import mongodbIcon from "@iconify-icons/logos/mongodb";
import nextjsIcon from "@iconify-icons/logos/nextjs";
import nodejsIcon from "@iconify-icons/logos/nodejs";
import firebaseIcon from "@iconify-icons/logos/firebase";

import styled from "styled-components";

let ProjectStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    margin: 5px;
    /* color: white;
    background-color: #d11435; */
    border-radius: 10px;
    border: 2px solid wheat;
    box-shadow: 5px -5px 10px 5px wheat;

    transition: all 0.5s;

    &:hover {
        border: 2px solid #d11435;
        box-shadow: 5px -5px 10px 5px #fdfdfd;
    }
`;

const ProjectTitle = styled.h3`
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 24px;
    font-weight: 400;
`;

const ProjectDescription = styled.p`
    font-size: 14px;
    height: 100%;
`;

const ProjectTagsContainer = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`;

const ProjectTag = styled.a`
    font-size: 12px;
    color: white;
    background: #d11435;
    padding: 5px 10px;
    border-radius: 3px;
    margin-left: 5px;
`;

const GithubLink = styled.a`
    margin-left: 15px;
`;

const LanguageIcon = styled(Icon)`
    margin-left: 8px;
`;

const iconsMap = {
    java: javaIcon,
    javascript: javascriptIcon,
    cpp: cPlusplus,
    c: cIcon,
    cSharp: cSharp,
    kotlin: kotlinIcon,
    python: pythonIcon,
    react: reactIcon,
    spring: springIcon,
    mysql: mysqlIcon,
    mongodb: mongodbIcon,
    nextjs: nextjsIcon,
    nodejs: nodejsIcon,
    firebase: firebaseIcon,
};

const Project = ({ project, index }) => {
    return (
        <ProjectStyled>
            <ProjectTitle>
                {project.name}
                <GithubLink href="#">
                    <InlineIcon icon={githubIcon} />
                </GithubLink>
            </ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTagsContainer>
                <div>
                    {project.tags.map((tag) => (
                        <ProjectTag href="/#">{tag}</ProjectTag>
                    ))}
                </div>
                <div>
                    {project.langs.map((lang) => (
                        <a href="/#">
                            <LanguageIcon
                                icon={iconsMap[lang.toLowerCase()]}
                                height={18}
                            />
                        </a>
                        // <ProjectTag href="#">{lang}</ProjectTag>
                    ))}
                </div>
            </ProjectTagsContainer>
        </ProjectStyled>
    );
};

export default Project;
