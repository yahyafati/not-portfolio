
// const bgColors = [
//     "e5e5e5",
//     "d8d8d8",
//     "cccccc",
//     "bfbfbf",
//     "b2b2b2",
//     "a5a5a5",
//     "999999",
// ];
const ProgressBar = ({ value, index }) => {
    const progress = {
        width: `${value*100}%`,
        height: "100%",
    }

    return (
        <div className={"bar"}>
            <div style={progress} className={"progress"} />
        </div>
    );
};

export default ProgressBar;
