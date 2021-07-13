import { InlineIcon } from "@iconify/react";
import githubIcon from "@iconify-icons/logos/github-icon";

import styled from "styled-components";

let ProjectStyled = styled.div`
    padding: 15px;
    margin: 5px;
    color: white;
    background-color: #d11435;
    border-radius: 5px;
`;

const ProjectTitle = styled.h3`
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 24px;
    font-weight: 400;
`;

const ProjectDescription = styled.p`
    font-size: 14px;
`;

const ProjectTagsContainer = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`;

const ProjectTag = styled.a`
    font-size: 12px;
    background: white;
    color: #d11435;
    padding: 5px 10px;
    border-radius: 3px;
    margin-left: 5px;
`;

const GithubLink = styled.a`
    margin-left: 15px;
`;
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
                        <ProjectTag href="#">{tag}</ProjectTag>
                    ))}
                </div>
                <div>
                    {project.langs.map((lang) => (
                        <ProjectTag href="#">{lang}</ProjectTag>
                    ))}
                </div>
            </ProjectTagsContainer>
        </ProjectStyled>
    );
};

export default Project;
