import BtnDefault, { BtnColor, BtnType } from "./Button";

type BtnTextAndIconType = {
  children: string;
  type: BtnType;
  color: BtnColor;
  ariaLabel: string;
};

export default function BtnTextAndIcon({
  children,
  type,
  color,
  ariaLabel,
}: BtnTextAndIconType) {
  return (
    <BtnDefault type={type} color={color} ariaLabel={ariaLabel}>
      {children}
    </BtnDefault>
  );
}
