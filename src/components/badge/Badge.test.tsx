import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BadgeBase from "./Badge";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

vi.mock("@/hooks/useScreenSize", () => ({
  useScreenSize: vi.fn(),
}));

import { useScreenSize } from "@/hooks/useScreenSize";

describe("BadgeBase", () => {
  beforeEach(() => {
    vi.mocked(useScreenSize).mockReturnValue({
      isDesktop: true,
      isMobile: false,
      isTablet: false,
    });
  });

  it("deve renderizar badge com texto", () => {
    render(
      <BadgeBase
        type="success"
        style="solid"
        contentType="text"
        text="Sucesso"
      />
    );

    expect(screen.getByText("Sucesso")).toBeInTheDocument();
  });

  it("deve renderizar badge com ícone", () => {
    render(
      <BadgeBase
        type="info"
        style="solid"
        contentType="text+icon"
        text="Com Ícone"
        Img={<CheckCircleIcon data-testid="icon" />}
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("deve renderizar diferentes tipos de badge", () => {
    const { rerender } = render(
      <BadgeBase type="error" style="solid" contentType="text" text="Erro" />
    );
    expect(screen.getByText("Erro")).toBeInTheDocument();

    rerender(
      <BadgeBase
        type="default"
        style="solid"
        contentType="text"
        text="Padrão"
      />
    );
    expect(screen.getByText("Padrão")).toBeInTheDocument();
  });
});
