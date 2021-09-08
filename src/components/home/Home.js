import "../../styles/home.css"

const Home = () => {
    return (
        <div id="home" className="section homeSection">
            {/* <BGCircles src={img} /> */}
            <div className={"homeTextContainer"}>
                <h1 className={"nameTitle"}>
                    <span className={"nameTitleHi"}>Hi</span>, I'm Yahya
                </h1>
                <h2 className={"jobTitle"}>Mobile and Web Developer</h2>
                <h4 className={"jobDescription"}>
                    I design and develop beautiful and functional web and mobile
                    apps.
                </h4>
            </div>
            <div className={"sideButtonContainer"}>
                <a href="/#" className={"sideButton"}>Blog</a>
            </div>
        </div>
    );
};

export default Home;
