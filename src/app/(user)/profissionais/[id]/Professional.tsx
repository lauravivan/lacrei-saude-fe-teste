"use client";

import Footer from "@/components/footer/Footer";
import HeaderSignOut from "@/components/header/header-sign-out/HeaderSignOut";
import { Professional as ProfessionalType } from "@/types/professional";
import Image from "next/image";
import {
  Main,
  ProfessionalBio,
  ProfessionalHeader,
  ProfessionalName,
} from "./_Professional.styles";

interface ProfessionalProps {
  professional: ProfessionalType;
}

const Professional = ({ professional }: ProfessionalProps) => {
  return (
    <>
      <HeaderSignOut showSignOut={true} showPopover={true} showSearch={true} />
      <Main>
        <ProfessionalHeader>
          <Image
            width={60}
            height={60}
            src={`/professionals/${professional.picture}.webp` || ""}
            alt="Foto do profissional"
          />
          <div>
            <ProfessionalName>{professional.name}</ProfessionalName>
          </div>
        </ProfessionalHeader>
        <ProfessionalBio>{professional.bio}</ProfessionalBio>
      </Main>
      <Footer />
    </>
  );
};

export default Professional;
