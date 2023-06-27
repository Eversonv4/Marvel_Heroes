import styled, { keyframes } from "styled-components";
import BgHeader from "src/assets/images/bg-yellow-red.jpg";

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

export const HeaderContainer = styled.header`
  background-image: url(${BgHeader});
  background-position: center;
  background-size: cover;

  & > h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryLight};
    text-shadow: 4px 3px ${({ theme }) => theme.colors.black};

    font-size: 100px;
    background-color: rgba(34, 34, 34, 0.1);

    transition: 0.8s ease-in;

    animation: ${slideBottom} 0.8s ease-in;

    cursor: pointer;
  }

  @media (max-width: 720px) {
    & > h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 450px) {
    & > h1 {
      font-size: 2.8rem;
      text-shadow: 2px 2px ${({ theme }) => theme.colors.black};
    }
  }
`;
