import Image from "next/image";
import LogoHeaderDesktopSVG from "@/assets/img/logo/logo-header-desktop.svg";
import {Loader as LoaderContainer } from './Loader.styles';

const Loader = () => {
  return (
    <LoaderContainer>
      <Image
        src={LogoHeaderDesktopSVG}
        alt="Logo Lacrei Saúde"
        width={187}
        height={24}
      />
      <p>Carregando...</p>
    </LoaderContainer>
  );
};

export default Loader;
