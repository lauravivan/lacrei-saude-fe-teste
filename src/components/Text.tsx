import styled from "styled-components";

type TextType = {
  variant:
    | "Text-xl-high200"
    | "Text-xl"
    | "Text-base"
    | "Text-base-high200"
    | "Text-sm"
    | "Text-xs"
    | "Text-xs-high200"
    | "Text-sm-high200";
  children: string;
};

const Text = styled.p<{ fontSize: number; fontWeight: 400 | 700 | 600 }>`
  font-size: ${(fontSize) => fontSize + "px"};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 150%;
  color: #000;
  margin: 0;
`;

export default function TextComponent({ variant, children }: TextType) {
  const text1 = variant === "Text-xl-high200" && (
    <Text fontSize={18} fontWeight={700}>
      {children}
    </Text>
  );
  const text2 = variant === "Text-xl" && (
    <Text fontSize={18} fontWeight={400}>
      {children}
    </Text>
  );
  const text3 = variant === "Text-base" && (
    <Text fontSize={16} fontWeight={400}>
      {children}
    </Text>
  );
  const text4 = variant === "Text-base-high200" && (
    <Text fontSize={16} fontWeight={700}>
      {children}
    </Text>
  );
  const text5 = variant === "Text-sm" && (
    <Text fontSize={14} fontWeight={400}>
      {children}
    </Text>
  );
  const text6 = variant === "Text-xs" && (
    <Text fontSize={12} fontWeight={400}>
      {children}
    </Text>
  );
  const text7 = variant === "Text-xs-high200" && (
    <Text fontSize={12} fontWeight={700}>
      {children}
    </Text>
  );
  const text8 = variant === "Text-sm-high200" && (
    <Text fontSize={14} fontWeight={600}>
      {children}
    </Text>
  );

  return text1 || text2 || text3 || text4 || text5 || text6 || text7 || text8;
}
