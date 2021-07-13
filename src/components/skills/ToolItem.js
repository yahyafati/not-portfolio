import styled from "styled-components";
import Icon from "@iconify/react";

const IconStyled = styled(Icon)``;

const ToolItem = ({ tool }) => {
    return <IconStyled icon={tool} width={111.34} height={111.34}></IconStyled>;
};

export default ToolItem;
