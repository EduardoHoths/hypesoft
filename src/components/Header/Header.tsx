"use-client";

// React
import React, { useEffect, useState } from "react";

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
import { FiDribbble } from "react-icons/fi";
import { BsBehance, BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import dynamic from "next/dynamic";
import useMobile from "../../hooks/useMobile";



export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { mobile } = useMobile();

  return (
    <HeaderStyled>
      {mobile ? (
        <>
          <MenuMobile>
            <button>
              <AiOutlineMenu size={30} color="white" onClick={() => setMenuIsOpen(true)} />
            </button>

            <div className={menuIsOpen ? "fade active" : "fade"}></div>

            <Navigation menuIsOpen={menuIsOpen}>
              <button>
                <AiOutlineClose size={24} color="white" onClick={() => setMenuIsOpen(false)} />
              </button>

              <a href="#about">ABOUT</a>
              <a href="#about">SERVICE</a>
              <a href="#about">WORKS</a>
              <a href="#about">CONTACT</a>
            </Navigation>
          </MenuMobile>
        </>
      ) : (
        <Navigation>
          <a href="#about">ABOUT</a>
          <a href="#about">SERVICE</a>
          <a href="#about">WORKS</a>
          <a href="#about">CONTACT</a>
        </Navigation>
      )}

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
            <button className="btn purple">HIRE ME</button>
            <button className="btn">VIEW WORK</button>
          </MoreAbout>

          <Social>
            <span>Follow me on</span>

            <div>
              <a href="">
                <FiDribbble size={20} />
              </a>
              <a href="">
                <BsBehance size={20} />
              </a>
              <a href="">
                <ImFacebook size={20} />
              </a>
              <a href="">
                <BsTwitter size={20} />
              </a>
            </div>
          </Social>
        </ProfileContainer>

        <ImageContainer>
          <img src="/profile.jpeg" alt="Eduardo Hoths" />

          <img src="/Dot.svg" className="dots" />
        </ImageContainer>
      </Wrapper>
    </HeaderStyled>
  );
}
