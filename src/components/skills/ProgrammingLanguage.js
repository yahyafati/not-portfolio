import { InlineIcon } from "@iconify/react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";

const ProgrammingLanguageDiv = styled.div`
    display: flex;
    margin: 8px;
    gap: 16px;
`;

const ProgrammingLanguage = ({ language, index }) => {
    return (
        <ProgrammingLanguageDiv>
            <InlineIcon icon={language.icon} height={32} width={32} />
            <ProgressBar value={language.fluency} index={index} />
        </ProgrammingLanguageDiv>
    );
};

export default ProgrammingLanguage;
