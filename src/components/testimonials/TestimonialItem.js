
const TestimonialItem = ({ name, relation, comment, index }) => {
    return (
        <div className={"item"}>
            <p>{comment}</p>
            <div className={"commenter"}>
                <img
                    src={`avataars/${index}.svg`}
                    width={64}
                    height={64}
                    alt={`Avatar ${index}`}
                />
                <p>{name}</p>
                <p>{relation}</p>
            </div>
        </div>
    );
};

export default TestimonialItem;
