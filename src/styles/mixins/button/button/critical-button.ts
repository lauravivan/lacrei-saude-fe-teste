import { css } from "styled-components";
import buttonBase from "./base";
import colors from "@/styles/tokens/colors";
import effects from "@/styles/tokens/effects";
import text from "@/styles/mixins/text";
import spacing from "@/styles/tokens/spacing";

const criticalBtn = () => css`
  ${buttonBase(
    colors["red-60"],
    effects["border-width-none"],
    text["Text-xl-high200"],
    colors["gray-10"],
    spacing["spacing-inline-m"],
    colors["gray-10"]
  )}
  box-shadow: ${effects["shadow-md"]};
  border-color: ${colors["red-60"]};
  border-style: solid;

  &:hover {
    background-color: ${colors["red-70"]};
  }

  &:active {
    background-color: ${colors["red-80"]};
  }

  &:focus {
    background-color: ${colors["red-60"]};
    outline: 2px solid ${colors["blue-50"]};
  }

  &:disabled {
    background-color: ${colors["red-20"]};
    color: ${colors["gray-60"]};

    svg {
      fill: ${colors["gray-60"]};
    }
  }
`;

export default criticalBtn;
