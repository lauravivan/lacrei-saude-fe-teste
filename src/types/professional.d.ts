interface Identity {
  race: string;
  gender: string;
  sexuality: string;
}

interface ConsultationInfo {
  procedure: string;
  price: string;
  address: string;
  available_times: string[];
}

interface Professional {
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
