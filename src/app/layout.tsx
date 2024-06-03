import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeClient from "@/components/theme/client";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/ui/header";
import ThemeToggle from "@/components/theme/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FileForge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeClient>
          <Header />
          <div className="main-content flex flex-row px-6 lg:px-24">
            {children}
            <Toaster />
          </div>
          <ThemeToggle />
        </ThemeClient>
      </body>
    </html>
  );
}
