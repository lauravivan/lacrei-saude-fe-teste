import PeaceSign from "@/components/icons/hands/PeaceSign";
import BadgeDiversity from "./BadgeDiversity";
import { BadgeEthnicityType } from "./BadgeDiversity.types";

const BadgeEthnicity = ({ label }: BadgeEthnicityType) => {
  const badge1 = label === "Amarela" && (
    <BadgeDiversity img={<PeaceSign color="#FFCC4D" />}>{label}</BadgeDiversity>
  );

  const badge2 = label === "Branca" && (
    <BadgeDiversity img={<PeaceSign color="#FADCBC" />}>{label}</BadgeDiversity>
  );

  const badge3 = label === "Indígena" && (
    <BadgeDiversity img={<PeaceSign color="#BF8F68" />}>{label}</BadgeDiversity>
  );

  const badge4 = label === "Parda" && (
    <BadgeDiversity img={<PeaceSign color="#9B643D" />}>{label}</BadgeDiversity>
  );

  const badge5 = label === "Preta" && (
    <BadgeDiversity img={<PeaceSign color="#5C3D1E" />}>{label}</BadgeDiversity>
  );

  const badge6 = label === "Other" && (
    <BadgeDiversity img={<PeaceSign color="#C0C0C0" />}>{label}</BadgeDiversity>
  );

  return badge1 || badge2 || badge3 || badge4 || badge5 || badge6;
}

export default BadgeEthnicity;