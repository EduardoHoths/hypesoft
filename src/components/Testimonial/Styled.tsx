import styled from "styled-components";

export const TestimonialStyled = styled.section`
  margin-top: 220px;
  padding: 0 16px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 44.2px;

    height: 411px;

    @media (max-width: 768px) {
      height: auto;
      flex-direction: column;
    }
  }
`;

export const TestimonialList = styled.ul`
  list-style: none;

  li {
    display: flex;
    gap: 16px;
    align-items: center;
    background-color: white;
    padding: 24px;
    border-radius: 4px;
    color: var(--primary);
    border: 1px solid transparent;

    width: 312px;
    height: 100px;

    position: relative;

    transition: 0.2s;

    cursor: pointer;

    & + li {
      margin-top: 3.67px;
    }

    :hover {
      border: 1px solid var(--secondary);
    }

    &.active::before {
      position: absolute;
      top: 30%;
      right: -45.2px;
      display: inline-block;
      content: "";
      border: 20px solid transparent;
      border-bottom-color: white;

      rotate: -90deg;
    }
  }

  div:first-child {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: var(--gray-500);
  }

  div:last-child {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
  }

  .position {
    color: var(--gray-500);
  }

  .company {
    color: var(--secondary);
  }

  @media (max-width: 768px) {
    display: flex;
    gap: 6px;

    li {
      flex-direction: column;
      text-align: center;
      height: 100px;
      width: 130px;
      padding: 10px 0;
      gap: 0;

      & + li {
        margin-top: 0;
      }

      &.active::before {
        position: absolute;
        top: 106%;
        right: 35%;
        display: inline-block;
        content: "";
        border: 20px solid transparent;
        border-bottom-color: white;

        rotate: 0deg;
      }
    }

    strong {
      font-size: 14px;
    }
    .position {
      display: none;
    }
  }

  @media (max-width: 570px) {
    display: flex;
    gap: 6px;

    li {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      height: 100px;
      width: 80px;
      padding: 10px 0;

      & + li {
        margin-top: 0;
      }

      &.active::before {
        position: absolute;
        top: 106%;
        right: 26%;
        display: inline-block;
        content: "";
        border: 20px solid transparent;
        border-bottom-color: white;

        rotate: 0deg;
      }
    }

    div:first-child {
      display: none;
    }

    strong {
      font-size: 14px;
      line-height: 1;
      font-weight: bold;
    }
    .position {
      display: none;
    }
  }

  @media (max-width: 320px) {
    li{
      width: 70px;
      &.active::before {
        position: absolute;
        top: 106%;
        right: 20%;
        display: inline-block;
        content: "";
        border: 20px solid transparent;
        border-bottom-color: white;

        rotate: 0deg;
      }
    }
    strong{
      font-size: 12px;
    }
  }
`;

export const TestimonialArea = styled.div`
  background: url(/Quote.png) no-repeat top 24px right 24px;
  background-color: white;

  width: 100%;
  max-width: 964px;
  height: 411px;
  padding: 50px;
  border-radius: 4px;

  color: var(--primary);

  header {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: 18px;
      line-height: 28px;
    }
  }

  p {
    font-size: 32px;
    line-height: 51.2px;
    margin-top: 26px;
  }

  @media (max-width: 1200px) {
    p {
      font-size: 24px;
      line-height: 38px;
    }
  }

  @media (max-width: 900px) {
    padding: 25px;
    background-size: 40px;

    p {
      font-size: 24px;
      line-height: 32px;
    }
  }
  @media (max-width: 768px) {
    height: fit-content;
  }
`;
