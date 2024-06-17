"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
};

export default Providers;
