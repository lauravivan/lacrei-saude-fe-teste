import { it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/footer/Footer";

vi.mock("@/hooks/useScreenSize", () => ({
  useScreenSize: () => ({ isDesktop: true }),
}));

it("should contain navigable links", () => {
  render(<Footer />);

  expect(screen.getByText("Lacrei Saúde")).toBeInTheDocument();
  expect(screen.getByText("Pessoas Profissionais")).toBeInTheDocument();
  expect(screen.getByText("Política de privacidade")).toBeInTheDocument();
  expect(screen.getByText("Termos de Uso")).toBeInTheDocument();
});

it("should show CNPJ", () => {
  render(<Footer />);

  expect(screen.getByText("CNPJ: 51.265.351/0001-65")).toBeInTheDocument();
});

it("should contain 4 social media buttons", () => {
  const footer = render(<Footer />);

  const socialMediaList = footer.container.querySelector("#social-media");
  const socialButtons = socialMediaList?.querySelectorAll("li");

  expect(socialButtons).toHaveLength(4);
});

it("should show logo Lacrei Saúde in desktop mode", () => {
  render(<Footer />);
  expect(screen.getByAltText("Logo Lacrei Saúde")).toBeInTheDocument();
});

it("should contain aria-labels in the social media icons", () => {
  render(<Footer />);

  expect(
    screen.getByLabelText("facebook site externo - abrirá uma nova janela")
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText("instagram site externo - abrirá uma nova janela")
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText("linkedin site externo - abrirá uma nova janela")
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText(
      "e-mail site externo - abrirá uma nova janela com seu e-mail como remetente e a lacrei saúde como destinatário"
    )
  ).toBeInTheDocument();
});
