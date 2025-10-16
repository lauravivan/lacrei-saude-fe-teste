import { css } from "styled-components";
import base from "./base";
import colors from "@/styles/tokens/colors";

const primaryBadge = {
  "Primary Badge/Success": (isDesktop: boolean) => css`
    ${base(isDesktop, colors["green-10"], colors["emerald-80"])}
  `,
  "Primary Badge/Default": (isDesktop: boolean) => css`
    ${base(isDesktop, colors["gray-20"], colors["gray-80"])}
  `,
  "Primary Badge/Error": (isDesktop: boolean) => css`
    ${base(isDesktop, colors["red-20"], colors["red-60"])}
  `,
  "Primary Badge/Info": (isDesktop: boolean) => css`
    ${base(isDesktop, colors["blue-10"], colors["blue-60"])}
  `,
};

export default primaryBadge;
