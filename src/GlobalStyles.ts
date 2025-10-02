import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   :root {
      --gray-10: #ffffff;
      --gradient-subtle: linear-gradient(#f5fffb, var(--gray-10));
      --family-nunito: "Nunito", sans-serif;

      --spacing-m: 1.5rem;
    }

    html, body {
      margin: 0;
      width: 100vw;
      max-width: 100vw;
      min-height: 100vh;
      overflow-x: hidden;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    }
`;

export default GlobalStyles;
