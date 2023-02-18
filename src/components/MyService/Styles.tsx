import styled from "styled-components";

export const MyServiceStyled = styled.section`
  margin-top: 188px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 0 16px;

  h3 {
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    position: relative;
    margin-bottom: 50px;

    ::after {
      content: "";
      width: 80px;
      height: 3px;
      background-color: var(--secondary);
      position: absolute;

      border-radius: 3px;

      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .cards {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 414px) {
    .hover-on-mobile {
      background-color: white;
      border-radius: 6px;

      svg {
        fill: var(--secondary);
      }

      .discuss-now {
        transform: translateX(0);
        color: var(--secondary);
        pointer-events: all;

        span {
          margin-right: 10px;
          opacity: 1;
        }
      }
    }
  }
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  transition: 0.2s;
  color: var(--primary);

  overflow: hidden;

  max-width: 312px;
  height: 351px;

  border-radius: 6px;

  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    position: relative;
    margin-bottom: 43px;

    ::after {
      content: "";
      width: 64px;
      height: 3px;
      background-color: var(--secondary);
      opacity: 0.3;

      position: absolute;
      bottom: -16px;
      left: 0;
    }
  }

  .discuss-now {
    display: flex;
    align-items: center;

    font-weight: 600;
    line-height: 24px;
    letter-spacing: 2%;
    transform: translateX(-115px);
    transition: transform 0.3s;
    pointer-events: none;

    span {
      opacity: 0;

      /* transition:  opacity 0.1s 0.9s ; */
    }
  }

  :hover {
    background-color: white;
    svg {
      fill: var(--secondary);
    }

    .discuss-now {
      transform: translateX(0);
      color: var(--secondary);
      pointer-events: all;

      span {
        margin-right: 10px;
        opacity: 1;
      }
    }
  }
`;
