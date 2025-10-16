import button from "@/styles/mixins/button/button/button";
import React from "react";
import styled from "styled-components";

type VariantType = Extract<
  keyof typeof button,
  "Primary Button" | "Secondary Button" | "Critical Button"
>;

const Btn = styled.button<{ variant: VariantType }>`
  ${({ variant }) => button[variant]()}
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: React.ReactElement<SVGElement>;
  variant: VariantType;
}

const Button = ({ children, icon, variant }: ButtonProps) => {
  return (
    <Btn variant={variant}>
      {icon && icon}
      {children}
    </Btn>
  );
};

export default Button;
