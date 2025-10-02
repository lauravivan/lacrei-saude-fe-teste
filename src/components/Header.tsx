import Image from "next/image";
import styled from "styled-components";
import LogoHeader from "@/assets/img/logo/logo-header-mobile.svg";
import { useScreenSize } from "@/hooks/useScreenSize";
import HelpButton from "./button/HelpButton";

const Header = styled.header`
  background-image: var(--gradient-subtle);
  display: flex;
  align-items: center;
  padding: var(--spacing-m);
  justify-content: between;

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
        <HelpButton />
      </div>
    </Header>
  );
}
