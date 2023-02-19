import styled from "styled-components";

export const ContactMeStyled = styled.section`
  margin-top: 227px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  padding: 0 16px;

  > div {
    background-color: white;
    color: var(--primary);
    border-radius: 8px;
    padding: 48px;
    height: 536px;

    h4 {
      font-size: 32px;
      font-weight: 400;
      line-height: 40px;
      margin-bottom: 24px;
    }
  }

  @media (max-width: 900px) {
    > div {
      padding: 24px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    > div {
      width: 100%;
      max-width: 400px;
      height: fit-content;
    }
  }
  @media (max-width: 375px) {
    > div h4 {
      font-size: 22px;
    }
  }
`;

export const ContactForm = styled.div`
  width: 760px;

  input,
  textarea {
    border: 1px solid var(--gray-100);
    border-radius: 4px;
    padding: 14px 20px;
    width: 100%;
    transition: 0.2s;

    :focus {
      outline: 2px solid var(--purple);
      border: 1px solid transparent;
    }

    ::placeholder {
      color: var(--gray-500);
    }
  }

  textarea {
    margin-top: 16px;
    resize: none;
    min-height: 152px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;

    margin-bottom: 16px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 32px;
  }

  @media (max-width: 375px) {
    div {
      flex-direction: column;
    }
  }
`;

export const Contacts = styled.div`
  height: 536px;
  width: 536px;
  position: relative;

  .dots {
    position: absolute;

    top: -30px;
    right: -78px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
      fill: var(--secondary);
    }

    div {
      background: #684fff1a;
      padding: 24px;

      width: 80px;
      height: 80px;

      border-radius: 50%;
    }

    span {
      font-size: 18px;
    }

    & + div {
      margin-top: 25px;
    }
  }

  footer {
    margin-top: 25px;
    display: flex;
    align-items: center;

    gap: 12px;
    flex-wrap: wrap;

    a {
      display: inline-block;
      width: 60px;
      height: 60px;

      padding: 20px;

      border: 1px solid var(--gray-100);
      border-radius: 50%;
      transition: 0.2s;

      svg {
        transition: 0.2s;
      }

      & + a {
        margin-left: 12px;
      }

      :hover {
        background-color: var(--purple);
        svg {
          fill: white;
        }
      }
    }
  }

  @media (max-width: 1500px) {
    .dots {
      right: 0;
    }
  }

  @media (max-width: 375px) {
    > div {
      gap: 10px;

      div {
        padding: 14px;
        width: 60px;
        height: 60px;
      }

      span {
        font-size: 14px;
      }
    }

    footer {
      a + a {
        margin: 0;
      }
      justify-content: center;
    }
  }
`;
