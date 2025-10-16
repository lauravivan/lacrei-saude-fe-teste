import { css } from "styled-components";
import badgeBase from "../base";
import effects from "@/styles/tokens/effects";

//   height: ${({ contentType }) => (contentType === "text" ? "26px" : "32px")};

const base = (isDesktop: boolean, borderColor: string, color: string) => css`
  ${badgeBase(isDesktop)}
  color: ${color};
  border-width: ${isDesktop ? effects["border-radius-sm"] : effects["border-radius-xs"]};
  border-color: ${borderColor};
`;

export default base;
