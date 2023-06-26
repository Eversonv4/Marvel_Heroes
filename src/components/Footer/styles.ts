import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondDark};
  color: ${({ theme }) => theme.colors.primaryLight};

  text-align: center;

  padding: 15px 0;
`;
