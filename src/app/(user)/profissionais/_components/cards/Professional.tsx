import {
  BadgeEthnicity,
  BadgeGenderIdentity,
  BadgeSexuality,
} from "@/components/badge/BadgeDiversity";
import { Professional as ProfessionalType } from "@/types/professional";
import styled from "styled-components";
import Text from "@/components/Text";
import { BadgeService } from "@/components/badge/BadgeService";
import { useScreenSize } from "@/hooks/useScreenSize";
import Image from "next/image";
import BtnLinkText from "@/components/button/BtnLinkText";

type ProfessionalsType = {
  professional: ProfessionalType;
};

const ProfessionalCard = styled.article<{ isDesktop: boolean }>`
  display: flex;
  margin: var(--spacing-inset-m) var(--spacing-inset-xm);
  column-gap: var(--spacing-inset-m);
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-s);
  border-radius: var(--border-radius-sm);

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
        width: 60px;
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
          width: calc(60px + 16px);
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

      .btn-container,
      .btn-container button {
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
            <Image
              width={100}
              height={100}
              src={`/professionals/${professional.picture}.webp`}
              alt={`Foto da pessoa ${professional.name}`}
            />
          </div>
          <div>
            <Text variant="Text-xl-high200" color="emerald-60">
              {professional.name}
            </Text>
            <Text variant="Text-xs-high200">
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
            {isDesktop && (
              <details>
                <summary>Informações</summary>
                <Text variant="Text-base">{professional.bio}</Text>
              </details>
            )}
          </div>
        </div>
      </div>
      <div className="professional__services">
        <BtnLinkText
          href={`/profissionais/${professional.id}`}
          type={isDesktop ? "solid" : "outline"}
          color="emerald"
          target="_self"
        >
          Atendimentos
        </BtnLinkText>
      </div>
    </ProfessionalCard>
  );
}
