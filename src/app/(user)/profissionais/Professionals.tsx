"use client";

import Professional from "./_components/cards/Professional";
import { useQuery } from "@tanstack/react-query";
import { getProfessionals } from "./_routes/getProfessionals";
import { Professional as ProfessionalType } from "@/types/professional";
import HeaderSignOut from "@/components/header/header-sign-out/HeaderSignOut";
import Footer from "@/components/footer/Footer";
import SkipLink from "@/components/skip-link/SkipLink";
import {
  ProfessionalsContainer,
  ProfessionalsResults,
  Text,
} from "./_Professionals.styles";

const Professionals = () => {
  const { data: professionals } = useQuery({
    queryKey: ["professionals"],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const res = await getProfessionals();
      return res;
    },
  });

  return (
    <>
      <SkipLink href="#main-content">Ir para o conteúdo principal</SkipLink>
      <HeaderSignOut showSignOut={true} showPopover={true} showSearch={true} />
      <ProfessionalsContainer id="main-content">
        {professionals && (
          <Text>{`Encontramos ${professionals.length} resultados`}</Text>
        )}
        <ProfessionalsResults>
          {professionals && professionals.length > 0 ? (
            professionals.map((professional: ProfessionalType) => (
              <Professional key={professional.id} professional={professional} />
            ))
          ) : (
            <Text>Não foram encontradas pessoas profissionais</Text>
          )}
        </ProfessionalsResults>
      </ProfessionalsContainer>
      <Footer />
    </>
  );
};

export default Professionals;