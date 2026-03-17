import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TypographyVariant = "eyebrow" | "display" | "title" | "body" | "muted";

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const variantClassMap: Record<TypographyVariant, string> = {
  eyebrow: "font-sans text-xs tracking-[0.2em] uppercase text-[var(--clay-muted)]",
  display: "font-display text-4xl leading-[0.95] text-[var(--clay-ink)] md:text-6xl",
  title: "font-display text-3xl leading-tight text-[var(--clay-ink)] md:text-4xl",
  body: "font-sans text-base leading-relaxed text-[var(--clay-muted)]",
  muted: "font-sans text-sm leading-relaxed text-[var(--clay-muted)]",
};

export function Typography<T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? "p";

  return (
    <Component className={cn(variantClassMap[variant], className)} {...props}>
      {children}
    </Component>
  );
}
