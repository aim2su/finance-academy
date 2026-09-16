import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
  align = "center",
}: Props) {
  return (
    <section id={id} className={cn("max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24", className)}>
      {(eyebrow || title || subtitle) && (
        <div className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <span className="inline-block text-xs uppercase tracking-widest text-accent font-medium mb-3">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-muted leading-relaxed">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}