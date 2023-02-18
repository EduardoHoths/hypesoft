import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Title } from "../Title/Title";
import { TestimonialArea, TestimonialList, TestimonialStyled } from "./Styled";

interface ITestimonial {
  id: number;
  author: string;
  position: string;
  company: string;
  testimonial: string;
  stars: number;
}

const testimonialList = [
  {
    id: 1,
    author: "Sundar Pichai",
    position: "CEO & Founder of ",
    company: "Google",
    testimonial:
      "“If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.”",
    stars: 5.0,
  },
  {
    id: 2,
    author: "Shantanu Narayen",
    position: "CEO of ",
    company: "Adobe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl lectus, pretium vel diam aliquam, posuere tempus est. Suspendisse euismod arcu diam, ac rutrum elit imperdiet a. Duis sit amet eleifend nisl, vel venenatis turpis. Phasellus lobortis, magna at.",
    stars: 5.0,
  },
  {
    id: 3,
    author: "Noah Levin",
    position: "Director of Design, ",
    company: "Figma",
    testimonial:
      "Praesent eu ullamcorper quam, sagittis vulputate mauris. Curabitur tristique sem nec enim vulputate, ac luctus ex elementum. Suspendisse potenti.Maecenas at euismod nibh. Fusce at tortor nec metus aliquam dictum id eget tortor. Suspendisse luctus odio eu ante dictum cursus.",
    stars: 5.0,
  },
  {
    id: 4,
    author: "Stewart Butterfield",
    position: "CEO & Founder of ",
    company: "Slack",
    testimonial:
      "Maecenas at euismod nibh. Fusce at tortor nec metus aliquam dictum id eget tortor. Suspendisse luctus odio eu ante dictum cursus.Donec vel aliquam orci. Mauris luctus semper quam, in volutpat dolor congue ac. Proin fringilla tortor sapien, non pretium elit.",
    stars: 5.0,
  },
];

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState<ITestimonial>(testimonialList[0]);
  const [testimonialActive, setTestimonialActive] = useState<number>(1);

  const handleTestimonial = (testimonial: ITestimonial) => {
    setTestimonial(testimonial);
    setTestimonialActive(testimonial.id);
  };

  return (
    <TestimonialStyled>
      <Title title="Testimonial" />

      <div>
        <TestimonialList>
          {testimonialList.map((testimonial) => (
            <li
              key={testimonial.id}
              onClick={() => handleTestimonial(testimonial)}
              className={testimonialActive === testimonial.id ? "active" : ""}
            >
              <div></div>
              <div>
                <strong>{testimonial.author}</strong>
                <span className="position">
                  {testimonial.position} <span className="company">{testimonial.company}</span>
                </span>
              </div>
            </li>
          ))}
        </TestimonialList>

        <TestimonialArea>
          <header>
            <AiFillStar size={32} color="#FF8718" />
            <span>{testimonial.stars.toFixed(1)} Star Rating</span>
          </header>

          <p>{testimonial.testimonial}</p>
        </TestimonialArea>
      </div>
    </TestimonialStyled>
  );
}
