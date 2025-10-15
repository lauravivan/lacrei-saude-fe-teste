import { css } from "styled-components";
import base from "./base";

const primaryBadge = {
  "Secondary Badge/Success": (isDesktop: boolean) => css`
    ${base(isDesktop, "")}
  `,
  "Secondary Badge/Default": (isDesktop: boolean) => css`
    ${base(isDesktop, "")}
  `,
  "Secondary Badge/Error": (isDesktop: boolean) => css`
    ${base(isDesktop, "")}
  `,
  "Secondary Badge/Info": (isDesktop: boolean) => css`
    ${base(isDesktop, "")}
  `,
};

export default primaryBadge;
