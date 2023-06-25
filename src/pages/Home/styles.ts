import styled from "styled-components";

export const Header = styled.header`
  background-image: url("src/assets/images/bg-yellow-red.jpg");
  background-position: left;
  background-size: cover;

  & > h1 {
    padding: 30px 0;
    text-align: center;
    color: #ffffff;
    text-shadow: 2px 2px #000000;

    font-size: 34px;
    line-height: 38px;
  }
`;

export const SearchContainer = styled.div`
  background-color: #222222;
  color: #ffffff;
`;

export const SearchContainerLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px 0;

  & > input {
    border-radius: 6px;
    padding: 10px;
    outline: none;
    font-size: 22px;
    line-height: 26px;
    font-family: "Manrope";

    &::placeholder {
      font-style: italic;
    }
  }

  & > button {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;

    border-radius: 4px;
    border: 2px solid #ffffff;
    margin-left: 10px;

    background-color: #222222;
    color: #ffffff;

    font-family: "Oswald";

    padding: 7px;

    & > h2 {
      margin-left: 5px;
    }
  }
`;
