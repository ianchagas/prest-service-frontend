"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // State to track if the component is mounted
  const [mounted, setMounted] = React.useState(false);

  // Set mounted to true after the component mounts
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
      localStorage.setItem("theme", "light");
    }

    setMounted(true);
  }, []);

  // Render nothing on the server
  if (!mounted) {
    return null;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
