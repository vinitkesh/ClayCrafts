"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export function NavLink({ href, label, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-xs tracking-[0.16em] uppercase transition-colors duration-200",
        isActive
          ? "text-[var(--clay-ink)]"
          : "text-[var(--clay-muted)] hover:text-[var(--clay-ink)]",
      )}
    >
      {label}
    </Link>
  );
}
