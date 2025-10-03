import { useScreenSize } from "@/hooks/useScreenSize";
import styled, { css } from "styled-components";
import Text from "@/components/Text";
import IconComponent from "../Icon";
import { ReactNode } from "react";

type Type = "success" | "default" | "error" | "info";
type ContentType = "text" | "text+icon";

export type BadgeType = {
  type: Type;
  style: "solid" | "outline";
  contentType: ContentType;
  text: string;
  iconCode?: string;
  Img?: ReactNode | null;
};

function getColor(type: Type) {
  const success = type === "success" && "";
  const defaultType = type === "default" && "var(--gray-20)";
  const errorType = type === "error" && "";
  const info = type === "info" && "";

  return success || defaultType || errorType || info;
}

const Badge = css`
  display: flex;
  width: max-content;
`;

const BadgeDesktop = css`
  ${Badge}
  column-gap: var(--spacing-inline-xs);
  align-items: center;
  height: "36px";
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-squish-s);
`;

const PrimaryBadgeDesktop = styled.div<{ type: Type }>`
  ${BadgeDesktop}
  background-color: ${({ type }) => getColor(type)};
  color: ${({ type }) => getColor(type)};
`;

const SecondBadgeDesktop = styled.div<{ type: Type }>`
  ${BadgeDesktop}
  background-color: ${({ type }) => getColor(type)};
  color: ${({ type }) => getColor(type)};
  border-width: var(--border-radius-sm);
`;

const BadgeMobile = css`
  ${BadgeDesktop}
  column-gap: var(--spacing-inline-xs);
  align-items: center;
  border-radius: var(--border-radius-xs);
  padding: var(--spacing-squish-xs);
`;

const PrimaryBadgeMobile = styled.div<{ type: Type; contentType: ContentType }>`
  ${BadgeMobile}
  background-color: ${({ type }) => getColor(type)};
  color: ${({ type }) => getColor(type)};
  height: ${({ contentType }) => (contentType === "text" ? "26px" : "32px")};
`;

const SecondBadgeMobile = styled.div<{ type: Type; contentType: ContentType }>`
  ${BadgeMobile}
  background-color: ${({ type }) => getColor(type)};
  color: ${({ type }) => getColor(type)};
  border-width: var(--border-radius-xs);
  height: ${({ contentType }) => (contentType === "text" ? "26px" : "32px")};
`;

export default function BadgeBase({
  style,
  type,
  contentType,
  text,
  iconCode,
  Img,
}: BadgeType) {
  const { isDesktop } = useScreenSize();

  const primaryDesktop = style === "solid" && isDesktop && (
    <PrimaryBadgeDesktop type={type}>
      {iconCode && <IconComponent code={iconCode} size={24} />}
      {Img}
      <Text variant="Text-base">{text}</Text>
    </PrimaryBadgeDesktop>
  );
  const secondaryDesktop = style === "outline" && isDesktop && (
    <SecondBadgeDesktop type={type}>
      {iconCode && <IconComponent code={iconCode} size={24} />}
      {Img}
      <Text variant="Text-base">{text}</Text>
    </SecondBadgeDesktop>
  );
  const primaryMobile = style === "solid" && !isDesktop && (
    <PrimaryBadgeMobile type={type} contentType={contentType}>
      {iconCode && <IconComponent code={iconCode} size={24} />}
      {Img}
      <Text variant="Text-base">{text}</Text>
    </PrimaryBadgeMobile>
  );
  const secondaryMobile = style === "solid" && !isDesktop && (
    <SecondBadgeMobile type={type} contentType={contentType}>
      {iconCode && <IconComponent code={iconCode} size={24} />}
      {Img}
      <Text variant="Text-base">{text}</Text>
    </SecondBadgeMobile>
  );

  return primaryDesktop || secondaryDesktop || primaryMobile || secondaryMobile;
}
