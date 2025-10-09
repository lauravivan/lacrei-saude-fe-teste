"use client";

import Professional from "./_components/cards/Professional";
import { useQuery } from "@tanstack/react-query";
import { getProfessionals } from "./_routes/getProfessionals";
import { Professional as ProfessionalType } from "@/types/professional";
import styled from "styled-components";
import Text from "@/components/Text";
import HeaderSignOut from "@/components/header/HeaderSignOut";
import Footer from "@/components/footer/Footer";

const ProfessionalsMain = styled.main`
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
      row-gap: var(--spacing-inset-xxs);
    }
  }
`;

export default function Professionals() {
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
      <a href="#main-content" className="skiplink">
        Ir para o conteúdo principal
      </a>
      <HeaderSignOut showSignOut={true} showPopover={true} showSearch={true} />
      <ProfessionalsMain className="professionals" id="main-content">
        {professionals && (
          <Text variant="Text-base">
            {`Encontramos ${professionals.length} resultados`}
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
      <Footer />
    </>
  );
}
