import { css } from "styled-components";
import typography from "@/styles/tokens/typography";
import base from "./base";

const headline = {
  "Headline-xl": (alignment: string) => css`
    ${base(alignment)}
    font-size: 48px;
    font-weight: ${typography.bold};
    line-height: 120%;
  `,
  "Headline-lg": (alignment: string) => css`
    ${base(alignment)}
    font-size: 40px;
    font-weight: ${typography.bold};
    line-height: 120%;
  `,
  "Headline-base": (alignment: string) => css`
    ${base(alignment)}
    font-size: 32px;
    font-weight: ${typography.bold};
    line-height: 120%;
  `,
  "Headline-sm": (alignment: string) => css`
    ${base(alignment)}
    font-size: 24px;
    font-weight: ${typography.regular};
    line-height: 150%;
  `,
  "Headline-sm-high200": (alignment: string) => css`
    ${base(alignment)}
    font-size: 24px;
    font-weight: ${typography.bold};
    line-height: 150%;
  `,
};

export default headline;
