import { ReactNode } from "react";
import Button, { BtnColor, BtnType } from "./Button";

type BtnIconType = {
  children: ReactNode;
  type: BtnType;
  color: BtnColor;
  ariaLabel: string;
};

export default function BtnIcon({
  children,
  type,
  color,
  ariaLabel,
}: BtnIconType) {
  return (
    <Button type={type} color={color} ariaLabel={ariaLabel}>
      {children}
    </Button>
  );
}
