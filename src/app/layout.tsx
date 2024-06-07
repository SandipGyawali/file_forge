"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeClient from "@/components/theme/client";
import { Toaster } from "@/components/ui/toaster";
import ThemeToggle from "@/components/theme/theme-toggle";
import { SessionProvider } from "next-auth/react";
import { FolderIdContextProvider } from "@/context/parentFolderIdContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeClient>
            <FolderIdContextProvider>
              {children}
              <Toaster />
              <ThemeToggle />
            </FolderIdContextProvider>
          </ThemeClient>
        </body>
      </html>
    </SessionProvider>
  );
}
