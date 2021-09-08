import TestimonialItem from "./TestimonialItem";
import Slider from "infinite-react-carousel";
import "../../styles/testimonial.css"

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

const Testimonials = () => {

    return (
        <div id="testimonials" className="section testimonialsSection">
            <h2 className={"title"}>
                Here are some good words from my past customers
            </h2>
            <div className={"sliderContainer"}>
                <Slider dots autoplay={true} className={"slider"}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialItem
                            key={index}
                            name={testimonial.name}
                            relation={testimonial.relation}
                            comment={testimonial.comment}
                            index={index}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
