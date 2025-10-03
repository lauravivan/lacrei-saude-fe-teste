import BtnDefault, { BtnColor, BtnType } from "./Button";

type BtnTextType = {
  children: string;
  type: BtnType;
  color: BtnColor;
};

export default function BtnText({ children, type, color }: BtnTextType) {
  return <BtnDefault type={type} color={color}>{children}</BtnDefault>;
}
