import Image from "next/image";
import styled from "styled-components";
import LogoHeader from "@/assets/img/logo/logo-header-mobile.svg";
import { useScreenSize } from "@/hooks/useScreenSize";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BtnIcon from "./button/BtnIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = styled.header`
  background-image: var(--gradient-subtle);
  display: flex;
  align-items: center;
  padding: var(--spacing-m);
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
    <Header>
      <div className="img-wrapper">
        {isDesktop ? (
          <div></div>
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
        <BtnIcon color="emerald" type="none">
          <HelpOutlineIcon />
        </BtnIcon>
        <div className="account">
          <div className="avatar">G</div>
          <BtnIcon color="emerald" type="none">
            <ExpandMoreIcon />
          </BtnIcon>
        </div>
      </div>
    </Header>
  );
}
