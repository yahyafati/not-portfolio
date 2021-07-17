import reactIcon from "@iconify-icons/logos/react";
import nextjsIcon from "@iconify-icons/logos/nextjs";
import linuxTux from "@iconify-icons/logos/linux-tux";
import mongodbIcon from "@iconify-icons/logos/mongodb";
import gitIcon from "@iconify-icons/logos/git";
import springIcon from "@iconify-icons/logos/spring";
import mysqlIcon from "@iconify-icons/logos/mysql";
import firebaseIcon from "@iconify-icons/logos/firebase";

import styled from "styled-components";
import ToolItem from "./ToolItem";

const ToolsGridStyled = styled.div`
    display: grid;
    width: 475px;
    grid-template-columns: 1fr 1fr 1fr;

    animation: ToolsGridAnim 1s linear;

    @keyframes ToolsGridAnim {
        0% {
            transform: translateX(100px);
        }

        100% {
            transform: translateX(0%);
        }
    }
`;
const ToolsGrid = () => {
    const tools = [
        reactIcon,
        nextjsIcon,
        linuxTux,
        mongodbIcon,
        gitIcon,
        springIcon,
        mysqlIcon,
        firebaseIcon,
    ];

    return (
        <ToolsGridStyled>
            {tools.map((tool) => (
                <ToolItem tool={tool} />
            ))}
        </ToolsGridStyled>
    );
};

export default ToolsGrid;
