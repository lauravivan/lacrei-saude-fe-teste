import Image from "next/image";
import LogoHeaderSVG from "@/assets/img/logo/logo-header-mobile.svg";

const LogoHeader = () => {
  return (
    <Image src={LogoHeaderSVG} alt="Logo Lacrei Saúde" width={150} height={60} />
  );
};

export default LogoHeader;
