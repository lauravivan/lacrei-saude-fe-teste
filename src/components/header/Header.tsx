import Image from "next/image";
import styled from "styled-components";
import LogoHeader from "@/assets/img/logo/logo-header-mobile.svg";
import LogoHeaderDesktop from "@/assets/img/logo/logo-header-desktop.svg";
import { useScreenSize } from "@/hooks/useScreenSize";
import { ReactNode } from "react";

const Header = styled.header<{ isDesktop: boolean }>`
  background-image: var(--gradient-subtle);
  display: flex;
  align-items: center;
  padding: ${({ isDesktop }) =>
    isDesktop
      ? "var(--spacing-m) var(--spacing-layout-xl)"
      : "var(--spacing-m)"};
  justify-content: space-between;

  .img-wrapper {
    width: 134px;
    height: 16px;
  }
`;

export default function HeaderComponent({ children }: { children: ReactNode }) {
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
      {children}
    </Header>
  );
}
