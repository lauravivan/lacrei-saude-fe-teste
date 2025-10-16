"use client";

import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "@/styles/global";

const queryClient = new QueryClient();

interface AppProps {
  children?: React.ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Suspense>
        <QueryClientProvider client={queryClient}>
          <div id="app">{children}</div>
        </QueryClientProvider>
      </Suspense>
    </>
  );
}
