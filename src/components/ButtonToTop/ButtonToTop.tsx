// React
import React, { useEffect, useState } from "react";

// React Icons
import { AiFillCaretUp } from "react-icons/ai";

// React Scroll
import { animateScroll } from "react-scroll";

// Styles
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;

  transition: .2s;
  background-color: #000;

  border-radius: 4px;

  padding: 10px;

  z-index: 1;

  transform: ${({ show }: { show: boolean }) => (show ? "translateY(0)" : "translateY(150%)")};
`;

export default function ButtonToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setShow(window.scrollY > 100));

    return () => window.removeEventListener("scroll", () => setShow(window.scrollY > 100));
  }, []);

  const handleToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <Button onClick={handleToTop} show={show}>
      <AiFillCaretUp size={24} color="white" />
    </Button>
  );
}
