import styled, { keyframes } from "styled-components";
import BgHeader from "src/assets/images/bg-yellow-red.jpg";
import BgBody from "src/assets/images/bg-square.jpg";

const slideBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const openWide = keyframes`
 from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 1200px;
  }
`;

export const Header = styled.header`
  background-image: url(${BgHeader});
  background-position: center;
  background-size: cover;

  & > h1 {
    text-align: center;
    color: #ffffff;
    text-shadow: 4px 3px #000000;

    font-size: 100px;
    background-color: rgba(34, 34, 34, 0.1);

    animation: ${slideBottom} 0.8s ease-in;
  }
`;

export const SearchContainer = styled.div`
  background-color: #222222;
  color: #ffffff;
`;

export const SearchContainerLayout = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px 0;

  animation: ${openWide} 0.8s ease-in;

  & > input {
    border-radius: 6px;
    padding: 10px;
    outline: none;
    font-size: 22px;
    line-height: 26px;
    font-family: "Manrope";

    width: 100%;
    max-width: 400px;

    &::placeholder {
      font-style: italic;
    }
  }

  & > button {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;

    border-radius: 4px;
    border: 2px solid #ffffff;
    margin-left: 10px;

    background-color: #222222;
    color: #ffffff;

    font-family: "Oswald";

    padding: 7px;

    transition: 0.4s ease-in-out;

    :hover {
      background-color: #979797;
    }

    & > h2 {
      margin-left: 5px;
    }
  }
`;

export const CardsContainer = styled.main`
  background-image: url(${BgBody});
  background-position: left;
  background-size: cover;

  padding: 15px 0;
`;

export const CardsContainerLayout = styled.div`
  background-color: rgba(34, 34, 34, 0.7);
  border-radius: 6px;

  padding: 15px;

  max-width: 1200px;
  height: calc(100vh - 200px);
  max-height: calc(100vh - 200px);
  overflow: auto;
  margin: 0 auto;

  color: #ffffff;

  animation: ${slideBottom} 0.8s ease-in;
`;

export const FooterContainer = styled.footer`
  background-color: #222222;
  color: #ffffff;

  text-align: center;

  padding: 15px 0;
`;

export const TitleHighlight = styled.h2`
  text-align: center;
  font-weight: normal;
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 20px;
`;
