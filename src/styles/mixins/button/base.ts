import { css } from "styled-components";


const button = css`
  button,
  a {
    background-color: transparent;
    color: inherit;
    border: none;
    text-decoration: none;
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

export const baseSolid = (size: string, weight: number) => css`
  background-color: ${({ color }) => `var(--${color}-60)`};
  border-width: var(--border-width-none);
  box-shadow: var(--shadow-md);

  svg {
    fill: ${({ color }) => `var(--${color}-60)`};
  }
`;

export const baseOutline = () => css`
color: var(--emerald-60);
  border-color: var(--emerald-60);
  border-width: var(--border-width-md);
  border-style: solid;
  box-shadow: var(--shadow-md);

  svg {
    fill: var(--emerald-60);
  }
`

export const baseGhost = () => css`
text-align: center;
  padding: var(--spacing-inset-sm);
  display: block;
  height: fit-content;

  svg {
    fill: var(--emerald-60);
  }
`