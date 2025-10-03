import { ReactNode } from "react";
import BtnDefault, { BtnColor, BtnType } from "./Button";

type BtnIconType = {
  children: ReactNode;
  type: BtnType;
  color: BtnColor;
};

export default function BtnIcon({ children, type, color }: BtnIconType) {
  return (
    <BtnDefault type={type} color={color}>
      {children}
    </BtnDefault>
  );
}
