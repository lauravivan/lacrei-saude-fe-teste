"use client";

import dynamic from "next/dynamic";
import styled from "styled-components";
import { useScreenSize } from "@/hooks/useScreenSize";
import React from "react";
import base from "@/styles/mixins/header/base";
import Link from "next/link";

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
        <Link href="/">{isDesktop ? <LogoHeaderDesktop /> : <LogoHeader />}</Link>
      </div>
      {children}
    </Header>
  );
};

export default HeaderComponent;
