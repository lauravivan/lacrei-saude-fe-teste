import { css } from "styled-components";
import badgeBase from "../base";

//   height: ${({ contentType }) => (contentType === "text" ? "26px" : "32px")};

const base = (isDesktop: boolean, color: string) => css`
  ${badgeBase(isDesktop)}
  color: ${color};
  border-width: ${isDesktop
    ? "var(--border-radius-sm)"
    : "var(--border-radius-xs)"};
  border-color: ${color};
`;

export default base;
