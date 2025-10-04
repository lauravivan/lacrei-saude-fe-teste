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
import { useScreenSize } from "@/hooks/useScreenSize";

type ProfessionalsType = {
  professional: ProfessionalType;
};

const ProfessionalCard = styled.article<{ isDesktop: boolean }>`
  display: flex;
  margin: var(--spacing-inset-m) var(--spacing-inset-xm);
  column-gap: var(--spacing-inset-m);
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};

  .professional {
    &__info {
      > div:first-of-type {
        display: flex;
        column-gap: var(--spacing-inset-m);

        > div:first-of-type {
          display: flex;
        }

        h5 {
          margin-bottom: var(--spacing-2-xs);
        }
      }

      &__picture {
        width: 100px;
        height: auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      > div:nth-child(2) {
        display: flex;

        > div:first-of-type {
          display: ${({ isDesktop }) => (isDesktop ? "block" : "none")};
          width: calc(100px + 16px);
        }
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
      display: flex;
      text-align: center;
      margin-left: ${({ isDesktop }) => (isDesktop ? "auto" : 0)};

      button {
        flex: ${({ isDesktop }) => (isDesktop ? "auto" : 1)};
      }
    }
  }
`;

export default function Professional({ professional }: ProfessionalsType) {
  const { isDesktop } = useScreenSize();

  return (
    <ProfessionalCard className="professional" isDesktop={isDesktop}>
      <div className="professional__info">
        <div>
          <div className="professional__info__picture">
            <img
              width={100}
              height={100}
              src={`./professionals/${professional.picture}.webp`}
              alt={`Foto da pessoa ${professional.name}`}
            />
          </div>
          <div>
            <Title number={5}>{professional.name}</Title>
            <Text variant="Text-sm-high200">
              {`${professional.specialty}, ${professional.crm}`}
            </Text>
          </div>
        </div>
        <div>
          <div></div>
          <div>
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
        </div>
      </div>
      <div className="professional__services">
        <BtnText type={isDesktop ? "solid" : "outline"} color="emerald">
          Atendimentos
        </BtnText>
      </div>
    </ProfessionalCard>
  );
}
