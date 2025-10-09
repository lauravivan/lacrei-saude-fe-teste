"use client";

import Professional from "./_components/cards/Professional";
import { useQuery } from "@tanstack/react-query";
import { getProfessionals } from "./_routes/getProfessionals";
import { Professional as ProfessionalType } from "@/types/professional";
import styled from "styled-components";
import Title from "@/components/Title";
import { useScreenSize } from "@/hooks/useScreenSize";
import Text from "@/components/Text";
import HeaderSignOut from "@/components/header/HeaderSignOut";

const ProfessionalsMain = styled.main`
  width: 90%;
  margin: 0 auto;

  h2,
  h3,
  > p {
    margin: var(--spacing-inset-m) var(--spacing-inset-xm);
  }

  .professionals {
    &__professionals {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: var(--spacing-l);
    }
  }
`;

export default function Professionals() {
  const { isDesktop } = useScreenSize();

  const { data: professionals } = useQuery({
    queryKey: ["professionals"],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const res = getProfessionals();
      return res;
    },
  });

  return (
    <>
      <HeaderSignOut showSignOut={true} showPopover={true} showSearch={true} />
      <ProfessionalsMain className="professionals">
        <Title number={isDesktop ? 2 : 3}>Profissionais disponíveis</Title>
        {professionals && (
          <Text variant="Text-base">
            {`${professionals.length} pessoas profissionais encontradas`}
          </Text>
        )}
        <div className="professionals__professionals">
          {professionals && professionals.length > 0 ? (
            professionals.map((professional: ProfessionalType) => (
              <Professional
                key={professional.id}
                professional={professional}
              ></Professional>
            ))
          ) : (
            <Text variant="Text-base">
              Não foram encontradas pessoas profissionais
            </Text>
          )}
        </div>
      </ProfessionalsMain>
    </>
  );
}
