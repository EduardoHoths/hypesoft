import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 150px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: 100%;

  p {
    font-size: 14px;
    line-height: 20px;
    display: block;
  }

  .heart {
    color: var(--secondary);
  }
  .hypesoft {
    color: var(--purple);
  }
`;
