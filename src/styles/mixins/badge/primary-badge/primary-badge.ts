import { css } from "styled-components";
import base from "./base";

const primaryBadge = {
  "Primary Badge/Success": (isDesktop: boolean) => css`
    ${base(isDesktop, "")}
  `,
  "Primary Badge/Default": (isDesktop: boolean) => css`
    ${base(isDesktop, "")}
  `,
  "Primary Badge/Error": (isDesktop: boolean) => css`
    ${base(isDesktop, "")}
  `,
  "Primary Badge/Info": (isDesktop: boolean) => css`
    ${base(isDesktop, "")}
  `,
};

export default primaryBadge;
