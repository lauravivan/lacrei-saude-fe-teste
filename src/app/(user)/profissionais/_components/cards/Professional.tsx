import { Professional as ProfessionalType } from "@/types/professional";
import styled from "styled-components";
import { useScreenSize } from "@/hooks/useScreenSize";
import Image from "next/image";
import BadgeGenderIdentity from "@/components/badge/diversity-badge/BadgeGenderIdentity";
import BadgeEthnicity from "@/components/badge/diversity-badge/BadgeEthnicity";
import BadgeSexuality from "@/components/badge/diversity-badge/BadgeSexuality";
import spacing from "@/styles/tokens/spacing";
import effects from "@/styles/tokens/effects";
import headline from "@/styles/mixins/headline/headline";
import text from "@/styles/mixins/text";
import colors from "@/styles/tokens/colors";
import BadgeService from "@/components/badge/service-badge/BadgeService";
import Button from "@/components/button/Button";

type ProfessionalsType = {
  professional: ProfessionalType;
};

const ProfessionalCard = styled.article<{ isDesktop: boolean }>`
  display: flex;
  margin: ${spacing["spacing-inline-m"]} ${spacing["spacing-inset-xm"]};
  column-gap: ${spacing["spacing-inset-m"]};
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  box-shadow: ${effects["shadow-sm"]};
  padding: ${spacing["spacing-s"]};
  border-radius: ${effects["border-radius-sm"]};

  .professional {
    &__name {
      ${({ isDesktop }) =>
        isDesktop
          ? headline["Headline-sm-high200"]("left")
          : text["Text-xl-high200"]};
      color: ${({ isDesktop }) => !isDesktop && colors["emerald-60"]};
    }

    &__name + p {
      ${text["Text-xs-high200"]}
    }

    &__info {
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
      margin-top: ${spacing["spacing-s"]};
      display: flex;
      gap: ${spacing["spacing-inline-xs"]};
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: ${spacing["spacing-inline-xs"]};
    }

    &__payment {
      display: flex;
      gap: ${spacing["spacing-inline-xs"]};
      margin-bottom: ${spacing["spacing-inline-m"]};
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
    <ProfessionalCard isDesktop={isDesktop}>
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
            <p className="professional__name">{professional.name}</p>
            <p>{`${professional.specialty}, ${professional.crm}`}</p>
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
                <BadgeService key={po}>{po}</BadgeService>
              ))}
            </div>
            {isDesktop && (
              <details>
                <summary>Informações</summary>
                {/* <Text variant="Text-base">{professional.bio}</Text> */}
              </details>
            )}
          </div>
        </div>
      </div>
      <div className="professional__services">
        <Button variant="Primary Button">Atendimentos</Button>
      </div>
    </ProfessionalCard>
  );
}
