import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 360px) {
    padding: 5px 0;
  }
`;
