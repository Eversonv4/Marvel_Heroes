import styled from "styled-components";

export const CardContainer = styled.li`
  width: 209px;
  height: 263px;

  cursor: pointer;
  overflow: hidden;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.secondDark + "66"};
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.primaryLight};

  transition: 0.3s ease-in;

  :hover {
    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.primaryLight};
    transform: scale(1.1);
  }

  position: relative;

  & > img {
    width: 100%;
    height: 209px;

    transition: 0.6s ease-in-out;
  }

  & > h3 {
    font-size: 16px;
    padding: 16px 5px 6px;
    text-align: center;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
