import { ReactNode } from "react";
import BtnDefault, { BtnColor, BtnType } from "./Button";

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
    <BtnDefault type={type} color={color} ariaLabel={ariaLabel}>
      {children}
    </BtnDefault>
  );
}
