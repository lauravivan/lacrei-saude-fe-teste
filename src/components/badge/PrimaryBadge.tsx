import { useScreenSize } from "@/hooks/useScreenSize";
import primaryBadge from "@/styles/mixins/badge/primary-badge/primary-badge";
import styled from "styled-components";

const Badge = styled.div<{
  variant: keyof typeof primaryBadge;
  isDesktop: boolean;
}>`
  ${({ variant, isDesktop }) => primaryBadge[variant](isDesktop)}
`;

interface PrimaryBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  img?: React.ReactElement<HTMLImageElement> | null;
  variant: keyof typeof primaryBadge;
}

const PrimaryBadge = ({ children, img, variant }: PrimaryBadgeProps) => {
  const { isDesktop } = useScreenSize();

  return (
    <Badge isDesktop={isDesktop} variant={variant}>
      {img && img}
      {children}
    </Badge>
  );
};

export default PrimaryBadge;
