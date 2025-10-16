import colors from "@/styles/tokens/colors";
import styled from "styled-components";

const SkipLink = styled.a`
  display: flex;
  color: ${colors["gray-10"]};
  background: ${colors["emerald-60"]};
  font-weight: 700;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  top: -100px;
  left: 0px;
  z-index: 100;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  margin: 0.25rem;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

export default SkipLink;