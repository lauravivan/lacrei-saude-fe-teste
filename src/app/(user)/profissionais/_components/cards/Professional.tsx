import { Professional as ProfessionalType } from "@/types/professional";
import { useScreenSize } from "@/hooks/useScreenSize";
import Image from "next/image";
import BadgeGenderIdentity from "@/components/badge/diversity-badge/BadgeGenderIdentity";
import BadgeEthnicity from "@/components/badge/diversity-badge/BadgeEthnicity";
import BadgeSexuality from "@/components/badge/diversity-badge/BadgeSexuality";
import BadgeService from "@/components/badge/service-badge/BadgeService";
import Button from "@/components/button/Button";
import {
  Card,
  Link,
  ProfessionalBio,
  ProfessionalIdentity,
  ProfessionalInfoContainer,
  ProfessionalName,
  ProfessionalPayment,
  ProfessionalPictureContainer,
  ProfessionalServices,
} from "./Professional.styles";

interface ProfessionalsProps {
  professional: ProfessionalType;
}

export default function Professional({ professional }: ProfessionalsProps) {
  const { isDesktop } = useScreenSize();

  return (
    <Card isDesktop={isDesktop}>
      <Link href={`/profissionais/${professional.id}`}>
        <ProfessionalInfoContainer isDesktop={isDesktop}>
          <div>
            <ProfessionalPictureContainer>
              <Image
                width={100}
                height={80}
                src={`/professionals/${professional.picture}.webp`}
                alt={`Foto da pessoa ${professional.name}`}
              />
            </ProfessionalPictureContainer>
            <div>
              <ProfessionalName isDesktop={isDesktop}>
                {professional.name}
              </ProfessionalName>
              <p>{`${professional.specialty}, ${professional.crm}`}</p>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <ProfessionalIdentity>
                <BadgeEthnicity label={professional.identity.race} />
                <BadgeGenderIdentity label={professional.identity.gender} />
                <BadgeSexuality label={professional.identity.sexuality} />
              </ProfessionalIdentity>
              <ProfessionalPayment>
                {professional.payment_options.map((po) => (
                  <BadgeService key={po}>{po}</BadgeService>
                ))}
              </ProfessionalPayment>
              {isDesktop && (
                <details>
                  <summary>Informações</summary>
                  <ProfessionalBio>{professional.bio}</ProfessionalBio>
                </details>
              )}
            </div>
          </div>
        </ProfessionalInfoContainer>
      </Link>
      <ProfessionalServices isDesktop={isDesktop}>
        <Button variant="Primary Button">Atendimentos</Button>
      </ProfessionalServices>
    </Card>
  );
}
