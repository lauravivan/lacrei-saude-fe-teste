import colors from "@/styles/tokens/colors";
import spacing from "@/styles/tokens/spacing";
import { css } from "styled-components";

const base = (alignment: string) => css`
  color: var(${colors["emerald-60"]});
  margin: 0;
  text-align: ${alignment};
  border-bottom: 1px solid #000;
  padding-bottom: ${spacing["spacing-inset-sm"]};
`

export default base;