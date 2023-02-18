import React from "react";
import { FooterStyled } from "./Styles";

export function Footer() {
  return (
    <FooterStyled>
      <img src="/hypesoft.png" alt="" />
      <p>
        Made with <span className="heart">❤</span> by Eduardo and <span className="hypesoft">Hypesoft</span>
      </p>
    </FooterStyled>
  );
}
