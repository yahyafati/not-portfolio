import styled from "styled-components";

const TestimonialItemStyled = styled.div`
    background: #d11435;
    color: white;
    padding: 50px;
    border-radius: 10px;
    width: 600px;
    margin: auto;

    color: #d11435;
    background-color: whitesmoke;
`;

const CommentStyled = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

const CommenterStyled = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    color: #444;
`;

const TestimonialItem = ({ name, relation, comment, index }) => {
    return (
        <TestimonialItemStyled>
            <CommentStyled>{comment}</CommentStyled>
            <CommenterStyled>
                <img
                    src={`avataars/${index}.svg`}
                    width={64}
                    height={64}
                    alt={`Avatar ${index}`}
                />
                <p>{name}</p>
                <p>{relation}</p>
            </CommenterStyled>
        </TestimonialItemStyled>
    );
};

export default TestimonialItem;
