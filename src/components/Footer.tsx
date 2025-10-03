import styled from "styled-components";
import LinkComponent from "./link/Link";
import Text from "@/components/Text";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = styled.footer``;

export default function FooterComponent() {
  return (
    <Footer>
      <ul>
        <li>
          <LinkComponent href="#">Lacrei Saúde</LinkComponent>
        </li>
        <li>
          <LinkComponent href="/profissionais">
            Pessoas Profissionais
          </LinkComponent>
        </li>
        <li>
          <LinkComponent href="#">Política de privacidade</LinkComponent>
        </li>
        <li>
          <LinkComponent href="#">Termos de Uso</LinkComponent>
        </li>
      </ul>
      <ul>
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
  );
}
