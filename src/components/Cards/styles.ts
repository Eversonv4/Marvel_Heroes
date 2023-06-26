import styled from "styled-components";

export const CardContainer = styled.li`
  max-width: 209px;
  height: 263px;

  cursor: pointer;
  overflow: hidden;

  border-radius: 6px;

  background-color: #22222266;
  box-shadow: 0px 0px 6px #ffffff;

  :hover {
    & > img {
      transform: scale(1.125);
    }
  }

  position: relative;

  & > img {
    width: 100%;
    height: 209px;

    transition: 0.6s ease-in-out;
  }

  & > h3 {
    padding: 16px 5px 6px;
    text-align: center;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
