import text from "@/styles/mixins/text";
import colors from "@/styles/tokens/colors";
import effects from "@/styles/tokens/effects";
import spacing from "@/styles/tokens/spacing";
import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
`;

export const ProfessionalHeader = styled.div`
margin-left: ${spacing["spacing-inline-l"]};
  display: flex;
  align-items: center;
  column-gap: ${spacing["spacing-inset-s"]};
`;

export const ProfessionalName = styled.p`
  ${text["Text-xl-high200"]}
  color: ${colors["emerald-60"]}
`;

export const ProfessionalBio = styled.blockquote`
  background-color: ${colors["gray-20"]};
  padding: ${spacing["spacing-inline-xm"]};
  border-radius: ${effects["border-radius-md"]};
`;
