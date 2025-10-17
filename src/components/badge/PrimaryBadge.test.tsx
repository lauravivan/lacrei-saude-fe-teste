import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useScreenSize } from "@/hooks/useScreenSize";
import PrimaryBadge from "./PrimaryBadge";

vi.mock("@/hooks/useScreenSize", () => ({
  useScreenSize: vi.fn(),
}));

describe("PrimaryBadge", () => {
  beforeEach(() => {
    vi.mocked(useScreenSize).mockReturnValue({
      isDesktop: true,
      isMobile: false,
      isTablet: false,
    });
  });

  it("should show text when passed as children", () => {
    render(
      <PrimaryBadge variant="Primary Badge/Success" children="Badge text" />
    );
    expect(screen.getByText("Badge text")).toBeInTheDocument();
  });

  it("should show icon when passed via prop img", () => {
    const IconMock = () => <svg data-testid="icon" />;
    render(
      <PrimaryBadge
        variant="Primary Badge/Info"
        children="Icon"
        img={<IconMock />}
      />
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });
});
