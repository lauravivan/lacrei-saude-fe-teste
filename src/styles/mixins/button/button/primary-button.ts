import { css } from "styled-components";
import buttonBase from "./base";
import colors from "@/styles/tokens/colors";
import effects from "@/styles/tokens/effects";
import text from "@/styles/mixins/text";
import spacing from "@/styles/tokens/spacing";

const primaryBtn = () => css`
  ${buttonBase(
    colors["emerald-60"],
    effects["border-width-none"],
    text["Text-xl"],
    colors["gray-10"],
    spacing["spacing-inline-m"],
    colors["gray-10"]
  )}
  box-shadow: ${effects["shadow-md"]};

  &:hover {
    background-color: ${colors["emerald-70"]};
  }

  &:active {
    background-color: ${colors["emerald-80"]};
  }

  &:focus {
    background-color: ${colors["emerald-60"]};
    outline: 2px solid ${colors["blue-50"]};
  }

  &:disabled {
    background-color: ${colors["gray-30"]};
    color: ${colors["gray-60"]};

    svg {
      fill: ${colors["gray-60"]};
    }
  }
`;

export default primaryBtn;
