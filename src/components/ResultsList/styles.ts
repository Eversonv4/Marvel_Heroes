import styled, { keyframes } from "styled-components";

const growdown = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ResultsListContainer = styled.ul`
  position: absolute;
  left: calc(50% - 258px);
  top: 80px;

  max-width: 400px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.primaryLight};

  animation: ${growdown} 0.3s ease-out;

  & > p {
    color: ${({ theme }) => theme.colors.thirdDarkLight};
    font-family: "Manrope";
    font-weight: 400;
    font-size: 18px;
    padding: 5px 15px;
    font-style: italic;
  }
`;

export const ResultItem = styled.li`
  color: ${({ theme }) => theme.colors.secondDark};
  font-family: "Manrope";
  font-weight: 600;
  font-size: 18px;

  background-color: ${({ theme }) => theme.colors.primaryLight};

  padding: 5px 15px;

  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  :last-child {
    border-bottom: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.borderBgLight};
  }
`;
