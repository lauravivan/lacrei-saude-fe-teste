import { ReactNode } from "react";
import styled from "styled-components";

export type LinkTypes = "primary" | "secondary";

type LinkType = {
  children: ReactNode;
  href: string;
  type: LinkTypes;
};

const PrimaryLink = styled.a`
  color: var(--emerald-60);
`;

const SecondaryLink = styled.a`
  color: var(--emerald-10);
  text-decoration: none;
  min-height: 48px;
  height: auto;
  display: inline-block;
  line-height: 48px;
  vertical-align: middle;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    font-weight: 700;
  }

  &:focus {
  }
`;

export default function LinkComponent({ children, href, type }: LinkType) {
  const primary = type === "primary" && (
    <PrimaryLink href={href}>{children}</PrimaryLink>
  );
  const secondary = type === "secondary" && (
    <SecondaryLink href={href}>{children}</SecondaryLink>
  );

  return primary || secondary;
}
