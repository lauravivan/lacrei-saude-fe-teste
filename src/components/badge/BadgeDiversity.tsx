import { Sexuality } from "@/types/sexuality";
import BadgeBase, { BadgeType } from "./Badge";
import { Ethnicity } from "@/types/ethnicity";
import { GenderIdentity } from "@/types/genders";
import LesbicFlag from "../icons/AssexualFlag";
import BiFlag from "../icons/BiFlag";
import DemiFlag from "../icons/DemiFlag";
import GayFlag from "../icons/GayFlag";
import StraightFlag from "../icons/StraightFlag";
import AssexualFlag from "../icons/AssexualFlag";
import OtherSexFlag from "../icons/OtherSexFlag";
import PanFlag from "../icons/PanFlag";

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

function BadgeDiversity({
  style,
  type,
  contentType,
  text,
  iconCode,
  Img,
}: BadgeType) {
  return (
    <BadgeBase
      type={type}
      style={style}
      contentType={contentType}
      text={text}
      iconCode={iconCode}
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
      iconCode="\u270C\uFE0F"
    />
  );

  const badge2 = label === "Branca" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      iconCode="\u270C\uFE0F\uD83C\uDFFB"
    />
  );

  const badge3 = label === "Indígena" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      iconCode="\u270C\uFE0F\uD83C\uDFFD"
    />
  );

  const badge4 = label === "Parda" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      iconCode="\u270C\uFE0F\uD83C\uDFFE"
    />
  );

  const badge5 = label === "Preta" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      iconCode="\u270C\uFE0F\uD83C\uDFFF"
    />
  );

  const badge6 = label === "Other" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      iconCode="\u270C\uFE0F"
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
      Img={<OtherSexFlag />}
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
    />
  );

  const badge2 = label === "Homem Cis" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
    />
  );

  const badge3 = label === "Mulher Cis" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
    />
  );

  const badge4 = label === "Fluído" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
      iconCode="\u270C\uFE0F\uD83C\uDFFE"
    />
  );

  const badge5 = label === "Intersexo" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
    />
  );

  const badge6 = label === "Não Binária" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
    />
  );

  const badge7 = label === "Outra" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
    />
  );

  const badge8 = label === "Homem Trans" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
    />
  );

  const badge9 = label === "Mulher Trans" && (
    <BadgeDiversity
      type="default"
      style="solid"
      contentType="text+icon"
      text={label}
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
