import dynamic from "next/dynamic";
import styled from "styled-components";
import { useScreenSize } from "@/hooks/useScreenSize";
import React, { ReactNode } from "react";
import base from "@/styles/mixins/header/base";

const LogoHeader = dynamic(() => import("./LogoHeader"), {
  ssr: false,
});

const LogoHeaderDesktop = dynamic(() => import("./LogoHeaderDesktop"), {
  ssr: false,
});

const Header = styled.header<{ isDesktop: boolean }>`
  ${({ isDesktop }) => base(isDesktop)}
`;

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const HeaderComponent = ({ children }: HeaderProps) => {
  const { isDesktop } = useScreenSize();

  return (
    <Header isDesktop={isDesktop}>
      <div className="img-wrapper">
        {isDesktop ? <LogoHeaderDesktop /> : <LogoHeader />}
      </div>
      {children}
    </Header>
  );
};

export default HeaderComponent;
