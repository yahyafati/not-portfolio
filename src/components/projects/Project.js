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
        <div className={"projectItem"}>
            <h3 className={"projectName"}>
                {project.name}
                <a href="/#" className={"githubLink"}>
                    <InlineIcon icon={githubIcon} />
                </a>
            </h3>
            <div className={"projectDescription"}>{project.description}</div>
            <div className={"tagsContainer"}>
                <div className={"tags"}>
                    {project.tags.map((tag, index) => (
                        <div className={"tag"} key={index}>{tag}</div>
                    ))}
                </div>
                <div className={"languages"}>
                    {project.langs.map((lang) => (
                        <Icon
                            className={"language"}
                            icon={iconsMap[lang.toLowerCase()]}
                            height={18}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
