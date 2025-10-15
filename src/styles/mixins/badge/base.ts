import { css } from "styled-components";
import text from "../text";

const base = (isDesktop: boolean) => css`
  display: flex;
  column-gap: ${isDesktop
    ? "var(--spacing-inline-xs)"
    : "var(--spacing-squish-xxs)"};
  align-items: center;
  height: 36px;
  border-radius: ${isDesktop
    ? "var(--border-radius-sm)"
    : "var(--border-radius-xs)"};
  padding: ${isDesktop
    ? "var(--spacing-squish-s)"
    : "var(--spacing-squish-xs)"};
  ${isDesktop ? text["Text-sm"] : text["Text-xs"]}

  svg {
    width: 24px;
    height: fit-content;
    border-radius: var(--border-radius-sm);
  }
`;

export default base;
