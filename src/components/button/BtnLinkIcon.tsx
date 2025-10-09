import { ReactNode } from "react";
import { BtnColor, BtnType, ButtonLink } from "./Button";

interface BtnIconProps extends BtnLink {
  children: ReactNode;
  type: BtnType;
  color: BtnColor;
  ariaLabel: string;
}

export default function BtnIcon({
  children,
  type,
  color,
  ariaLabel,
  href,
  target = "_blank",
}: BtnIconProps) {
  return (
    <ButtonLink
      type={type}
      color={color}
      ariaLabel={ariaLabel}
      href={href}
      target={target}
    >
      {children}
    </ButtonLink>
  );
}
