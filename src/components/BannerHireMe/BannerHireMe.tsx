import { BannerStyled } from "./Styles";

export function BannerHireMe() {
  return (
    <BannerStyled>
      <strong>
        Got a project in mind? Let's make <br /> something awesome <span>together</span>.
      </strong>
      <a href="https://www.linkedin.com/in/eduardohoths/" target={"_blank"} className="btn purple">
        HIRE ME <span></span>
      </a>
    </BannerStyled>
  );
}
