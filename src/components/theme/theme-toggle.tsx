"use client";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function ThemeToggle() {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="absolute fixed bottom-0 right-0 m-6 animate-bounce hover:animate-none"
      onClick={toggleTheme}
    >
      {isDark ? (
        <Sun className="theme-toggle-dark h-[1.2rem] w-[1.2rem] w-10 h-10" />
      ) : (
        <Moon className="theme-toggle-dark h-[1.2rem] w-[1.2rem] w-10 h-10" />
      )}
    </Button>
  );
}

export default ThemeToggle;
