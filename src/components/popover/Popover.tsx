import useSession from "@/hooks/useSession";
// import BtnIcon from "./button/BtnIcon";
// import ExpandMore from "./icons/arrows/ExpandMore";
import styled from "styled-components";
import Image from "next/image";
// import Title from "./title/Title";
import { useScreenSize } from "@/hooks/useScreenSize";

const Account = styled.div<{ isDesktop: boolean }>`
  display: flex;
  align-items: center;

  .avatar {
    display: flex;
    background-color: var(--emerald-20);
    border-radius: var(--border-radius-circle);
    width: ${({ isDesktop }) => (isDesktop ? "48px" : "24px")};
    height: ${({ isDesktop }) => (isDesktop ? "48px" : "24px")};
    align-items: center;
    justify-content: center;
  }

  .avatar + div {
    padding: 0;
  }
`;

function PopoverSignIn() {
  return <div></div>;
}

function PopoverSignOut({
  photo = "",
  username,
  isDesktop,
}: {
  photo?: string;
  username: string;
  isDesktop: boolean;
}) {
  return (
    <Account className="account" isDesktop={isDesktop}>
      {photo ? (
        <Image src={photo} width={60} height={60} alt="Foto de perfil" />
      ) : (
        <div className="avatar">
          {/* <Title number={isDesktop ? 3 : 5}>{username?.charAt(0)}</Title> */}
        </div>
      )}
      {/* <BtnIcon color="emerald" type="none" ariaLabel="Expandir">
        <ExpandMore />
      </BtnIcon> */}
    </Account>
  );
}

export default function Popover() {
  const { session } = useSession();
  const { isDesktop } = useScreenSize();

  return session.id ? (
    <PopoverSignOut
      photo={session.photo}
      username={session.username}
      isDesktop={isDesktop}
    />
  ) : (
    <PopoverSignIn />
  );
}
