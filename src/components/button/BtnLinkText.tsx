import { BtnColor, BtnType, ButtonLink } from "./Button";

interface BtnTextProps extends BtnLink {
  children: string;
  type: BtnType;
  color: BtnColor;
}

export default function BtnText({
  children,
  type,
  color,
  href,
  target = "_blank",
}: BtnTextProps) {
  return (
    <ButtonLink type={type} color={color} href={href} target={target}>
      {children}
    </ButtonLink>
  );
}
