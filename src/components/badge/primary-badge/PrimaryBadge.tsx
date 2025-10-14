import { useScreenSize } from "@/hooks/useScreenSize";
import { BadgeType } from "../Badge.types";
import PrimaryBadgeStyles from "./PrimaryBadge.styles";

const PrimaryBadge = ({ children, type, img }: BadgeType) => {
  const { isDesktop } = useScreenSize();

  return (
    <PrimaryBadgeStyles type={type} isDesktop={isDesktop}>
      {img && img}
      {children}
    </PrimaryBadgeStyles>
  );
};

export default PrimaryBadge;
