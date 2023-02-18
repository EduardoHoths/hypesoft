// Styles
import { ImageContainer, InfoStyled, Statistics } from "./Styles";

export function Info() {
  return (
    <InfoStyled>
      <ImageContainer>
        <img src="/Dev.png" alt="Laptop image with android code app" />
      </ImageContainer>

      <div>
        <h2>Front-end developer in Brazil.</h2>
        <p>
          Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc finibus, felis sit
          amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna enim ac tortor.
          Nunc in volutpat ipsum, molestie commodo odio. Quisque auctor nisi mi. Aenean venenatis
          sapien et interdum interdum.
        </p>

        <Statistics>
          <div>
            <span className="number">1+</span>
            <span className="text">Year of Experience</span>
          </div>
          <div>
            <span className="number">5+</span>
            <span className="text">Completed Projects</span>
          </div>
        </Statistics>
        <a href="https://www.linkedin.com/in/eduardohoths/" target={"_blank"} className="btn purple">
          SAY HI <span></span>
        </a>
      </div>
    </InfoStyled>
  );
}
