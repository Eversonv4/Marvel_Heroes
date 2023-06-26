import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   *::-webkit-scrollbar {
      width: 5px;
   }

   *::-webkit-scrollbar-track {
      background-color: #dfdfdf;
      border-radius: 50px;
   }

   *::-webkit-scrollbar-thumb {
      background-color: #222222;
      border-radius: 50px;
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
      color: inherit;
      background-color: inherit;
      width: fit-content;
   }

   body {
      font-family: "Oswald";
   }

   button {
      cursor: pointer;
   }

   cursor: pointer;
`;
