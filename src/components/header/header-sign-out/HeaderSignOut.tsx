import Header from "../Header";
import Help from "../../icons/Help";
import { useScreenSize } from "@/hooks/useScreenSize";
import styled from "styled-components";
import Popover from "../../popover/Popover";
import Button from "@/components/button/Button";
import ButtonIcon from "@/components/button/ButtonIcon";
import spacing from "@/styles/tokens/spacing";
import colors from "@/styles/tokens/colors";

const Container = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  > div:first-of-type {
    margin-right: ${spacing["spacing-2-xs"]};
  }

  svg {
    fill: ${colors["emerald-60"]};
  }
`;

interface HeaderSignOutProps {
  showSearch?: boolean;
  showPopover?: boolean;
  showSignOut?: boolean;
}

export default function HeaderSignOut({
  showPopover = false,
  showSignOut = false,
}: HeaderSignOutProps) {
  const { isDesktop } = useScreenSize();

  return (
    <Header>
      <Container>
        {isDesktop ? (
          <Button variant="Secondary Button">Ajuda</Button>
        ) : (
          <ButtonIcon variant="Ghost Button Icon">
            <Help />
          </ButtonIcon>
        )}
        {showPopover && <Popover />}
        {showSignOut && <div></div>}
      </Container>
    </Header>
  );
}
