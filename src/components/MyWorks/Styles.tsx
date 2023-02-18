import styled from "styled-components";

export const MyWorksStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 0 16px;

  margin-top: 180px;

  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    max-width: 1320px;
  }

  @media (max-width: 414px) {
    .hover-on-mobile .view-project {
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

export const Card = styled.div`
  width: 424px;
  height: 452px;

  color: var(--primary);
  border-radius: 6px;

  overflow: hidden;

  img {
    width: 100%;
    height: 332px;
    object-fit: cover;
    object-position: left;
  }

  > div {
    padding: 24px;
    background-color: white;
    margin-top: -5px;
  }

  h4 {
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 16px;
    line-height: 36px;
  }

  .view-project {
    display: flex;
    align-items: center;
    color: var(--secondary);

    svg {
      fill: var(--secondary);
    }

    font-weight: 600;
    line-height: 24px;
    letter-spacing: 2%;
    transform: translateX(-115px);
    transition: transform 0.3s;
    pointer-events: none;

    span {
      opacity: 0;
    }
  }

  :hover .view-project {
    transform: translateX(0);
    color: var(--secondary);
    pointer-events: all;

    span {
      margin-right: 10px;
      opacity: 1;
    }
  }

  @media (max-width: 414px) {
    width: 300px;
    height: 370px;

    img{
      height: 250px;
    }
  }
`;
