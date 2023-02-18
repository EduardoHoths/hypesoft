import React, { useEffect, useRef, useState } from "react";
import { Card, MyServiceStyled } from "./Styles";

import { BsArrowRight, BsCode, BsPhone } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Title } from "../Title/Title";

const myServices = [
  {
    id: 1,
    title: "Front end Development",
    icon: <BsCode size={40} color="#000" />,
  },
  {
    id: 2,
    title: "Responsible Websites",
    icon: <BsPhone size={40} color="#000" />,
  },
];

export function MyService() {
  return (
    <MyServiceStyled>
      <Title title="My Service"/>

      <div className="cards">
        {myServices.map((service) => (
          <AnimationOnScroll
            animateIn="hover-on-mobile"
            initiallyVisible={true}
            delay={500}
            key={service.id}
          >
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
        ))}
      </div>
    </MyServiceStyled>
  );
}
