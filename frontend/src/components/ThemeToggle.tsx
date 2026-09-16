"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/cn";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Переключить тему"
      className={cn(
        "relative h-9 w-16 rounded-full border border-border bg-card/60",
        "flex items-center px-1 transition-colors"
      )}
    >
      <span
        className={cn(
          "absolute h-7 w-7 rounded-full bg-accent flex items-center justify-center",
          "transition-transform duration-300",
          isDark ? "translate-x-0" : "translate-x-7"
        )}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-white" />
        ) : (
          <Sun className="h-4 w-4 text-white" />
        )}
      </span>
    </button>
  );
}