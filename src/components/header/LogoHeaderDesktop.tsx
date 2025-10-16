import Image from "next/image";
import LogoHeaderDesktopSVG from "@/assets/img/logo/logo-header-desktop.svg";

const LogoHeaderDesktop = () => {
  return (
    <Image
      src={LogoHeaderDesktopSVG}
      alt="Logo Lacrei Saúde"
      width={187}
      height={24}
    />
  );
};

export default LogoHeaderDesktop;
