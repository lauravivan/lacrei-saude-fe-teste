import { useScreenSize } from "@/hooks/useScreenSize";
import styled from "styled-components";
import { BadgeType } from "./Badge.types";
import secondaryBadge from "@/styles/mixins/badge/secondary-badge/secondary-badge";

const Badge = styled.div<{
  variant: keyof typeof secondaryBadge;
  isDesktop: boolean;
}>`
  ${({ variant, isDesktop }) => secondaryBadge[variant](isDesktop)}
`;

interface SecondaryBadgeProps extends BadgeType {
  variant: keyof typeof secondaryBadge;
}

const SecondaryBadge = ({ children, img, variant }: SecondaryBadgeProps) => {
  const { isDesktop } = useScreenSize();

  return (
    <Badge isDesktop={isDesktop} variant={variant}>
      {img && img}
      {children}
    </Badge>
  );
};

export default SecondaryBadge;
