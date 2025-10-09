import useSession from "@/hooks/useSession";
import BtnIcon from "./button/BtnIcon";
import ExpandMore from "./icons/arrows/ExpandMore";

type PopoverProps = {};

function PopoverSignIn() {
  return <div></div>;
}

function PopoverSignOut() {
  return (
    <div className="account">
      <div className="avatar">G</div>
      <BtnIcon color="emerald" type="none" ariaLabel="Expandir">
        <ExpandMore />
      </BtnIcon>
    </div>
  );
}

export default function Popover({}: PopoverProps) {
  const { session } = useSession();

  return session.id ? <PopoverSignOut /> : <PopoverSignIn />;
}
