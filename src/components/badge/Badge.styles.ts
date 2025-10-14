import text from "@/styles/mixins/text";
import { css } from "styled-components";

const Badge = css<{ isDesktop: boolean }>`
  display: flex;
  column-gap: ${({ isDesktop }) =>
    isDesktop ? "var(--spacing-inline-xs)" : "var(--spacing-squish-xxs)"};
  align-items: center;
  height: 36px;
  border-radius: ${({ isDesktop }) =>
    isDesktop ? "var(--border-radius-sm)" : "var(--border-radius-xs)"};
  padding: ${({ isDesktop }) =>
    isDesktop ? "var(--spacing-squish-s)" : "var(--spacing-squish-xs)"};
  ${({ isDesktop }) => (isDesktop ? text["Text-sm"] : text["Text-xs"])}

  svg {
    width: 24px;
    height: fit-content;
    border-radius: var(--border-radius-sm);
  }
`;

export default Badge;
