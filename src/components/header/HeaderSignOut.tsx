import Header from "./Header";
import BtnIcon from "../button/BtnIcon";
import Popover from "../Popover";
import Help from "../icons/Help";
import { useScreenSize } from "@/hooks/useScreenSize";
import BtnText from "../button/BtnText";
import styled from "styled-components";

export type HeaderSignOutProps = {
  showSearch?: boolean;
  showPopover?: boolean;
  showSignOut?: boolean;
};

const Container = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  > div:first-of-type {
    margin-right: var(--spacing-2-xs);
  }
`;

export default function HeaderSignOut({
  showSearch = false,
  showPopover = false,
  showSignOut = false,
}: HeaderSignOutProps) {
  const { isDesktop } = useScreenSize();

  return (
    <Header>
      <Container>
        {isDesktop ? (
          <BtnText type="outline" color="emerald">
            Ajuda
          </BtnText>
        ) : (
          <BtnIcon color="emerald" type="none" ariaLabel="Botão de ajuda">
            <Help />
          </BtnIcon>
        )}
        {showPopover && <Popover />}
        {showSignOut && <div></div>}
      </Container>
    </Header>
  );
}
