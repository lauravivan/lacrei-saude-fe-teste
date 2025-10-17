import effects from "@/styles/tokens/effects";
import { css } from "styled-components";
import text from "../../text";
import spacing from "@/styles/tokens/spacing";
import typography from "@/styles/tokens/typography";

const base = (
  bgColor: string,
  borderWidth: string,
  textStyle: (typeof text)[keyof typeof text],
  color: string,
  columnGap: string,
  iconColor: string
) => css`
  height: 48px;
  width: 100%;
  background-color: ${bgColor};
  border-radius: ${effects["border-radius-sm"]};
  border-width: ${borderWidth};
  text-align: center;
  ${textStyle};
  color: ${color};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  column-gap: ${columnGap};
  padding: 0 ${spacing["spacing-inline-xxm"]};
  font-family: ${typography["family-nunito"]};

  svg {
    fill: ${iconColor};
    width: 24px;
    height: 24px;
  }
`;

export default base;
