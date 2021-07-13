import styled from "styled-components"
import img from "../../circles.svg"
const HomeSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BGCircles = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    /* border: 1px solid; */
`

const HomeTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    color: #D11435;
`

const NameTitle = styled.h1`
    font-family: 'Cookie', cursive;
    font-size: 120px;
`

const NameTitleHi = styled.span`
    color: #525252;
`

const JobTitle = styled.h2`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 72px;
    font-weight: 300;
`

const JobDescription = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: #525252;
    font-size: 36px;
`
const Home = () => {
    return (
        <HomeSection>
            <BGCircles src={img} />
            <HomeTextDiv>
                <NameTitle>
                    <NameTitleHi>Hi,</NameTitleHi> I'm Yahya
                    </NameTitle>
                <JobTitle>Mobile and Web Developer</JobTitle>
                <JobDescription>I design and develop beautiful and functional web and mobile apps.</JobDescription>
            </HomeTextDiv>
        </HomeSection>
    )
}

export default Home
