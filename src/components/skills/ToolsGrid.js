import reactIcon from "@iconify-icons/logos/react";
import nextjsIcon from "@iconify-icons/logos/nextjs";
import linuxTux from "@iconify-icons/logos/linux-tux";
import mongodbIcon from "@iconify-icons/logos/mongodb";
import gitIcon from "@iconify-icons/logos/git";
import springIcon from "@iconify-icons/logos/spring";
import mysqlIcon from "@iconify-icons/logos/mysql";
import firebaseIcon from "@iconify-icons/logos/firebase";

import ToolItem from "./ToolItem";

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
        <div className={"toolsGrid"}>
            {tools.map((tool, index) => (
                <ToolItem tool={tool} key={index} />
            ))}
        </div>
    );
};

export default ToolsGrid;
