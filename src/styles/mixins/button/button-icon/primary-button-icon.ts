import { css } from "styled-components";
import base from "./base";
import colors from "@/styles/tokens/colors";
import effects from "@/styles/tokens/effects";

const primaryButtonIcon = () => css`
  ${base(colors["emerald-60"], colors["gray-10"])};
  border-width: ${effects["border-width-none"]};
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

    svg {
      fill: ${colors["gray-60"]};
    }
  }
`;

export default primaryButtonIcon;
