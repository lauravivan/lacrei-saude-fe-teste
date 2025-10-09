import Button, { BtnColor, BtnType} from "./Button";

type BtnTextType = {
  children: string;
  type: BtnType;
  color: BtnColor;
};

export default function BtnText({ children, type, color }: BtnTextType) {
  return (
    <Button type={type} color={color}>
      {children}
    </Button>
  );
}
