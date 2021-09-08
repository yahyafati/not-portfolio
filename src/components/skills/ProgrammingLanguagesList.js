import ProgrammingLanguage from "./ProgrammingLanguage";
import javascriptIcon from "@iconify-icons/logos/javascript";
import pythonIcon from "@iconify-icons/logos/python";
import cPlusplus from "@iconify-icons/logos/c-plusplus";
import javaIcon from "@iconify-icons/logos/java";
import kotlinIcon from "@iconify-icons/logos/kotlin";
import htmlIcon from "@iconify-icons/logos/html-5";
import nodejsIcon from "@iconify-icons/logos/nodejs";

const languages = [
    {
        name: "Python",
        fluency: 0.9,
        icon: pythonIcon,
    },
    {
        name: "Java",
        fluency: 0.9,
        icon: javaIcon,
    },
    {
        name: "Javascript",
        fluency: 0.85,
        icon: javascriptIcon,
    },
    {
        name: "NodeJS",
        fluency: 0.8,
        icon: nodejsIcon,
    },
    {
        name: "HTML&CSS",
        fluency: 0.95,
        icon: htmlIcon,
    },
    {
        name: "C++",
        fluency: 0.7,
        icon: cPlusplus,
    },
    {
        name: "Kotlin",
        fluency: 0.75,
        icon: kotlinIcon,
    },
];

const ProgrammingLanguagesList = () => {

    return (
        <div className={"programmingLanguagesList"}>
            {languages.map((language, index) => (
                <ProgrammingLanguage language={language} index={index} />
            ))}
        </div>
    );
};

export default ProgrammingLanguagesList;
