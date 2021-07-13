import reactIcon from "@iconify-icons/logos/react";
import nextjsIcon from "@iconify-icons/logos/nextjs";
import linuxTux from "@iconify-icons/logos/linux-tux";
import mongodbIcon from "@iconify-icons/logos/mongodb";
import gitIcon from "@iconify-icons/logos/git";
import springIcon from "@iconify-icons/logos/spring";
import mysqlIcon from "@iconify-icons/logos/mysql";

import styled from "styled-components";
import ToolItem from "./ToolItem";

const ToolsGridStyled = styled.div`
    display: grid;
    width: 475px;
    grid-template-columns: 1fr 1fr 1fr;
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
