"use client";

import Professional from "./_components/_cards/Professional";
import { useQuery } from "@tanstack/react-query";
import { getProfessionals } from "./_routes/getProfessionals";
import { Professional as ProfessionalType } from "@/types/professional";
import styled from "styled-components";
import Title from "@/components/Title";
import { useScreenSize } from "@/hooks/useScreenSize";

const ProfessionalsMain = styled.main`
  width: 100%;

  h2,
  h3,
  form {
    margin: var(--spacing-inset-m) var(--spacing-inset-xm);
  }

  .professionals__professionals {
    width: 100%;
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
    <ProfessionalsMain>
      <Title number={isDesktop ? 2 : 3}>Profissionais disponíveis</Title>
      <form>
        <input placeholder="Buscar por nome, especialidade ou localização..." />
      </form>
      <div className="professionals__professionals">
        {professionals && professionals.length > 0 ? (
          professionals.map((professional: ProfessionalType) => (
            <Professional
              key={professional.id}
              professional={professional}
            ></Professional>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </ProfessionalsMain>
  );
}
