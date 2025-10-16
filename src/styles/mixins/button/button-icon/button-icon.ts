import { css } from "styled-components";
import primaryButtonIcon from "./primary-button-icon";
import secondaryButtonIcon from "./secondary-button-icon";
import ghostButtonIcon from "./ghost-button-icon";
import criticalButtonIcon from "./critical-button-icon";

const buttonIcon = {
  "Primary Button Icon": () => css`
    ${primaryButtonIcon}
  `,
  "Secondary Button Icon": () => css`
    ${secondaryButtonIcon}
  `,
  "Ghost Button Icon": () => css`
    ${ghostButtonIcon}
  `,
  "Critical Button Icon": () => css`
    ${criticalButtonIcon}
  `,
};

export default buttonIcon;
