"use client";

import ProfessionalsCard from "./_components/_cards/Professionals";
import { useQuery } from "@tanstack/react-query";
import { getProfessionals } from "./_routes/getProfessionals";

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
    <main>
      <h3>Profissionais disponíveis</h3>
      <form>
        <input placeholder="Buscar por nome, especialidade ou localização..." />
      </form>
      <span>profissionais encontrados</span>
      <div>
        {professionals && professionals.length > 0 ? (
          professionals.map((professional: Professional) => (
            <ProfessionalsCard professional={professional}></ProfessionalsCard>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
}
