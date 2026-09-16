import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full px-4 py-3 rounded-xl bg-card border border-border",
        "text-text placeholder:text-muted text-sm",
        "focus:outline-none focus:border-accent transition-colors",
        className
      )}
      {...props}
    />
  );
}