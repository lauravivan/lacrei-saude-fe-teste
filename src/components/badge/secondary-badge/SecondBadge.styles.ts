import styled from "styled-components";
import getColor from "../utils/getColor";
import { BadgeVariant } from "../Badge.types";
import Badge from "../Badge.styles";

//   height: ${({ contentType }) => (contentType === "text" ? "26px" : "32px")};

const SecondBadge = styled.div<{ isDesktop: boolean; type: BadgeVariant }>`
  ${Badge}
  color: ${({ type }) => getColor(type)};
  border-width: ${({ isDesktop }) =>
    isDesktop ? "var(--border-radius-sm)" : "var(--border-radius-xs)"};
  border-color: ${({ type }) => getColor(type)};
`;

export default SecondBadge;
