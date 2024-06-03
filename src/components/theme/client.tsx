"use client";
import { ThemeProvider } from "next-themes";

const ThemeClient = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default ThemeClient;
