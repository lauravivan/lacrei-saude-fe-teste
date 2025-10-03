import { Sexuality } from "@/types/sexuality";
import BadgeBase, { BadgeType } from "./Badge";
import { Ethnicity } from "@/types/ethnicity";
import { GenderIdentity } from "@/types/genders";
import LesbicFlag from "../icons/flags/AssexualFlag";
import BiFlag from "../icons/flags/BiFlag";
import DemiFlag from "../icons/flags/DemiFlag";
import GayFlag from "../icons/flags/GayFlag";
import StraightFlag from "../icons/flags/StraightFlag";
import AssexualFlag from "../icons/flags/AssexualFlag";
import PanFlag from "../icons/flags/PanFlag";
import PeaceSign from "../icons/hands/PeaceSign";
import AgenderFlag from "../icons/flags/AgenderFlag";
import CisFlag from "../icons/flags/CisFlag";
import GenderFluidFlag from "../icons/flags/GenderFluidFlag";
import IntersexFlag from "../icons/flags/IntersexFlag";
import NonBinaryFlag from "../icons/flags/NonBinaryFlag";
import TransFlag from "../icons/flags/TransFlag";
import OtherFlag from "../icons/flags/OtherFlag";

type BadgeEthnicityType = {
  label: Ethnicity;
  //   size: 16 | 24 | 32 | 40 | 48 | 56 | 64;
};

type BadgeSexualityType = {
  label: Sexuality;
  //   size: 24 | 40;
};

type BadgeGenderIdentityType = {
  label: GenderIdentity;
  //   size: 24 | 40;
};

function BadgeDiversity({ style, type, contentType, text, Img }: BadgeType) {
  return (
    <BadgeBase
      type={type}
      style={style}
      contentType={contentType}
      text={text}
      Img={Img}
    />
  );
}

export function BadgeEthnicity({ label }: BadgeEthnicityType) {
  const badge1 = label === "Amarela" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<PeaceSign color="#FFCC4D" />}
    />
  );

  const badge2 = label === "Branca" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<PeaceSign color="#FADCBC" />}
    />
  );

  const badge3 = label === "Indígena" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<PeaceSign color="#BF8F68" />}
    />
  );

  const badge4 = label === "Parda" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<PeaceSign color="#9B643D" />}
    />
  );

  const badge5 = label === "Preta" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<PeaceSign color="#5C3D1E" />}
    />
  );

  const badge6 = label === "Other" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<PeaceSign color="#C0C0C0" />}
    />
  );

  return badge1 || badge2 || badge3 || badge4 || badge5 || badge6;
}

export function BadgeSexuality({ label }: BadgeSexualityType) {
  const badge1 = label === "Assexual" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<AssexualFlag />}
    />
  );

  const badge2 = label === "Bissexual" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<BiFlag />}
    />
  );

  const badge3 = label === "Demissexual" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<DemiFlag />}
    />
  );

  const badge4 = label === "Gay" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<GayFlag />}
    />
  );

  const badge5 = label === "Hétero" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<StraightFlag />}
    />
  );

  const badge6 = label === "Lésbica" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<LesbicFlag />}
    />
  );

  const badge7 = label === "Outra" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<OtherFlag />}
    />
  );

  const badge8 = label === "Pansexual" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<PanFlag />}
    />
  );

  return (
    badge1 || badge2 || badge3 || badge4 || badge5 || badge6 || badge7 || badge8
  );
}

export function BadgeGenderIdentity({ label }: BadgeGenderIdentityType) {
  const badge1 = label === "Agênero" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<AgenderFlag />}
    />
  );

  const badge2 = label === "Homem Cis" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<CisFlag />}
    />
  );

  const badge3 = label === "Mulher Cis" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<CisFlag />}
    />
  );

  const badge4 = label === "Fluído" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<GenderFluidFlag />}
    />
  );

  const badge5 = label === "Intersexo" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<IntersexFlag />}
    />
  );

  const badge6 = label === "Não Binária" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<NonBinaryFlag />}
    />
  );

  const badge7 = label === "Outra" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<OtherFlag />}
    />
  );

  const badge8 = label === "Homem Trans" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<TransFlag />}
    />
  );

  const badge9 = label === "Mulher Trans" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      Img={<TransFlag />}
    />
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
}
