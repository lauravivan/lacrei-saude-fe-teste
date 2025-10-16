import colors from "@/styles/tokens/colors";
import spacing from "@/styles/tokens/spacing";
import { css } from "styled-components";

const base = (isDesktop: boolean) => css`
  background-image: ${colors["gradient-subtle"]};
  display: flex;
  align-items: center;
  padding: ${isDesktop
    ? `${spacing["spacing-m"]} ${spacing["spacing-layout-xl"]}`
    : spacing["spacing-m"]};
  justify-content: space-between;
`;

export default base;
