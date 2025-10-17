import Professional from "./Professional";
import { getProfessional } from "../_routes/getProfessionals";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;
  const professional = await getProfessional(id);

  return professional.id ? (
    <Professional professional={professional} />
  ) : (
    <p>Nada por aqui</p>
  );
}
