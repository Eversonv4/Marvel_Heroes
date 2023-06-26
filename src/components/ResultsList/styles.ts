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
  z-index: 3;

  max-width: 400px;
  width: 100%;
  max-height: 487px;
  border-radius: 6px;
  overflow: auto;

  background-color: ${({ theme }) => theme.colors.primaryLight};

  animation: ${growdown} 0.3s ease-out;

  & > p {
    color: ${({ theme }) => theme.colors.thirdDarkLight};
    font-family: ${({ theme }) => theme.fonts.manrope};
    font-weight: 400;
    font-size: 18px;
    padding: 5px 15px;
    font-style: italic;
  }
`;

export const ResultItem = styled.li`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 5px 15px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  :last-child {
    border-bottom: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.borderBgLight};
  }

  & > h3 {
    color: ${({ theme }) => theme.colors.secondDark};
    font-family: ${({ theme }) => theme.fonts.manrope};
    font-weight: 600;
    font-size: 18px;
  }

  & > picture {
    max-width: 60px;
    width: 100%;
    height: 50px;
    border-radius: 6px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
