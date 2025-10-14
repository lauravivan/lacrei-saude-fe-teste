import dynamic from "next/dynamic";
import { BadgeSexualityType } from "./BadgeDiversity.types";
import BadgeDiversity from "./BadgeDiversity";

const BiFlag = dynamic(() => import("@/components/icons/flags/BiFlag"), {
  ssr: false,
});
const DemiFlag = dynamic(() => import("@/components/icons/flags/DemiFlag"), {
  ssr: false,
});
const GayFlag = dynamic(() => import("@/components/icons/flags/GayFlag"), {
  ssr: false,
});
const StraightFlag = dynamic(
  () => import("@/components/icons/flags/StraightFlag"),
  { ssr: false }
);
const LesbicFlag = dynamic(
  () => import("@/components/icons/flags/LesbicFlag"),
  { ssr: false }
);
const OtherFlag = dynamic(() => import("@/components/icons/flags/OtherFlag"), {
  ssr: false,
});
const PanFlag = dynamic(() => import("@/components/icons/flags/PanFlag"), {
  ssr: false,
});
const AssexualFlag = dynamic(
  () => import("@/components/icons/flags/AssexualFlag"),
  { ssr: false }
);

const BadgeSexuality = ({ label }: BadgeSexualityType) => {
  const badge1 = label === "Assexual" && (
    <BadgeDiversity img={<AssexualFlag />}>{label}</BadgeDiversity>
  );

  const badge2 = label === "Bissexual" && (
    <BadgeDiversity img={<BiFlag />}>{label}</BadgeDiversity>
  );

  const badge3 = label === "Demissexual" && (
    <BadgeDiversity img={<DemiFlag />}>{label}</BadgeDiversity>
  );

  const badge4 = label === "Gay" && (
    <BadgeDiversity img={<GayFlag />}>{label}</BadgeDiversity>
  );

  const badge5 = label === "Hétero" && (
    <BadgeDiversity img={<StraightFlag />}>{label}</BadgeDiversity>
  );

  const badge6 = label === "Lésbica" && (
    <BadgeDiversity img={<LesbicFlag />}>{label}</BadgeDiversity>
  );

  const badge7 = label === "Outra" && (
    <BadgeDiversity img={<OtherFlag />}>{label}</BadgeDiversity>
  );

  const badge8 = label === "Pansexual" && (
    <BadgeDiversity img={<PanFlag />}>{label}</BadgeDiversity>
  );

  return (
    badge1 || badge2 || badge3 || badge4 || badge5 || badge6 || badge7 || badge8
  );
};

export default BadgeSexuality;
