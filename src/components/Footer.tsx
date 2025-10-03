import styled from "styled-components";
import Text from "@/components/Text";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkText from "./link/LinkText";
import DividerComponent from "./Divider";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  row-gap: var(--spacing-m);
  margin-top: var(--spacing-m);
  padding: 0 var(--spacing-m) var(--spacing-m);

  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
  }

  ul:first-of-type {
    flex-direction: column;
    row-gap: var(--spacing-2-xs);
  }

  .footer {
    &__social-media {
    }
  }
`;

export default function FooterComponent() {
  return (
    <>
      <DividerComponent margin="0 var(--spacing-m)"></DividerComponent>
      <Footer className="footer">
        <ul>
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
        <ul className="footer__social-media">
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <EmailOutlinedIcon />
          </li>
        </ul>
        <Text variant="Text-base">CNPJ: 51.265.351/0001-65</Text>
      </Footer>
    </>
  );
}
