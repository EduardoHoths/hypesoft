// React
import React from "react";

// React Scroll
import { AnimationOnScroll } from "react-animation-on-scroll";

// React Icons
import { BsArrowRight } from "react-icons/bs";

// Styles
import { Card } from "./Styles";

interface CardProps {
  service: {
    id: number;
    title: string;
    icon: React.ReactNode;
  };
}

export function CardService({ service }: CardProps) {
  return (
    <AnimationOnScroll animateIn="hover-on-mobile" initiallyVisible={true} delay={500}>
      <Card>
        <div>{service.icon}</div>

        <div>
          <h4>{service.title}</h4>

          <a href="/" className="discuss-now">
            <span>DISCUSS NOW</span>
            <BsArrowRight size={24} color="#000" />
          </a>
        </div>
      </Card>
    </AnimationOnScroll>
  );
}
