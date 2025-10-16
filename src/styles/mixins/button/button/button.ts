import { css } from "styled-components";
import primaryBtn from "./primary-button";
import criticalBtn from "./critical-button";
import buttonLink from "./button-link";
import secondaryBtn from "./secondary-button";

const button = {
  "Primary Button": () => css`
    ${primaryBtn}
  `,
  "Critical Button": () => css`
    ${criticalBtn}
  `,
  "Button Link": () => css`
    ${buttonLink}
  `,
  "Secondary Button": () => css`
    ${secondaryBtn}
  `,
};

export default button;
