import { css } from "styled-components";
import buttonBase from "./base";
import colors from "@/styles/tokens/colors";
import effects from "@/styles/tokens/effects";
import text from "@/styles/mixins/text";
import spacing from "@/styles/tokens/spacing";

const secondaryBtn = () => css`
  ${buttonBase(
    colors["gray-10"],
    effects["border-width-md"],
    text["Text-xl-high200"],
    colors["emerald-60"],
    spacing["spacing-inline-m"],
    colors["emerald-60"]
  )}
  box-shadow: ${effects["shadow-md"]};
  border-color: ${colors["emerald-60"]};
  border-style: solid;

  &:hover {
    background-color: ${colors["emerald-10"]};
    color: ${colors["emerald-70"]};
    border-color: ${colors["emerald-70"]};

    svg {
      fill: ${colors["emerald-70"]};
    }
  }

  &:active {
    background-color: ${colors["emerald-20"]};
    color: ${colors["emerald-80"]};
    border-color: ${colors["emerald-70"]};

    svg {
      fill: ${colors["emerald-80"]};
    }
  }

  &:focus {
    background-color: ${colors["gray-10"]};
    border-color: ${colors["emerald-60"]};
    color: ${colors["emerald-60"]};
    outline: 2px solid ${colors["blue-50"]};

    svg {
      fill: ${colors["emerald-60"]};
    }
  }

  &:disabled {
    background-color: ${colors["gray-30"]};
    color: ${colors["gray-60"]};
    border-color: ${colors["gray-30"]};

    svg {
      fill: ${colors["gray-60"]};
    }
  }
`;

export default secondaryBtn;
