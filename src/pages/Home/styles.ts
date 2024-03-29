import styled, { keyframes } from "styled-components";
import BgBody from "src/assets/images/bg-square.jpg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

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

export const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondDark};
  color: ${({ theme }) => theme.colors.primaryLight};
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
    font-family: ${({ theme }) => theme.fonts.manrope};

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
    border: 2px solid ${({ theme }) => theme.colors.primaryLight};
    margin-left: 10px;

    background-color: ${({ theme }) => theme.colors.secondDark};
    color: ${({ theme }) => theme.colors.primaryLight};

    font-family: ${({ theme }) => theme.fonts.oswald};

    padding: 7px;

    transition: 0.4s ease-in-out;

    :hover {
      background-color: ${({ theme }) => theme.colors.btnHoverDark};
    }

    & > h2 {
      margin-left: 5px;
    }
  }

  @media (max-width: 720px) {
    & > input {
      max-width: 300px;
      font-size: 16px;
      padding: 6px;
    }

    & > button {
      padding: 3px;

      & > h2 {
        display: none;
      }
    }
  }

  @media (max-width: 360px) {
    & > input {
      max-width: 200px;
      font-size: 16px;
      padding: 6px;
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 1200px;
  height: calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  overflow: auto;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.primaryLight};

  animation: ${slideBottom} 0.8s ease-in;

  & > p {
    font-size: 18px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.manrope};
    text-align: center;
    margin-top: 30px;
  }
`;

export const TitleHighlight = styled.h2`
  text-align: center;
  font-weight: normal;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primaryLight};
  margin-bottom: 20px;

  @media (max-width: 500px) {
    font-size: 26px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 60px;

  & > button {
    display: inherit;
    justify-content: inherit;
    align-items: center;

    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primaryLight};
    margin-left: 20px;

    background-color: ${({ theme }) => theme.colors.secondDark};
    color: ${({ theme }) => theme.colors.primaryLight};

    font-family: ${({ theme }) => theme.fonts.oswald};

    padding: 7px;

    transition: 0.4s ease-in-out;

    :hover {
      background-color: ${({ theme }) => theme.colors.btnHoverDark};
    }

    & > h2 {
      margin-left: 5px;
    }
  }

  @media (max-width: 960px) {
    justify-content: center;

    & > button {
      :first-child {
        margin-left: 0;
      }
    }
  }
`;

export const ArrowLeft = styled(FiArrowLeft)`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 26px;
`;

export const ArrowRight = styled(FiArrowRight)`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 26px;
`;
