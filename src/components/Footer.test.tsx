import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterComponent from "./Footer";

describe("FooterComponent", () => {
  it("deve renderizar os links de navegação principais", () => {
    render(<FooterComponent />);

    expect(screen.getByText("Lacrei Saúde")).toBeInTheDocument();
    expect(screen.getByText("Pessoas Profissionais")).toBeInTheDocument();
  });

  it("deve renderizar o CNPJ", () => {
    render(<FooterComponent />);

    expect(screen.getByText("CNPJ: 51.265.351/0001-65")).toBeInTheDocument();
  });

  it("deve renderizar 4 botões de redes sociais", () => {
    const { container } = render(<FooterComponent />);

    const socialMediaList = container.querySelector(".footer__social-media");
    const socialButtons = socialMediaList?.querySelectorAll("li");

    expect(socialButtons).toHaveLength(4);
  });
});
