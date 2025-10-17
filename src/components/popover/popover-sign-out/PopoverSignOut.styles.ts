import buttonIcon from "@/styles/mixins/button/button-icon/button-icon";
import text from "@/styles/mixins/text";
import colors from "@/styles/tokens/colors";
import styled from "styled-components";

export const Username = styled.span<{ isDesktop: boolean }>`
  ${({ isDesktop }) =>
    isDesktop ? text["Text-xl-high200"] : text["Text-sm-high200"]};
  color: ${colors["emerald-60"]};
`;
