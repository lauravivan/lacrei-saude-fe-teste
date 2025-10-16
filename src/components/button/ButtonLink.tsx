import button from "@/styles/mixins/button/button/button";
import React from "react";
import styled from "styled-components";

type VariantType = Extract<keyof typeof button, "Button Link">;

const BtnLink = styled.a<{ variant: VariantType }>`
  ${({ variant }) => button[variant]()}
`;

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  icon?: React.ReactElement<SVGElement>;
  variant: VariantType;
}

const ButtonLink = ({ children, icon, variant, href, target }: ButtonLinkProps) => {
  return (
    <BtnLink variant={variant} href={href} target={target}>
      {icon && icon}
      {children}
    </BtnLink>
  );
};

export default ButtonLink;
