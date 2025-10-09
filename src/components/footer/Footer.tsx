import styled from "styled-components";
import Text from "@/components/Text";
import { useScreenSize } from "@/hooks/useScreenSize";
import LogoFooter from "@/assets/img/logo/logo-footer-desktop.svg";
import Image from "next/image";
import Divider from "@/components/Divider";
import Facebook from "@/components/icons/social-media/Facebook";
import Mail from "@/components/icons/Mail";
import Linkedin from "@/components/icons/social-media/Linkedin";
import Instagram from "@/components/icons/social-media/Instagram";
import LinkText from "@/components/link/LinkText";
import BtnLinkIcon from "../button/BtnLinkIcon";

const Footer = styled.footer<{ isDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 95%;
  margin: 0 auto;

  .footer__content {
    display: flex;
    flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
    row-gap: var(--spacing-m);
    margin-top: ${({ isDesktop }) =>
      isDesktop ? "var(--spacing-l)" : "var(--spacing-m)"};
    padding: 0 var(--spacing-m) var(--spacing-m);
    margin-bottom: var(--spacing-m);
    column-gap: var(--spacing-layout-2-xl);

    > div {
      display: flex;
      flex-direction: column;
      row-gap: var(--spacing-m);

      ul {
        padding-left: 0;
        list-style: none;
        display: flex;
      }

      .footer__menu {
        row-gap: var(--spacing-2-xs);
        flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
        justify-content: space-between;
        column-gap: var(--spacing-m);
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

export default function FooterComponent() {
  const { isDesktop } = useScreenSize();

  return (
    <Footer className="footer" isDesktop={isDesktop}>
      <Divider margin="0 var(--spacing-m)"></Divider>
      <div className="footer__content">
        {isDesktop && (
          <Image
            src={LogoFooter}
            alt="Logo Lacrei Saúde"
            width={170}
            height={48}
          />
        )}
        <div>
          <ul className="footer__menu">
            <li>
              <LinkText type="secondary" href="#">
                Lacrei Saúde
              </LinkText>
            </li>
            <li>
              <LinkText type="secondary" href="/profissionais">
                Pessoas Profissionais
              </LinkText>
            </li>
            <li>
              <LinkText type="secondary" href="#">
                Política de privacidade
              </LinkText>
            </li>
            <li>
              <LinkText type="secondary" href="#">
                Termos de Uso
              </LinkText>
            </li>
          </ul>
          <div>
            <ul className="footer__social-media">
              <li>
                <BtnLinkIcon
                  color="emerald"
                  type="none"
                  ariaLabel="facebook site externo - abrirá uma nova janela"
                  href="https://www.facebook.com/lacrei.saude/"
                >
                  <Facebook />
                </BtnLinkIcon>
              </li>
              <li>
                <BtnLinkIcon
                  color="emerald"
                  type="none"
                  ariaLabel="instagram site externo - abrirá uma nova janela"
                  href="https://www.instagram.com/lacrei.saude/"
                >
                  <Instagram />
                </BtnLinkIcon>
              </li>
              <li>
                <BtnLinkIcon
                  color="emerald"
                  type="none"
                  ariaLabel="linkedin site externo - abrirá uma nova janela"
                  href="https://linkedin.com/company/lacrei/"
                >
                  <Linkedin />
                </BtnLinkIcon>
              </li>
              <li>
                <BtnLinkIcon
                  color="emerald"
                  type="none"
                  ariaLabel="e-mail site externo - abrirá uma nova janela com seu e-mail como remetente e a lacrei saúde como destinatário"
                  href="#"
                >
                  <Mail />
                </BtnLinkIcon>
              </li>
            </ul>
            <Text variant="Text-base">CNPJ: 51.265.351/0001-65</Text>
          </div>
        </div>
      </div>
    </Footer>
  );
}
