// React
import React, { useState } from "react";

// Styles
import {
  HeaderStyled,
  ImageContainer,
  MenuMobile,
  MoreAbout,
  Navigation,
  ProfileContainer,
  Social,
  Wrapper,
} from "./Styles";

// Icons
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// React Scroll
import { Link } from "react-scroll";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <HeaderStyled>
      <MenuMobile>
        <button className="handle-menu">
          <AiOutlineMenu size={30} color="#ed1ca6" onClick={() => setMenuIsOpen(true)} />
        </button>

        <div className={menuIsOpen ? "fade active" : "fade"}></div>

        <Navigation menuIsOpen={menuIsOpen}>
          <button className="handle-menu">
            <AiOutlineClose size={24} color="white" onClick={() => setMenuIsOpen(false)} />
          </button>

          <Link to="about" smooth={true} offset={-50} onClick={() => setMenuIsOpen(false)}>
            ABOUT
          </Link>
          <Link to="service" smooth={true} offset={-50} onClick={() => setMenuIsOpen(false)}>
            SERVICE
          </Link>
          <Link to="works" smooth={true} offset={-50} onClick={() => setMenuIsOpen(false)}>
            WORKS
          </Link>
          <Link to="contact" smooth={true} offset={-50} onClick={() => setMenuIsOpen(false)}>
            CONTACT
          </Link>
        </Navigation>
      </MenuMobile>

      <Wrapper>
        <ProfileContainer>
          <h1>
            Hello, I'm Eduardo, a <br />
            <span>Front-end Developer</span>
          </h1>
          <p>
            Front-end developer and I'm studying about back-end. I work with web development for
            around one year. I work with React, Typescript and Styled Components.
          </p>

          <MoreAbout>
            <a
              href="https://www.linkedin.com/in/eduardohoths/"
              target={"_blank"}
              className="btn purple"
            >
              HIRE ME
            </a>
            <Link to="service" className="btn" smooth={true} offset={-50}>
              VIEW WORK
            </Link>
          </MoreAbout>

          <Social>
            <span>Follow me on</span>

            <div>
              <a href="https://www.linkedin.com/in/eduardohoths/" target={"_blank"}>
                <BsLinkedin size={20} />
              </a>
              <a href="https://www.instagram.com/eduardo.hoths/" target={"_blank"}>
                <AiFillInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/eduardohoths/" target={"_blank"}>
                <ImFacebook size={20} />
              </a>
              <a href="https://github.com/eduardohoths" target={"_blank"}>
                <BsGithub size={20} />
              </a>
            </div>
          </Social>
        </ProfileContainer>

        <ImageContainer>
          <img src="/profile.jpeg" alt="Eduardo Hoths" />

          <img src="/Dot-vertical.svg" className="dots" />
        </ImageContainer>
      </Wrapper>
    </HeaderStyled>
  );
}
