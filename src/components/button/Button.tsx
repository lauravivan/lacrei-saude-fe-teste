import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type BtnType = "solid" | "outline" | "none";
export type BtnColor = "emerald";

type ButtonType = {
  children: ReactNode;
  type: BtnType;
  color: BtnColor;
  ariaLabel?: string;
};

const button = css`
  button,
  a {
    all: unset;
    cursor: pointer;
  }

  display: flex;
  color: var(--gray-10);
  height: 48px;
  padding: 0 var(--spacing-inline-xxm);
  border-radius: var(--border-radius-sm);
  cursor: pointer;

  svg {
    height: 32px;
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

  svg {
    fill: ${({ color }) => `var(--${color}-60)`};
  }
`;

export default function Button({
  children,
  type,
  color = "emerald",
  ariaLabel,
}: ButtonType) {
  const solid = type === "solid" && (
    <SolidBtnContainer color={color}>
      <button aria-label={ariaLabel}>{children}</button>
    </SolidBtnContainer>
  );
  const outline = type === "outline" && (
    <OutlineBtnContainer aria-label={ariaLabel} color={color}>
      <button aria-label={ariaLabel}>{children}</button>
    </OutlineBtnContainer>
  );
  const ghost = type === "none" && (
    <GhostBtnContainer aria-label={ariaLabel} color={color}>
      <button aria-label={ariaLabel}>{children}</button>
    </GhostBtnContainer>
  );

  return solid || outline || ghost;
}

export function ButtonLink({
  children,
  type,
  color = "emerald",
  ariaLabel,
  href,
}: ButtonType & { href?: string }) {
  const solid = type === "solid" && (
    <SolidBtnContainer color={color}>
      <a aria-label={ariaLabel} href={href} target="_blank">
        {children}
      </a>
    </SolidBtnContainer>
  );
  const outline = type === "outline" && (
    <OutlineBtnContainer color={color}>
      <a aria-label={ariaLabel} href={href} target="_blank">
        {children}
      </a>
    </OutlineBtnContainer>
  );
  const ghost = type === "none" && (
    <GhostBtnContainer color={color}>
      <a aria-label={ariaLabel} href={href} target="_blank">
        {children}
      </a>
    </GhostBtnContainer>
  );

  return solid || outline || ghost;
}
