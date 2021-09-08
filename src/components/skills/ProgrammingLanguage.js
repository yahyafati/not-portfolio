import { InlineIcon } from "@iconify/react";
import ProgressBar from "./ProgressBar";


const ProgrammingLanguage = ({ language, index }) => {
    return (
        <div className={"programmingLanguageItem"}>
            <InlineIcon icon={language.icon} height={32} width={32} />
            <ProgressBar value={language.fluency} index={index} />
        </div>
    );
};

export default ProgrammingLanguage;
