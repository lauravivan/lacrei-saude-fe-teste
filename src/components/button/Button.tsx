import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type BtnType = "solid" | "outline" | "none";
export type BtnColor = "emerald";

type BtnDefaultTypes = {
  children: ReactNode;
  type: BtnType;
  color: BtnColor;
};

const Button = css`
  all: unset;
  color: var(--gray-10);
  height: 48px;
  border-radius: var(--border-radius-sm);
  padding: 0 var(--spacing-inline-xxm);
  cursor: pointer;
`;

const SolidBtn = styled.button<{ color: string }>`
  ${Button}
  background-color: ${({ color }) => `var(--${color}-60)`};
  border-width: var(--border-width-none);

  svg {
    fill: ${({ color }) => `var(--${color}-60)`};
  }
`;

const OutlineBtn = styled.button<{ color: string }>`
  ${Button}

  svg {
    fill: ${({ color }) => `var(--${color}-60)`};
  }
`;

const GhostBtn = styled.button<{ color: string }>`
  ${Button}

  svg {
    fill: ${({ color }) => `var(--${color}-60)`};
  }
`;

export default function BtnDefault({
  children,
  type,
  color = "emerald",
}: BtnDefaultTypes) {
  const solid = type === "solid" && (
    <SolidBtn color={color}>{children}</SolidBtn>
  );
  const outline = type === "outline" && (
    <OutlineBtn color={color}>{children}</OutlineBtn>
  );
  const ghost = type === "none" && (
    <GhostBtn color={color}>{children}</GhostBtn>
  );

  return solid || outline || ghost;
}
