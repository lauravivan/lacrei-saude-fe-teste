import { css } from "styled-components";
import badgeBase from "../base";

//   ${!isDesktop && height: ${({ contentType }) =>
//     contentType === "text" ? "26px" : "32px"};}

const base = (isDesktop: boolean, bgColor: string, color: string) => css`
  ${badgeBase(isDesktop)}
  background-color: ${bgColor};
  color: ${color};
`;

export default base;
