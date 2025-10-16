import headline from "@/styles/mixins/headline/headline";
import text from "@/styles/mixins/text";
import colors from "@/styles/tokens/colors";
import effects from "@/styles/tokens/effects";
import spacing from "@/styles/tokens/spacing";
import styled from "styled-components";

export const Card = styled.article<{ isDesktop: boolean }>`
  display: flex;
  margin: ${spacing["spacing-inline-m"]} ${spacing["spacing-inset-xm"]};
  column-gap: ${spacing["spacing-inset-m"]};
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  box-shadow: ${effects["shadow-sm"]};
  padding: ${spacing["spacing-s"]};
  border-radius: ${effects["border-radius-sm"]};
`;

export const ProfessionalName = styled.p<{ isDesktop: boolean }>`
  ${({ isDesktop }) =>
    isDesktop
      ? headline["Headline-sm-high200"]("left")
      : text["Text-xl-high200"]};
  color: ${({ isDesktop }) => !isDesktop && colors["emerald-60"]};

  + p {
    ${text["Text-xs-high200"]}
  }
`;

export const ProfessionalIdentity = styled.div`
  margin-top: ${spacing["spacing-s"]};
  display: flex;
  gap: ${spacing["spacing-inline-xs"]};
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: ${spacing["spacing-inline-xs"]};
`;

export const ProfessionalPayment = styled.div`
  display: flex;
  gap: ${spacing["spacing-inline-xs"]};
  margin-bottom: ${spacing["spacing-inline-m"]};
`;

export const ProfessionalServices = styled.div<{ isDesktop: boolean }>`
  display: flex;
  text-align: center;
  margin-left: ${({ isDesktop }) => (isDesktop ? "auto" : 0)};

  button {
    flex: ${({ isDesktop }) => (isDesktop ? "auto" : 1)};
  }
`;

export const ProfessionalBio = styled.p`
  ${text["Text-base"]}
`;

export const ProfessionalPictureContainer = styled.div`
  width: 60px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfessionalInfoContainer = styled.div<{ isDesktop: boolean }>`
  > div:first-of-type {
    display: flex;
    column-gap: ${spacing["spacing-inset-m"]};

    > div:first-of-type {
      display: flex;
    }

    h5 {
      margin-bottom: ${spacing["spacing-2-xs"]};
    }
  }

  > div:nth-child(2) {
    display: flex;

    > div:first-of-type {
      display: ${({ isDesktop }) => (isDesktop ? "block" : "none")};
      width: calc(60px + 16px);
    }
  }
`;
