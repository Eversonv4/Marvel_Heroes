import { createGlobalStyle } from "styled-components";
import MarvelFont from "src/assets/fonts/MarvelRegular.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'marvel-regular';
        src: local('marvel-regular'), url(${MarvelFont}) format('truetype');
    }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      scroll-behavior: smooth;
   }

   ul {
      list-style: none;
      margin: 0;
      padding: 0;
   }

   a {
      text-decoration: none;
   }

   body {
      font-family: "Oswald";
   }

   cursor: pointer;
`;
