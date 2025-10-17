import { css } from "styled-components";
import base from "./base";
import colors from "@/styles/tokens/colors";

const ghostButtonIcon = () => css`
  ${base(colors["gray-10"], colors["gray-80"])};
  border-color: transparent;
  border-style: solid;

  &:hover {
    background-color: ${colors["emerald-10"]};

    svg {
      fill: ${colors["emerald-70"]};
    }
  }

  &:active {
    background-color: ${colors["emerald-20"]};

     svg {
      fill: ${colors["emerald-80"]};
    }
  }

  &:focus {
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

export default ghostButtonIcon;
