import React from "react";
import { BannerStyled } from "./Styles";

export default function BannerHireMe() {
  return (
    <BannerStyled>
      <strong>
        Got a project in mind? Let's make <br /> something awesome <span>together</span>.
      </strong>
      <button className="btn purple">
        HIRE ME <span></span>
      </button>
    </BannerStyled>
  );
}
