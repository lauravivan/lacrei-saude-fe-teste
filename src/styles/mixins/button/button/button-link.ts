import { css } from "styled-components";
import buttonBase from "./base";
import colors from "@/styles/tokens/colors";
import effects from "@/styles/tokens/effects";
import text from "@/styles/mixins/text";
import spacing from "@/styles/tokens/spacing";

const buttonLink = () => css`
  ${buttonBase(
    colors["gray-10"],
    effects["border-width-none"],
    text["Text-xl-high200"],
    colors["emerald-60"],
    spacing["spacing-inline-m"],
    colors["emerald-60"]
  )}

  &:hover {
    background-color: ${colors["emerald-10"]};
    color: ${colors["emerald-70"]};

    svg {
      fill: ${colors["emerald-70"]};
    }
  }

  &:active {
    background-color: ${colors["emerald-20"]};
    color: ${colors["emerald-80"]};

    svg {
      fill: ${colors["emerald-80"]};
    }
  }

  &:focus {
    background-color: ${colors["gray-10"]};
    border: 2px solid ${colors["blue-50"]};
    color: ${colors["emerald-60"]};
  }
`;

export default buttonLink;
