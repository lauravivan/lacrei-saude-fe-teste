import { css } from "styled-components";
import text from "../text";
import spacing from "@/styles/tokens/spacing";
import effects from "@/styles/tokens/effects";

const base = (isDesktop: boolean) => css`
  display: flex;
  column-gap: ${isDesktop
    ? spacing["spacing-inline-xs"]
    : spacing["spacing-squish-xxs"]};
  align-items: center;
  height: 36px;
  border-radius: ${isDesktop
    ? effects["border-radius-sm"]
    : effects["border-radius-xs"]};
  padding: ${isDesktop
    ? spacing["spacing-squish-s"]
    : spacing["spacing-squish-xs"]};
  ${isDesktop ? text["Text-sm"] : text["Text-xs"]}

  svg {
    width: 24px;
    height: fit-content;
    border-radius: ${effects["border-radius-sm"]};
  }
`;

export default base;
