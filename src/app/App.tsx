"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import GlobalStyles from "@/GlobalStyles";

export default function App({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div id="app">
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
