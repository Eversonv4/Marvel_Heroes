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

  background-color: #ffffff;

  animation: ${growdown} 0.3s ease-out;

  & > p {
    color: #777777;
    font-family: "Manrope";
    font-weight: 400;
    font-size: 18px;
    padding: 5px 15px;
    font-style: italic;
  }
`;

export const ResultItem = styled.li`
  color: #222222;
  font-family: "Manrope";
  font-weight: 600;
  font-size: 18px;

  background-color: #ffffff;

  padding: 5px 15px;

  cursor: pointer;

  border-bottom: 1px solid #ccc;
  :last-child {
    border-bottom: none;
  }

  :hover {
    background-color: #f5f5f5;
  }
`;
