import React from "react";
import { ITestimonial } from "./Testimonial";

interface CardProps {
  testimonial: ITestimonial;
  setTestimonial: React.Dispatch<React.SetStateAction<ITestimonial>>;
  testimonialActive: number;
  setTestimonialActive: React.Dispatch<React.SetStateAction<number>>;
}

export function CardTestimonial({
  testimonial,
  setTestimonial,
  testimonialActive,
  setTestimonialActive,
}: CardProps) {
  const handleTestimonial = (testimonial: ITestimonial) => {
    setTestimonial(testimonial);
    setTestimonialActive(testimonial.id);
  };
  return (
    <li
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
  );
}
