"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

export function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      className="rounded-full"
      variant="outline"
      size="icon"
      onClick={handleThemeToggle}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#228be6]" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-yellow-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
