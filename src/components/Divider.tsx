import styled from "styled-components";

const Divider = styled.div<{ margin: string }>`
  color: var(--gray-30);
  background-color: var(--gray-30);
  max-width: 100%;
  height: 1px;
  margin: ${({ margin }) => margin};
  margin-top: var(--spacing-layout-l);
`;

export default function DividerComponent({ margin }: { margin: string }) {
  return <Divider margin={margin}></Divider>;
}
