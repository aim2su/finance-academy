import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium",
        "transition-all duration-200 active:scale-[0.98] disabled:opacity-50",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-7 py-3.5 text-base",
        variant === "primary" &&
          "bg-btn text-white hover:brightness-110 shadow-lg shadow-btn/20",
        variant === "outline" &&
          "border border-accent text-accent hover:bg-accent hover:text-white",
        variant === "ghost" && "text-text hover:bg-card",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}