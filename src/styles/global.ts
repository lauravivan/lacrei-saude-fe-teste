import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    li[tabindex]:focus-visible {
      box-shadow: inset 0 0 0 2px var(--emerald-10);
    }

    *:focus-visible {
      outline: 2px solid var(--emerald-10);
      outline-offset: 2px;
    }

    .skiplink {
      display: flex;
      color: var(--gray-10);
      background: var(--emerald-60);
      font-weight: 700;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: absolute;
      top: -100px;
      left: 0px;
      z-index: 100;
      width: 100%;
      height: 48px;
      box-sizing: border-box;
      margin: 0.25rem;
      transition: top 0.2s;
    }

    .skiplink:focus {
      top: 0;
    }
`;

export default GlobalStyles;
