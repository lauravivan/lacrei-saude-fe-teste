import buttonIcon from "@/styles/mixins/button/button-icon/button-icon";
import colors from "@/styles/tokens/colors";
import effects from "@/styles/tokens/effects";
import spacing from "@/styles/tokens/spacing";
import styled from "styled-components";

export const Account = styled.button<{ isDesktop: boolean }>`
  display: flex;
  ${buttonIcon["Ghost Button Icon"]};
  width: auto;
  height: auto;
  align-items: center;
  margin-left: ${spacing["spacing-inline-m"]};

  .avatar {
    display: flex;
    background-color: ${colors["emerald-20"]};
    border-radius: ${effects["border-radius-circle"]};
    width: ${({ isDesktop }) => (isDesktop ? "48px" : "24px")};
    height: ${({ isDesktop }) => (isDesktop ? "48px" : "24px")};
    align-items: center;
    justify-content: center;
  }

  .avatar + div {
    padding: 0;
  }
`;
