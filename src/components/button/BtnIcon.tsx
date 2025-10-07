import { ReactNode } from "react";
import Button, { BtnColor, BtnType, ButtonLink } from "./Button";

type BtnIconType = {
  children: ReactNode;
  type: BtnType;
  color: BtnColor;
  ariaLabel: string;
  isLink?: boolean;
  href?: string;
};

export default function BtnIcon({
  children,
  type,
  color,
  ariaLabel,
  isLink = false,
  href,
}: BtnIconType) {
  return isLink ? (
    <ButtonLink type={type} color={color} ariaLabel={ariaLabel} href={href}>
      {children}
    </ButtonLink>
  ) : (
    <Button type={type} color={color} ariaLabel={ariaLabel}>
      {children}
    </Button>
  );
}
