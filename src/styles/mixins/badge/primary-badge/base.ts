import { css } from "styled-components";
import badgeBase from "../base";

//   ${!isDesktop && height: ${({ contentType }) =>
//     contentType === "text" ? "26px" : "32px"};}

const base = (isDesktop: boolean, color: string) => css`
  ${badgeBase(isDesktop)}
  background-color: ${color};
  color: ${color};
`;

export default base;
