import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   :root {
      --gradient-subtle: linear-gradient(#f5fffb, var(--gray-10));
      --family-nunito: "Nunito", sans-serif;

      /** emerald */
      --emerald-10: #2D2D2D;
      --emerald-20: #B2DFD0;
      --emerald-30: #80CAB1;
      --emerald-40: #4FB494;
      --emerald-50: #29A480;
      --emerald-60: #018762;
      --emerald-70: #007756;
      --emerald-80: #014C37;

      /** red */
      --red-10: #FBEEEA;
      --red-20: #FCE9E9;
      --red-30: #F5BCBC;
      --red-40: #EE9090;
      --red-50: #963D1D;
      --red-60: #BC1C1C;
      --red-70: #9B1717;
      --red-80: #6F1111;

      /**green */
      --green-10: #EBF9F0;

      /** blue */
      --blue-10: #EBF2F9;

      /** gray */
      --gray-10: #ffffff;
      --gray-20: #F0F0F0;
      --gray-30: #CFCFCF;

      /** space primitives */
      --spacing-4-xs: 0.125rem;
      --spacing-3-xs: 0.25rem;
      --spacing-2-xs: 0.5rem;
      --spacing-xs: 0.75rem;
      --spacing-s: 1rem;
      --spacing-m: 1.5rem;
      --spacing-l: 2rem;
      --spacing-xl: 2.5rem;
      --spacing-2-xl: 3rem;
      --spacing-3-xl: 3.5rem;
      --spacing-layout-l: 4rem;
      --spacing-layout-xl: 6rem;
      --spacing-layout-2-xl: 8rem;

      /** space squish primitives */
      --spacing-squish-xxs: 2px 4px;
      --spacing-squish-xs: 4px 8px;
      --spacing-squish-s: 8px 16px;
      --spacing-squish-m: 16px 32px;
      --spacing-squish-l: 24px 48px;

      /** space inline primitives */
      --spacing-inline-xxs: 4px;
      --spacing-inline-xs: 8px;
      --spacing-inline-s: 12px;
      --spacing-inline-m: 16px;
      --spacing-inline-xm: 24px;
      --spacing-inline-xxm: 32px;
      --spacing-inline-l: 48px;
      --spacing-inline-xl: 64px;

      /** space inset primitives */
      --spacing-inset-xxs: 2px;
      --spacing-inset-xs: 4px;
      --spacing-inset-s: 8px;
      --spacing-inset-sm: 12px;
      --spacing-inset-m: 16px;
      --spacing-inset-xm: 24px;
      --spacing-inset-xxm: 32px;
      --spacing-inset-l: 48px;

      /** border-radius */
      --border-radius-xs: 4px;
      --border-radius-sm: 8px;
      --border-radius-md: 16px;
      --border-radius-lg: 24px;
      --border-radius-none: none;
      --border-radius-pill: 60px;
      --border-radius-circle: 50%;

      /** border-width */
      --border-width-none: 0px;
      --border-width-sm: 1px;
      --border-width-md: 2px;
      --border-width-lg: 4px;
      --border-width-xl: 8px;
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
`;

export default GlobalStyles;
