import styled from "styled-components";
import getColor from "../utils/getColor";
import { BadgeVariant } from "../Badge.types";
import Badge from "../Badge.styles";

/* height: ${({ contentType }) =>
    contentType === "text" ? "26px" : "32px"}; */

const PrimaryBadge = styled.div<{ isDesktop: boolean; type: BadgeVariant }>`
  ${Badge}
  background-color: ${({ type }) => getColor(type)};
  color: ${({ type }) => getColor(type)};
`;

export default PrimaryBadge;
