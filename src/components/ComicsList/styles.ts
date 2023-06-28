import styled from "styled-components";

export const ContainerList = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 30px;

  width: 100%;

  @media (max-width: 1166px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ComicsItem = styled.li`
  & > figure {
    max-width: 200px;
    max-height: 255px;

    & > img {
      width: 100%;
      height: 100%;
      max-height: 255px;
      object-fit: cover;
      min-width: 167px;
      border-radius: 20px 0 20px;

      border: 3px solid ${({ theme }) => theme.colors.black};

      transition: 0.3s ease-in;

      :hover {
        border-color: ${({ theme }) => theme.colors.borderLight};
        box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.primaryLight};
      }
    }
  }
`;

export const ErrorMessage = styled.h4`
  font-weight: 400;
  margin: 0 auto;
`;
