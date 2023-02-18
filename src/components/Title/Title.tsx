import styled from "styled-components";

const TitleStyled = styled.h3`
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  position: relative;
  margin-bottom: 50px;
  text-align: center;
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
`;

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <TitleStyled>{title}</TitleStyled>;
}
