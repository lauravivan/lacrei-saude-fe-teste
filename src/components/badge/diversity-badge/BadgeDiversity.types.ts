import { Ethnicity } from "@/types/ethnicity";
import { GenderIdentity } from "@/types/genders";
import { Sexuality } from "@/types/sexuality";

export interface BadgeEthnicityType {
  label: Ethnicity;
  //   size: 16 | 24 | 32 | 40 | 48 | 56 | 64;
}

export interface BadgeSexualityType {
  label: Sexuality;
  //   size: 24 | 40;
}

export interface BadgeGenderIdentityType {
  label: GenderIdentity;
  //   size: 24 | 40;
}
