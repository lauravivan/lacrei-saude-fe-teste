import Image from "next/image";
import ExpandMore from "@/components/icons/arrows/ExpandMore";
import { Username } from "./PopoverSignOut.styles";
import { Account } from "../Popover.styles";

interface PopoverSignOutProps {
  photo?: string;
  username: string;
  isDesktop: boolean;
}

const PopoverSignOut = ({
  photo,
  username,
  isDesktop,
}: PopoverSignOutProps) => {
  return (
    <Account isDesktop={isDesktop}>
      {photo ? (
        <Image src={photo} width={60} height={60} alt="Foto de perfil" />
      ) : (
        <div className="avatar">
          <Username isDesktop={isDesktop}>{username?.charAt(0)}</Username>
        </div>
      )}
      <ExpandMore />
    </Account>
  );
};

export default PopoverSignOut;
