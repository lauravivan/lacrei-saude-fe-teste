import { createGlobalStyle } from "styled-components";
import colors from "./tokens/colors";

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

    button, a {
      cursor: pointer;
    }

    li[tabindex]:focus-visible {
      box-shadow: inset 0 0 0 2px ${colors["emerald-10"]};
    }

    *:focus-visible {
      outline: 2px solid ${colors["emerald-10"]};
      outline-offset: 2px;
    }
`;

export default GlobalStyles;
