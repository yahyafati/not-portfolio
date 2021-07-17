import styled from "styled-components";

const GameSectionStyled = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #222;
    color: white;
`;

const ComingSoonText = styled.h2`
    font-family: "Montserrat Alternates", "Montserrat", sans-serif;
    font-size: 64px;
    font-weight: 400;
`;

const GameSection = () => {
    return (
        <GameSectionStyled id="game" className="section">
            <ComingSoonText>
                Space Invaders Game to be added here...
            </ComingSoonText>
        </GameSectionStyled>
    );
};

export default GameSection;
