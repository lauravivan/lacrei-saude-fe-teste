"use client";

import {
  BadgeEthnicity,
  BadgeGenderIdentity,
  BadgeSexuality,
} from "@/components/badge/BadgeDiversity";
import Title from "@/components/Title";
import { Professional as ProfessionalType } from "@/types/professional";
import styled from "styled-components";
import Text from "@/components/Text";
import BtnText from "@/components/button/BtnText";

type ProfessionalsType = {
  professional: ProfessionalType;
};

const ProfessionalCard = styled.article`
  display: flex;
  margin: var(--spacing-inset-m) var(--spacing-inset-xm);
  column-gap: 0 var(--spacing-inset-m);

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .professional__identity {
    display: flex;
    gap: var(--spacing-inline-xs);
    margin-bottom: var(--spacing-inline-m);
    flex-wrap: wrap;
  }

  .professional__services {
    margin-left: auto;
  }
`;

export default function Professional({ professional }: ProfessionalsType) {
  return (
    <ProfessionalCard>
      <div>
        <img />
      </div>
      <div>
        <div>
          <Title number={5}>{professional.name}</Title>
          <Text variant="Text-sm-high200">
            {`${professional.specialty}, ${professional.crm}`}
          </Text>
          <div className="professional__identity">
            <BadgeEthnicity label={professional.identity.race} />
            <BadgeGenderIdentity label={professional.identity.gender} />
            <BadgeSexuality label={professional.identity.sexuality} />
          </div>
          <div></div>
          <details>
            <summary>Informações</summary>
            <Text variant="Text-base">{professional.bio}</Text>
          </details>
        </div>
        <div className="professional__services">
          <BtnText type="solid" color="emerald">
            Atendimentos
          </BtnText>
        </div>
      </div>
    </ProfessionalCard>
  );
}
