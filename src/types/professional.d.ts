import { Ethnicity } from "./ethnicity";
import { GenderIdentity } from "./genders";
import { Sexuality } from "./sexuality";

interface Identity {
  race: Ethnicity;
  gender: GenderIdentity;
  sexuality: Sexuality;
}

interface ConsultationInfo {
  procedure: string;
  price: string;
  address: string;
  available_times: string[];
}

interface Professional {
  id: string;
  name: string;
  crm: string;
  bio: string;
  identity: Identity;
  specialty: string;
  expertise: string;
  rating: number;
  experience_years: number;
  education: string;
  languages: string[];
  phone: string;
  consultation_info: ConsultationInfo;
}
