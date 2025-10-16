import buttonIcon from "@/styles/mixins/button/button-icon/button-icon";
import React from "react";
import styled from "styled-components";

const Btn = styled.button<{ variant: keyof typeof buttonIcon }>`
  ${({ variant }) => buttonIcon[variant]()}
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement<SVGElement>;
  variant: keyof typeof buttonIcon;
}

const Button = ({ children, variant }: ButtonProps) => {
  return <Btn variant={variant}>{children}</Btn>;
};

export default Button;
