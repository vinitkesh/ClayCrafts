import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "ghost" | "link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClassMap: Record<ButtonVariant, string> = {
  solid:
    "bg-[var(--clay-accent)] text-white border border-transparent hover:bg-[var(--clay-accent-dark)]",
  ghost:
    "bg-transparent text-[var(--clay-ink)] border border-[var(--clay-border)] hover:bg-[var(--clay-soft)]",
  link: "bg-transparent text-[var(--clay-ink)] border border-transparent hover:text-[var(--clay-accent)]",
};

export function Button({
  variant = "solid",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--clay-ink)] focus-visible:ring-offset-2",
        variantClassMap[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
