import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   @import url("https://fonts.googleapis.com/css2?family=Marvel:wght@400;700&family=Manrope:wght@200;300;400;500;700&family=Oswald:wght@200;300;400;500;700&display=swap");

   @font-face {
      font-family: "Manrope", "Oswald", "Marvel", sans-serif;
      font-display: swap;
   }

   @font-face {
    font-family: 'marvel_regular';
    src: url("src/assets/fonts/marvel_regular.ttf");
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
      font-family: "marvel_regular"
   }

   cursor: pointer;
`;
