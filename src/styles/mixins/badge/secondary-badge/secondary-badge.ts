import { css } from "styled-components";
import base from "./base";
import colors from "@/styles/tokens/colors";

const primaryBadge = {
  "Secondary Badge/Success": (isDesktop: boolean) => css`
    ${base(isDesktop, colors["emerald-80"], colors["emerald-80"])}
  `,
  "Secondary Badge/Default": (isDesktop: boolean) => css`
    ${base(isDesktop, colors["gray-70"], colors["gray-80"])}
  `,
  "Secondary Badge/Error": (isDesktop: boolean) => css`
    ${base(isDesktop, colors["red-60"], colors["red-60"])}
  `,
  "Secondary Badge/Info": (isDesktop: boolean) => css`
    ${base(isDesktop, colors["blue-60"], colors["blue-60"])}
  `,
};

export default primaryBadge;
