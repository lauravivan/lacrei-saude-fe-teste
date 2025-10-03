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
import { BadgeService } from "@/components/badge/BadgeService";

type ProfessionalsType = {
  professional: ProfessionalType;
};

const ProfessionalCard = styled.article`
  display: flex;
  margin: var(--spacing-inset-m) var(--spacing-inset-xm);
  column-gap: var(--spacing-inset-m);

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .professional {
    &__info {
      display: flex;
      flex-direction: column;

      h5 {
        margin-bottom: var(--spacing-2-xs);
      }
    }

    &__identity {
      margin-top: var(--spacing-s);
      display: flex;
      gap: var(--spacing-inline-xs);
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: var(--spacing-inline-xs);
    }

    &__payment {
      display: flex;
      gap: var(--spacing-inline-xs);
      margin-bottom: var(--spacing-inline-m);
    }

    &__services {
      margin-left: auto;
    }

    &__picture {
      img {
        object-fit: cover;
      }
    }
  }
`;

export default function Professional({ professional }: ProfessionalsType) {
  return (
    <ProfessionalCard className="professional">
      <div className="professional__picture">
        <img
          width={100}
          height={100}
          src={`./professionals/${professional.picture}.webp`}
          alt={`Foto da pessoa ${professional.name}`}
        />
      </div>
      <div>
        <div className="professional__info">
          <Title number={5}>{professional.name}</Title>
          <Text variant="Text-sm-high200">
            {`${professional.specialty}, ${professional.crm}`}
          </Text>
          <div className="professional__identity">
            <BadgeEthnicity label={professional.identity.race} />
            <BadgeGenderIdentity label={professional.identity.gender} />
            <BadgeSexuality label={professional.identity.sexuality} />
          </div>
          <div className="professional__payment">
            {professional.payment_options.map((po) => (
              <BadgeService key={po} text={po} />
            ))}
          </div>
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
