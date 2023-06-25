import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

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
