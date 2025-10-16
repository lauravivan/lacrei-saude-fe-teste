import { css } from "styled-components";
import base from "./base";
import colors from "@/styles/tokens/colors";
import effects from "@/styles/tokens/effects";

const secondaryButtonIcon = () => css`
  ${base(colors["gray-10"], colors["emerald-60"])};
  border-width: ${effects["border-width-md"]};
  box-shadow: ${effects["shadow-md"]};
  border-color: ${colors["emerald-60"]};

  &:hover {
    background-color: ${colors["emerald-10"]};
    border-color: ${colors["emerald-70"]};

    svg {
      fill: ${colors["emerald-70"]};
    }
  }

  &:active {
    background-color: ${colors["emerald-20"]};
    border-color: ${colors["emerald-70"]};

    svg {
      fill: ${colors["emerald-70"]};
    }
  }

  &:focus {
    border-color: ${colors["emerald-60"]};
    outline: 2px solid ${colors["blue-50"]};

    svg {
      fill: ${colors["emerald-60"]};
    }
  }

  &:disabled {
    svg {
      fill: ${colors["gray-60"]};
    }
  }
`;

export default secondaryButtonIcon;
