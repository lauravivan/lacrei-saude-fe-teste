import colors from "@/styles/tokens/colors";
import spacing from "@/styles/tokens/spacing";
import styled from "styled-components";

const Divider = styled.div<{ margin: string }>`
  color: ${colors["gray-30"]};
  background-color: ${colors["gray-30"]};
  max-width: 100%;
  height: 1px;
  margin: ${({ margin }) => margin};
  margin-top: ${spacing["spacing-layout-l"]};
`;

export default function DividerComponent({ margin }: { margin: string }) {
  return <Divider margin={margin}></Divider>;
}
