import styled, { keyframes } from "styled-components";
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

export const HeaderDivisorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondDark};
  color: ${({ theme }) => theme.colors.primaryLight};

  height: 100px;
`;

export const DetailsContainer = styled.main`
  background-image: url(${BgBody});
  background-position: left;
  background-size: cover;

  padding: 15px 0;
`;

export const DetailsContainerLayout = styled.div`
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: rgba(34, 34, 34, 0.7);

  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  border-radius: 6px;
  padding: 15px;
  margin: 0 auto;
  overflow: auto;

  max-width: 1200px;
  height: calc(100vh - 200px);
  max-height: calc(100vh - 200px);

  animation: ${slideBottom} 0.8s ease-in;

  & > figure {
    max-width: 400px;
    max-height: 400px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.primaryLight};
      border-radius: 6px;

      transition: 0.4s ease-in;

      :hover {
        box-shadow: 0px 0px 15px ${({ theme }) => theme.colors.primaryLight};
      }
    }
  }
`;

export const DescriptionContainer = styled.section`
  max-height: 400px;
  max-width: 700px;
  height: 100%;

  background-color: rgba(34, 34, 34, 0.4);
  padding: 20px;
  border-radius: 6px;
  margin-left: auto;

  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.manrope};
  & > h2 {
    font-size: 32px;
  }

  & > p {
    text-align: justify;
    margin-top: 30px;
  }

  & > a {
    margin-top: auto;
  }

  & > a > button {
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primaryLight};

    background-color: ${({ theme }) => theme.colors.secondDark};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-family: ${({ theme }) => theme.fonts.manrope};
    font-size: 18px;

    padding: 7px 10px;

    transition: 0.4s ease-in-out;

    :hover {
      background-color: ${({ theme }) => theme.colors.btnHoverDark + "66"};
    }
  }
`;

export const ComicsContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 18px;

  margin-top: -50px;
`;

export const ErrorMessage = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  margin: 30px auto 0;
`;
