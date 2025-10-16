import text from "@/styles/mixins/text";
import spacing from "@/styles/tokens/spacing";
import styled from "styled-components";

export const ProfessionalsContainer = styled.main`
  width: 95%;
  margin: 0 auto;

  h2,
  h3,
  > p {
    margin: ${spacing["spacing-inset-m"]} ${spacing["spacing-inset-xm"]};
  }
`;

export const Text = styled.p`
  ${text["Text-base"]};
`;

export const ProfessionalsResults = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${spacing["spacing-inset-xxs"]};
`;
