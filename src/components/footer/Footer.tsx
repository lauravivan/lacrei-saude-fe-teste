import { useScreenSize } from "@/hooks/useScreenSize";
import LogoFooter from "@/assets/img/logo/logo-footer-desktop.svg";
import Image from "next/image";
import Divider from "@/components/divider/Divider";
import Facebook from "@/components/icons/social-media/Facebook";
import Mail from "@/components/icons/Mail";
import Linkedin from "@/components/icons/social-media/Linkedin";
import Instagram from "@/components/icons/social-media/Instagram";
import LinkText from "@/components/link/LinkText";
import FooterStyles from "./Footer.styles";

const Footer = () => {
  const { isDesktop } = useScreenSize();

  return (
    <FooterStyles className="footer" isDesktop={isDesktop}>
      <Divider margin="0 var(--spacing-m)"></Divider>
      <div className="footer__content">
        {isDesktop && (
          <a href="/">
            <Image
              src={LogoFooter}
              alt="Logo Lacrei Saúde"
              width={170}
              height={48}
            />
          </a>
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
                {/* <BtnLinkIcon
                  color="emerald"
                  type="none"
                  ariaLabel="facebook site externo - abrirá uma nova janela"
                  href="https://www.facebook.com/lacrei.saude/"
                >
                  <Facebook />
                </BtnLinkIcon> */}
              </li>
              <li>
                {/* <BtnLinkIcon
                  color="emerald"
                  type="none"
                  ariaLabel="instagram site externo - abrirá uma nova janela"
                  href="https://www.instagram.com/lacrei.saude/"
                >
                  <Instagram />
                </BtnLinkIcon> */}
              </li>
              <li>
                {/* <BtnLinkIcon
                  color="emerald"
                  type="none"
                  ariaLabel="linkedin site externo - abrirá uma nova janela"
                  href="https://linkedin.com/company/lacrei/"
                >
                  <Linkedin />
                </BtnLinkIcon> */}
              </li>
              <li>
                {/* <BtnLinkIcon
                  color="emerald"
                  type="none"
                  ariaLabel="e-mail site externo - abrirá uma nova janela com seu e-mail como remetente e a lacrei saúde como destinatário"
                  href="#"
                >
                  <Mail />
                </BtnLinkIcon> */}
              </li>
            </ul>
            {/* <Text variant="Text-base">CNPJ: 51.265.351/0001-65</Text> */}
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
