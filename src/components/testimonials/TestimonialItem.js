import styled from "styled-components";

const TestimonialItemStyled = styled.div`
    background: #d11435;
    color: white;
    padding: 50px;
    border-radius: 10px;
    width: 600px;
    margin: auto;
`;

const CommentStyled = styled.p`
    font-size: 14px;
`;

const CommenterStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
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
