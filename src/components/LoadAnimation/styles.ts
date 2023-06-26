import styled, { keyframes } from "styled-components";

const load = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.span`
  display: block;
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;
  margin: 0 auto;

  animation: ${load} 1s linear infinite;
`;
