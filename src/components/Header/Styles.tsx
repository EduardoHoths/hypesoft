import styled from "styled-components";

export const HeaderStyled = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  height: 100vh;

  position: relative;

  @media (min-height: 969px) {
    height: 969px;
  }
  @media (max-height: 680px){
    height: 705px;
  }

  @media (max-width: 414px) {
    height: auto;
  }
`;

interface NavigationProps {
  menuIsOpen?: boolean;
}

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;

  width: 100%;
  max-width: 1300px;
  height: 96px;
  margin: 0 auto;

  padding: 0 16px;

  a {
    display: inline-block;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--secondary);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    :hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    &.active::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  @media (max-width: 1280px) {
    max-width: 1100px;
  }

  @media (max-width: 414px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;

    transform: ${({ menuIsOpen }: NavigationProps) =>
      menuIsOpen ? "translateX(0)" : "translateX(100%)"};
    transition: 0.2s;

    justify-content: flex-start;
    align-items: flex-end;
    height: 100vh;
    width: 150px;
    background: #0d0d0d;
    padding-top: 50px;
    z-index: 10;
  }
`;

export const MenuMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  position: static;
  top: 0;
  right: 0;

  width: 100%;

  .fade {
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    &.active {
      display: block;
    }
  }
  .handle-menu{
    display: none;
  }

  @media (max-width: 414px){
    .handle-menu{
      display: unset;
    }
    position: fixed;
    padding: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;

  max-width: 1920px;

  @media (max-width: 414px) {
    margin-top: 50px;
  }
`;

export const ProfileContainer = styled.div`
  position: absolute;
  left: 390px;
  top: 228px;

  h1 {
    font-weight: 400;
    font-size: 80px;
    line-height: 98px;

    span {
      color: var(--purple);
      position: relative;

      ::after {
        content: "";
        width: 594px;
        height: 36px;
        left: 10px;
        top: 54%;
        background-color: var(--purple);
        position: absolute;
        opacity: 0.15;
      }
    }
  }

  p {
    color: var(--gray-500);
    font-size: 20px;
    line-height: 32px;
    max-width: 673px;
    margin-top: 32px;
  }

  @media (max-width: 1440px) {
    left: 200px;
    top: 150px;

    h1 {
      font-size: 60px;
      line-height: 78px;

      span::after {
        width: 444px;
      }
    }
  }

  @media (max-width: 1024px) {
    left: 50px;
    top: 150px;

    h1 {
      font-size: 40px;
      line-height: 58px;

      span::after {
        width: 294px;
      }
    }
    p {
      max-width: 450px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;

      span::after {
        height: 20px;
        width: 217px;
      }
    }

    p {
      font-size: 14px;
      line-height: 26px;
      max-width: 300px;
    }
  }

  @media (max-width: 414px) {
    position: static;
    margin: 0 auto;
    padding: 0 16px;

    h1 {
      font-size: 24px;
      line-height: 36px;
      span::after {
        height: 10px;
        width: 200px;
      }
    }

    p {
      font-size: 12px;
      line-height: 20px;
      margin-top: 10px;
    }
  }
`;

export const MoreAbout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
`;

export const Social = styled.div`
  margin-top: 202px;

  span {
    display: block;
    margin-bottom: 12px;
    line-height: 24px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  a {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3px;
    background-color: white;
    transition: all 0.2s;
    color: var(--primary);

    :hover {
      color: white;
      background-color: var(--purple);
    }
  }

  @media (max-width: 1440px) and (max-height: 800px) {
    margin-top: 100px;
  }

  @media (max-height: 659px) {
    margin-top: 30px;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 40px;
      line-height: 58px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const ImageContainer = styled.div`
  ::after {
    content: "";
    width: 724px;
    height: 100vh;
    background-color: var(--purple);
    position: absolute;
    top: 0;
    right: 0;
    z-index: -2;
    opacity: 0.6;
  }

  img {
    width: 870px;
    height: calc(100vh - 96px);
    position: absolute;
    right: 183px;
    filter: brightness(0.35);
    z-index: -1;
  }

  .dots {
    width: 152px;
    height: 68px;

    top: 417px;
  }

  @media (min-height: 969px) {
    ::after {
      height: 969px;
    }

    img {
      height: calc(969px - 96px);
      right: 100px;
    }
  }

  @media (max-width: 1440px) {
    ::after {
      width: 500px;
    }

    img {
      max-width: 600px;
      right: 100px;
    }
  }

  @media (max-width: 1024px) {
    ::after {
      width: 450px;
    }

    img {
      max-width: 450px;
      right: 50px;
    }
  }

  @media (max-width: 768px) {
    ::after {
      width: 350px;
      /* height: calc(100vh - 96px); */
    }

    img {
      max-width: 350px;
      /* height: calc(100vh - 96px); */
      right: 50px;
    }

    .dots {
      top: 250px;
    }
  }

  @media (max-width: 414px) {
    display: none;
  }
`;