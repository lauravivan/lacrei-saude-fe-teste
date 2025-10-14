import { useScreenSize } from "@/hooks/useScreenSize";
import { BadgeType } from "../Badge.types";
import SecondBadgeStyles from "./SecondBadge.styles";

const PrimaryBadge = ({ children, type, img }: BadgeType) => {
  const { isDesktop } = useScreenSize();

  return (
    <SecondBadgeStyles type={type} isDesktop={isDesktop}>
      {img && img}
      {children}
    </SecondBadgeStyles>
  );
};

export default PrimaryBadge;
