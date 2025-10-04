import Image from "next/image";
import styled from "styled-components";
import LogoHeader from "@/assets/img/logo/logo-header-mobile.svg";
import LogoHeaderDesktop from "@/assets/img/logo/logo-header-desktop.svg";
import { useScreenSize } from "@/hooks/useScreenSize";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BtnIcon from "./button/BtnIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = styled.header<{ isDesktop: boolean }>`
  background-image: var(--gradient-subtle);
  display: flex;
  align-items: center;
  padding: ${({ isDesktop }) =>
    isDesktop
      ? "var(--spacing-m) var(--spacing-layout-xl)"
      : "var(--spacing-m)"};
  justify-content: between;

  > div:nth-child(2) {
    margin-left: auto;
    display: flex;
    align-items: center;

    .account {
      display: flex;
      align-items: center;
    }

    .avatar {
      display: flex;
      background-color: var(--emerald-20);
      border-radius: var(--border-radius-circle);
      size: 48px;
      padding: var(--spacing-xs) var(--spacing-s);
    }
  }

  .img-wrapper {
    width: 134px;
    height: 16px;
  }
`;

export default function HeaderComponent() {
  const { isDesktop } = useScreenSize();

  return (
    <Header isDesktop={isDesktop}>
      <div className="img-wrapper">
        {isDesktop ? (
          <Image
            src={LogoHeaderDesktop}
            alt="Logo Lacrei Saúde"
            width={187}
            height={24}
          />
        ) : (
          <Image
            src={LogoHeader}
            alt="Logo Lacrei Saúde"
            width={134}
            height={16}
          />
        )}
      </div>
      <div>
        <BtnIcon color="emerald" type="none" ariaLabel="Botão de ajuda">
          <HelpOutlineIcon />
        </BtnIcon>
        <div className="account">
          <div className="avatar">G</div>
          <BtnIcon color="emerald" type="none" ariaLabel="Expandir">
            <ExpandMoreIcon />
          </BtnIcon>
        </div>
      </div>
    </Header>
  );
}
