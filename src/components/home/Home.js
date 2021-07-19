import styled from "styled-components";
import img from "../../circles.svg";
const HomeSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BGCircles = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    /* border: 1px solid; */

    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    animation: BGCirclesAnim 3s;

    @keyframes BGCirclesAnim {
        0% {
            transform: scale(2);
            opacity: 0.5;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

const HomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    color: #d11435;
    padding: 10px;
    border-radius: 5px;

    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
`;

const NameTitle = styled.h1`
    font-family: "Cookie", cursive;
    font-size: 120px;

    animation-name: NameTitleAnim;
    animation-duration: 3s;
    animation-timing-function: linear;
    @keyframes NameTitleAnim {
        0% {
            transform: translateY(-200px);
        }

        50% {
            transform: translateY(0%);
        }

        75% {
            transform: translateY(-5px);
        }

        100% {
            transform: translateY(0%);
        }
    }
`;

const NameTitleHi = styled.span`
    display: inline-block;
    color: teal;
    @keyframes hiAnimation {
        0% {
            color: #525252;
            transform: scale(1);
        }

        25% {
            color: #d11435;
        }

        50% {
            color: #525252;
            transform: scale(1.5);
        }

        75% {
            color: #d11435;
        }

        100% {
            color: #525252;
            transform: scale(1);
        }
    }
`;

const JobTitle = styled.h2`
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 72px;
    font-weight: 300;
    animation-name: JobTitleAnim;
    animation-duration: 3s;

    @keyframes JobTitleAnim {
        0% {
            transform: translateX(-100px);
        }

        100% {
            transform: translateX(0%);
        }
    }
`;

const JobDescription = styled.h4`
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    color: #525252;
    font-size: 36px;

    /* animation: name duration timing-function delay iteration-count direction
        fill-mode; */
    animation: JobDescriptionAnim 3s;

    @keyframes JobDescriptionAnim {
        0% {
            transform: translateY(100px);
        }

        100% {
            transform: translateY(0);
        }
    }
`;

const SideButtonContainer = styled.div`
    position: absolute;
    top: 10%;
    right: 0;
    color: white;
`;

const SideButton = styled.a`
    display: block;
    background-color: #d11435;
    background: url("SideButtonLeaf.svg");
    background-size: 100% 100%;
    text-align: right;
    color: white;
    font-weight: bold;
    font-size: 28px;
    width: 120px;
    padding: 5px;

    transition: all 1s;

    &:hover {
        transform: scale(1.05) translateX(-5px);
    }

    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    animation: SideButtonAnim 1s linear;
    animation-fill-mode: forwards;

    @keyframes SideButtonAnim {
        0% {
            transform: translateX(100px);
        }

        100% {
            transform: translateX(0px);
        }
    }
`;

const Home = () => {
    return (
        <HomeSection id="home" className="section">
            <BGCircles src={img} />
            <HomeTextContainer>
                <NameTitle>
                    <NameTitleHi>Hi</NameTitleHi>, I'm Yahya
                </NameTitle>
                <JobTitle>Mobile and Web Developer</JobTitle>
                <JobDescription>
                    I design and develop beautiful and functional web and mobile
                    apps.
                </JobDescription>
            </HomeTextContainer>
            <SideButtonContainer>
                <SideButton href="#">Blog</SideButton>
            </SideButtonContainer>
        </HomeSection>
    );
};

export default Home;
