import { Metadata } from "next";
import App from "./App";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

export const metadata: Metadata = {
  title: "Lacrei Saúde - Desafio Técnico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <App>{children}</App>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
