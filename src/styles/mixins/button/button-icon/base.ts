import effects from "@/styles/tokens/effects";
import spacing from "@/styles/tokens/spacing";
import { css } from "styled-components";

const base = (bgColor: string, iconColor: string) => css`
  width: 48px;
  height: 48px;
  background-color: ${bgColor};
  border-radius: ${effects["border-radius-sm"]};
  padding: ${spacing["spacing-inset-sm"]} svg {
    fill: ${iconColor};
    width: 24px;
  }
`;

export default base;
