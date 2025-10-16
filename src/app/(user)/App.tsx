"use client";

import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "@/styles/global";

const queryClient = new QueryClient();

type AppProps = { children?: React.ReactNode };

export default function App({ children }: AppProps) {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <div id="app">{children}</div>
      </QueryClientProvider>
    </Suspense>
  );
}
