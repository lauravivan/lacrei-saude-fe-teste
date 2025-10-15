import { css } from "styled-components";
import typography from "@/styles/tokens/typography";

const text = {
  "Text-xl-high200": css`
    font-size: 18px;
    font-weight: ${typography.bold};
    line-height: 150%;
  `,
  "Text-xl": css`
    font-size: 18px;
    font-weight: ${typography.regular};
    line-height: 150%;
  `,
  "Text-base": css`
    font-size: 16px;
    font-weight: ${typography.regular};
    line-height: 150%;
  `,
  "Text-base-high200": css`
    font-size: 16px;
    font-weight: ${typography.bold};
    line-height: 150%;
  `,
  "Text-sm": css`
    font-size: 14px;
    font-weight: ${typography.regular};
    line-height: 150%;
  `,
  "Text-xs": css`
    font-size: 12px;
    font-weight: ${typography.regular};
    line-height: 150%;
  `,
  "Text-xs-high200": css`
    font-size: 12px;
    font-weight: ${typography.bold};
    line-height: 150%;
  `,
  "Text-sm-high200": css`
    font-size: 14px;
    font-weight: ${typography.semibold};
    line-height: 150%;
  `,
};

export default text;
