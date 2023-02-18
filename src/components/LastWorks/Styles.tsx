import styled from "styled-components";

export const LastWorksStyled = styled.section`
  margin-top: 200px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  align-items: center;

  gap: 72px;

  strong{
    font-size: 32px;
    line-height: 40px;
    text-align: center;

    span{
      color: var(--secondary);
      position: relative;

      ::after{
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        bottom: 2px ;
        right: 1px;
        background-color: var(--purple);
        opacity: 0.15;
      }
    }
  }

  > div {
    width: 168px;
    height: 120px;

    padding: 0 24px;

    background-color: white;
    border-radius: 8px;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
`;
