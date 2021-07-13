import styled from "styled-components";
import Icon from "@iconify/react";

const IconStyled = styled(Icon)``;

const ToolItem = ({ tool }) => {
    return <IconStyled icon={tool} width={100} height={100}></IconStyled>;
};

export default ToolItem;
