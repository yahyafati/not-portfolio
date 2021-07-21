import styled from "styled-components";
import TestimonialItem from "./TestimonialItem";
import Slider from "infinite-react-carousel";

const TestimonialsStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    background-color: #f70a33cc;
    color: white;
`;

const TestimonialsTitle = styled.h2`
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    font-size: 36px;
    width: fit-content;
    margin: 30px auto 30px auto;

    animation: TestimonialsTitleAnim 1.5s linear;

    @keyframes TestimonialsTitleAnim {
        0% {
            transform: translateY(-100px);
        }

        100% {
            transform: translateY(0px);
        }
    }
`;

const SliderContainerStyled = styled.div`
    margin: 0px auto;
    width: 80%;
    padding: 10px;

    animation: SliderContainerAnim 1.5s linear;

    @keyframes SliderContainerAnim {
        0% {
            transform: translateY(100px);
        }

        100% {
            transform: translateY(0px);
        }
    }
`;

const SliderStyled = styled(Slider)``;

const Testimonials = () => {
    const testimonials = [
        {
            name: "Nuria Mussa",
            relation: "Mom",
            comment:
                "Yahya is an amazing person. He is definitely the best at what he does. He has two brothers and two sisters, and I have to say he is definitely in the top five among my kids.",
        },
        {
            name: "Fati Haji",
            relation: "Dad",
            comment:
                "Yahya is an amazing person. He is definitely the best at what he does. He has two brothers and two sisters, and I have to say he is definitely in the top five among my kids.",
        },
        {
            name: "Fati Haji",
            relation: "Dad",
            comment:
                "Yahya is an amazing person. He is definitely the best at what he does. He has two brothers and two sisters, and I have to say he is definitely in the top five among my kids.",
        },
        {
            name: "Fati Haji",
            relation: "Dad",
            comment:
                "Yahya is an amazing person. He is definitely the best at what he does. He has two brothers and two sisters, and I have to say he is definitely in the top five among my kids.",
        },
    ];

    return (
        <TestimonialsStyled id="testimonials" className="section">
            <TestimonialsTitle>
                Here are some good words from my past customers
            </TestimonialsTitle>
            <SliderContainerStyled>
                <SliderStyled dots autoplay={true}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialItem
                            key={index}
                            name={testimonial.name}
                            relation={testimonial.relation}
                            comment={testimonial.comment}
                            index={index}
                        />
                    ))}
                </SliderStyled>
            </SliderContainerStyled>
        </TestimonialsStyled>
    );
};

export default Testimonials;
