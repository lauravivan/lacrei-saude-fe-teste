import spacing from "@/styles/tokens/spacing";
import styled from "styled-components";

const Footer = styled.footer<{ isDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;

  .footer__content {
    display: flex;
    flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
    row-gap: ${spacing["spacing-m"]};
    margin-top: ${({ isDesktop }) =>
      isDesktop ? spacing["spacing-l"] : spacing["spacing-m"]};
    padding: 0 ${spacing["spacing-m"]} ${spacing["spacing-m"]};
    margin-bottom: ${spacing["spacing-m"]};
    column-gap: ${spacing["spacing-layout-2-xl"]};

    > div {
      display: flex;
      flex-direction: column;
      row-gap: ${spacing["spacing-m"]};

      ul {
        padding-left: 0;
        list-style: none;
        display: flex;
      }

      .footer__menu {
        row-gap: ${spacing["spacing-2-xs"]};
        flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
        justify-content: space-between;
        column-gap: ${spacing["spacing-m"]};
      }

      > div {
        display: flex;
        flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
        justify-content: space-between;
        align-items: ${({ isDesktop }) => (isDesktop ? "center" : "auto")};

        .footer__social-media {
        }
      }
    }
  }
`;

export default Footer;