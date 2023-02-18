import styled from "styled-components";

export const BannerStyled = styled.section`
  margin: 169px auto 0 auto;
  margin-top: 169px;

  max-width: 1320px;
  height: 312px;

  background: url(/Shapes.png);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 32px;
    line-height: 48px;
    text-align: center;

    font-weight: 400;

    margin-bottom: 32px;

    span {
      color: var(--secondary);
    }
  }

  a {
    display: flex;
    gap: 12px;

    transition: 0.2s;

    span {
      position: relative;
      ::after {
        content: ">";
      }

      ::before {
        content: "";
        width: 15px;
        background-color: white;
        height: 3px;
        position: absolute;

        transition: 0.2s;

        top: 50%;
        left: -7px;
      }
    }

    :hover {
      gap: 40px;

      span::before {
        width: 30px;
        left: -22px;
      }
    }
  }

  @media (max-width: 425px) {
    strong {
      font-size: 24px;
      line-height: 36px;
    }

    a span::before {
      height: 2px;
    }
  }

  @media (max-width: 375px) {
    strong {
      font-size: 18px;
      line-height: 30px;
    }

    
  }
`;
