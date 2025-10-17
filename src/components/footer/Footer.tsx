import { useScreenSize } from "@/hooks/useScreenSize";
import LogoFooter from "@/assets/img/logo/logo-footer-desktop.svg";
import Image from "next/image";
import Divider from "@/components/divider/Divider";
import Facebook from "@/components/icons/social-media/Facebook";
import Mail from "@/components/icons/Mail";
import Linkedin from "@/components/icons/social-media/Linkedin";
import Instagram from "@/components/icons/social-media/Instagram";
import LinkText from "@/components/link/LinkText";
import FooterStyles, { CNPJ, SocialMediaList } from "./Footer.styles";
import Link from "next/link";

const Footer = () => {
  const { isDesktop } = useScreenSize();

  return (
    <FooterStyles isDesktop={isDesktop}>
      <Divider margin="0 var(--spacing-m)"></Divider>
      <div className="footer__content">
        {isDesktop && (
          <Link href="/">
            <Image
              src={LogoFooter}
              alt="Logo Lacrei Saúde"
              width={170}
              height={48}
            />
          </Link>
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
            <SocialMediaList id="social-media">
              <li>
                <Link
                  aria-label="facebook site externo - abrirá uma nova janela"
                  href="https://www.facebook.com/lacrei.saude/"
                >
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="instagram site externo - abrirá uma nova janela"
                  href="https://www.instagram.com/lacrei.saude/"
                >
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="linkedin site externo - abrirá uma nova janela"
                  href="https://linkedin.com/company/lacrei/"
                >
                  <Linkedin />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="e-mail site externo - abrirá uma nova janela com seu e-mail como remetente e a lacrei saúde como destinatário"
                  href="#"
                >
                  <Mail />
                </Link>
              </li>
            </SocialMediaList>
            <CNPJ>CNPJ: 51.265.351/0001-65</CNPJ>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
