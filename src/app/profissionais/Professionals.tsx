"use client";

import Professional from "./_components/_cards/Professional";
import { useQuery } from "@tanstack/react-query";
import { getProfessionals } from "./_routes/getProfessionals";
import { Professional as ProfessionalType } from "@/types/professional";
import styled from "styled-components";

const ProfessionalsMain = styled.main`
  width: 100%;

  .professionals__professionals {
    width: 100%;
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
    <ProfessionalsMain>
      <h3>Profissionais disponíveis</h3>
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
