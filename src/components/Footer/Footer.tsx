import { FooterStyled } from "./Styles";

export function Footer() {
  return (
    <FooterStyled data-testid="footer">
      <img src="/hypesoft.png" alt="" />
      <p>
        Made with <span className="heart">❤</span> by Eduardo and <span className="hypesoft">Hypesoft</span>
      </p>
    </FooterStyled>
  );
}
