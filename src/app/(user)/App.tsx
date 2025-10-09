"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import GlobalStyles from "@/GlobalStyles";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type AppProps = { children?: React.ReactNode };

export default function App({ children }: AppProps) {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div id="app">{children}</div>
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
