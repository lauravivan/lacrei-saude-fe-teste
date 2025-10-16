"use client";

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

const HeaderComponent = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  const { isDesktop } = useScreenSize();

  return (
    <Header isDesktop={isDesktop}>
      <div className="img-wrapper">
        <a href="/">{isDesktop ? <LogoHeaderDesktop /> : <LogoHeader />}</a>
      </div>
      {children}
    </Header>
  );
};

export default HeaderComponent;
