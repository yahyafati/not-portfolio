import styled from "styled-components";

const Bar = styled.div`
    width: 320px;
    height: 32px;
    border: 1px solid #f28195;
    border-radius: 5px;
`;

// const bgColors = [
//     "00AD64",
//     "00A15E",
//     "009657",
//     "00864E",
//     "017B48",
//     "005E36",
//     "005431",
// ];

const bgColors = [
    "e5e5e5",
    "d8d8d8",
    "cccccc",
    "bfbfbf",
    "b2b2b2",
    "a5a5a5",
    "999999",
];
const ProgressBar = ({ value, index }) => {
    let Progress = styled.div`
        width: ${value * 100}%;
        height: 100%;
        /* background-color: #${bgColors[index]}; */
        background-color: white;
        border-radius: 5px;
    `;
    return (
        <Bar>
            <Progress />
        </Bar>
    );
};

export default ProgressBar;
