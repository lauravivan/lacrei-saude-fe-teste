import dynamic from "next/dynamic";
import { BadgeGenderIdentityType } from "./BadgeDiversity.types";
import BadgeDiversity from "./BadgeDiversity";

const CisFlag = dynamic(() => import("@/components/icons/flags/CisFlag"), {
  ssr: false,
});
const GenderFluidFlag = dynamic(
  () => import("@/components/icons/flags/GenderFluidFlag"),
  { ssr: false }
);
const IntersexFlag = dynamic(
  () => import("@/components/icons/flags/IntersexFlag"),
  { ssr: false }
);
const NonBinaryFlag = dynamic(
  () => import("@/components/icons/flags/NonBinaryFlag"),
  { ssr: false }
);
const OtherFlag = dynamic(() => import("@/components/icons/flags/OtherFlag"), {
  ssr: false,
});
const TransFlag = dynamic(() => import("@/components/icons/flags/TransFlag"), {
  ssr: false,
});
const AgenderFlag = dynamic(
  () => import("@/components/icons/flags/AgenderFlag"),
  { ssr: false }
);

const BadgeGenderIdentity = ({ label }: BadgeGenderIdentityType) => {
  const badge1 = label === "Agênero" && (
    <BadgeDiversity img={<AgenderFlag />}>{label}</BadgeDiversity>
  );

  const badge2 = label === "Homem Cis" && (
    <BadgeDiversity img={<CisFlag />}>{label}</BadgeDiversity>
  );

  const badge3 = label === "Mulher Cis" && (
    <BadgeDiversity img={<CisFlag />}>{label}</BadgeDiversity>
  );

  const badge4 = label === "Fluído" && (
    <BadgeDiversity img={<GenderFluidFlag />}>{label}</BadgeDiversity>
  );

  const badge5 = label === "Intersexo" && (
    <BadgeDiversity img={<IntersexFlag />}>{label}</BadgeDiversity>
  );

  const badge6 = label === "Não Binária" && (
    <BadgeDiversity img={<NonBinaryFlag />}>{label}</BadgeDiversity>
  );

  const badge7 = label === "Outra" && (
    <BadgeDiversity img={<OtherFlag />}>{label}</BadgeDiversity>
  );

  const badge8 = label === "Homem Trans" && (
    <BadgeDiversity img={<TransFlag />}>{label}</BadgeDiversity>
  );

  const badge9 = label === "Mulher Trans" && (
    <BadgeDiversity img={<TransFlag />}>{label}</BadgeDiversity>
  );

  return (
    badge1 ||
    badge2 ||
    badge3 ||
    badge4 ||
    badge5 ||
    badge6 ||
    badge7 ||
    badge8 ||
    badge9
  );
};

export default BadgeGenderIdentity;
