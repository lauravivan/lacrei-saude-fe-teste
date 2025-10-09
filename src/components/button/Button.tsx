import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type BtnType = "solid" | "outline" | "none";
export type BtnColor = "emerald";

interface ButtonProps {
  children: ReactNode;
  type: BtnType;
  color: BtnColor;
  ariaLabel?: string;
}

const button = css`
  button,
  a {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  display: flex;
  color: var(--gray-10);
  height: 48px;
  padding: 0 var(--spacing-inline-xxm);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  justify-content: center;

  svg {
    height: 32px;
    width: 25px;
  }
`;

const SolidBtnContainer = styled.div<{ color: string }>`
  ${button}
  background-color: ${({ color }) => `var(--${color}-60)`};
  border-width: var(--border-width-none);

  svg {
    fill: ${({ color }) => `var(--${color}-60)`};
  }
`;

const OutlineBtnContainer = styled.div<{ color: string }>`
  ${button}
  color: ${({ color }) => `var(--${color}-60)`};
  border-color: ${({ color }) => `var(--${color}-60)`};
  border-width: var(--border-width-md);
  border-style: solid;

  svg {
    fill: ${({ color }) => `var(--${color}-60)`};
  }
`;

const GhostBtnContainer = styled.div<{ color: string }>`
  ${button}
  text-align: center;
  padding: var(--spacing-inset-sm);
  display: block;
  height: fit-content;

  svg {
    fill: ${({ color }) => `var(--${color}-60)`};
  }
`;

export default function Button({
  children,
  type,
  color = "emerald",
  ariaLabel,
}: ButtonProps) {
  const solid = type === "solid" && (
    <SolidBtnContainer color={color} className="btn-container">
      <button aria-label={ariaLabel}>{children}</button>
    </SolidBtnContainer>
  );
  const outline = type === "outline" && (
    <OutlineBtnContainer
      aria-label={ariaLabel}
      color={color}
      className="btn-container"
    >
      <button aria-label={ariaLabel}>{children}</button>
    </OutlineBtnContainer>
  );
  const ghost = type === "none" && (
    <GhostBtnContainer
      aria-label={ariaLabel}
      color={color}
      className="btn-container"
    >
      <button aria-label={ariaLabel}>{children}</button>
    </GhostBtnContainer>
  );

  return solid || outline || ghost;
}

interface ButtonLinkProps extends ButtonProps, BtnLink {}

export function ButtonLink({
  children,
  type,
  color = "emerald",
  ariaLabel,
  href,
  target,
}: ButtonLinkProps) {
  const solid = type === "solid" && (
    <SolidBtnContainer color={color} className="btn-container">
      <a aria-label={ariaLabel} href={href} target={target}>
        {children}
      </a>
    </SolidBtnContainer>
  );
  const outline = type === "outline" && (
    <OutlineBtnContainer color={color} className="btn-container">
      <a aria-label={ariaLabel} href={href} target={target}>
        {children}
      </a>
    </OutlineBtnContainer>
  );
  const ghost = type === "none" && (
    <GhostBtnContainer color={color} className="btn-container">
      <a aria-label={ariaLabel} href={href} target={target}>
        {children}
      </a>
    </GhostBtnContainer>
  );

  return solid || outline || ghost;
}
