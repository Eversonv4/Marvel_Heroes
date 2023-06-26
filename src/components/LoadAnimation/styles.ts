import { ILoadAnimationProps } from "src/@types/interfaces";
import styled, { keyframes } from "styled-components";

const load = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.span<ILoadAnimationProps>`
  display: block;
  width: ${({ size }) => (size ? `${size}px` : "40px")};
  height: ${({ size }) => (size ? `${size}px` : "40px")};
  border: 2px solid transparent;
  border-bottom-color: ${({ theme, loaderColor }) =>
    loaderColor ? loaderColor : theme.colors.primaryLight};
  border-radius: 50%;
  margin: 5px auto;

  animation: ${load} 1s linear infinite;
`;
