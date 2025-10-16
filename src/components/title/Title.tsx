import headline from "@/styles/mixins/headline/headline";
import styled from "styled-components";

const TitleXL = styled.h1<{ alignment: string }>`
  ${({ alignment }) => headline["Headline-xl"](alignment)}
`;

const TitleLG = styled.h2<{ alignment: string }>`
  ${({ alignment }) => headline["Headline-lg"](alignment)}
`;

const TitleBase = styled.h3<{ alignment: string }>`
  ${({ alignment }) => headline["Headline-base"](alignment)}
`;

const TitleSM = styled.h4<{ alignment: string }>`
  ${({ alignment }) => headline["Headline-sm"](alignment)}
`;

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: "XL" | "LG" | "BASE" | "SM";
  children: string;
  alignment: "left" | "right" | "center";
}

export default function Title({ variant, children, alignment }: TitleProps) {
  const h1 = variant === "XL" && (
    <TitleXL alignment={alignment}>{children}</TitleXL>
  );
  const h2 = variant === "LG" && (
    <TitleLG alignment={alignment}>{children}</TitleLG>
  );
  const h3 = variant === "BASE" && (
    <TitleBase alignment={alignment}>{children}</TitleBase>
  );
  const h4 = variant === "SM" && (
    <TitleSM alignment={alignment}>{children}</TitleSM>
  );

  return h1 || h2 || h3 || h4;
}
