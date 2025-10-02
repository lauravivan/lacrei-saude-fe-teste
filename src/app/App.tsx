"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import GlobalStyles from "@/GlobalStyles";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ children }: { children?: React.ReactNode }) {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div id="app">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
