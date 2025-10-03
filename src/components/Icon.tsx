import { useMemo } from "react";
import styled from "styled-components";
import twemoji from "twemoji";
import parse from "html-react-parser";

type IconType = {
  size: number;
  code: string;
};

const Icon = styled.div<{ size: number }>`
  max-width: ${({ size }) => `${size}px`};

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

function unescapeUnicode(str: string) {
  return str.replace(/\\u([\dA-Fa-f]{4})/g, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );
}

export default function IconComponent({ size, code }: IconType) {
  const emoji = useMemo(() => {
    const parsed = twemoji.parse(unescapeUnicode(code), {
      folder: "icon",
      base: "/",
      ext: ".svg",
    });
    return parse(parsed);
  }, []);

  return <Icon size={size}>{emoji}</Icon>;
}
