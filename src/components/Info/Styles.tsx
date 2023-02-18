import styled from "styled-components";

export const InfoStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 88px;
  margin: 0 auto;
  max-width: 1180px;
  margin-top: 103px;

  padding: 0 16px;

  h2 {
    margin-top: 26px;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
  }

  p {
    color: var(--gray-500);
    font-size: 18px;
    line-height: 28px;
    max-width: 672px;
    margin-top: 20px;
    margin-bottom: 32px;
  }

  button {
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

        top: 50%;
        left: -7px;

        transition: 0.2s;
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

  @media (max-width: 1440px) {
    gap: 50px;

    h2 {
      font-size: 28px;
      line-height: 36px;
    }
    p {
      font-size: 16px;
      line-height: 26px;
      max-width: 500px;
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 22px;
      line-height: 36px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 414px) {
    margin-top: 50px;
    p {
      font-size: 12px;
      line-height: 22px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: white;
    bottom: -32px;
    right: -32px;
    position: absolute;
    border-radius: 10px;
    z-index: -1;
  }

  img {
    width: 560px;
  }

  @media (max-width: 1024px) {
    img {
      width: 300px;
    }
    ::after {
      bottom: -20px;
      right: -20px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Statistics = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 36px;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .number {
    color: var(--secondary);
    font-size: 56px;
    line-height: 64px;
  }
  .text {
    font-size: 18px;
    line-height: 28px;
    width: 95px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 10px;
    .number {
      font-size: 36px;
      line-height: 64px;
    }
    .text {
      font-size: 14px;
      line-height: 28px;
      width: 95px;
    }
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 414px) {
    gap: 10px;
    > div {
      gap: 0px;
    }
    .number {
      font-size: 36px;
      line-height: 48px;
    }
    .text {
      font-size: 12px;
      line-height: 28px;
      width: 95px;
    }
  }
`;
