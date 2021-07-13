import styled from "styled-components";

const Bar = styled.div`
    width: 320px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;
const ProgressBar = ({ value, index }) => {
    let Progress = styled.div`
        width: ${value * 100}%;
        height: 100%;
        background-color: #00864e;
        border-radius: 5px;
    `;
    return (
        <Bar>
            <Progress />
        </Bar>
    );
};

export default ProgressBar;
