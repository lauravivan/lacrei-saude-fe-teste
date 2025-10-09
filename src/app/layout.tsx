import { Metadata } from "next";
import App from "./(user)/App";
import StyledComponentsRegistry from "@/lib/registry";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lacrei Saúde - Desafio Técnico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body>
        <StyledComponentsRegistry>
          <App>{children}</App>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
