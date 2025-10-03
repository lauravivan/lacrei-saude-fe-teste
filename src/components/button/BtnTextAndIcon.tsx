import BtnDefault, { BtnColor, BtnType } from "./Button";

type BtnTextAndIconType = {
  children: string;
  type: BtnType;
  color: BtnColor;
};

export default function BtnTextAndIcon({
  children,
  type,
  color,
}: BtnTextAndIconType) {
  return (
    <BtnDefault type={type} color={color}>
      {children}
    </BtnDefault>
  );
}
