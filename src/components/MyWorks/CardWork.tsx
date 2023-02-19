// React
import React from "react";

// React Scroll
import { AnimationOnScroll } from "react-animation-on-scroll";

// React Icons
import { BsArrowRight } from "react-icons/bs";

// Styles
import { Card } from "./Styles";

interface CardProps {
  work: {
    id: number;
    img: string;
    title: string;
    link: string;
  };
}

export function CardWork({work}:CardProps) {
  return (
    <AnimationOnScroll animateIn="hover-on-mobile" initiallyVisible={true} delay={500}>
      <Card>
        <img src={work.img} alt={work.title} />

        <div>
          <h4>{work.title}</h4>

          <a href={work.link} target="_blank" className="view-project">
            <span>VIEW PROJECT</span>
            <BsArrowRight size={24} color="#000" />
          </a>
        </div>
      </Card>
    </AnimationOnScroll>
  );
}
