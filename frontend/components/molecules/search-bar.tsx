"use client";

import { Icon } from "@/components/atoms/icon";
import { cn } from "@/lib/cn";
import type { FormEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  className?: string;
};

export function SearchBar({
  value,
  onChange,
  onSubmit,
  className,
}: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex h-12 w-full items-center rounded-full border border-[var(--clay-border)] bg-white px-4",
        className,
      )}
      role="search"
    >
      <Icon name="search" className="mr-2 text-[var(--clay-muted)]" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search handcrafted ceramics"
        className="w-full border-0 bg-transparent text-sm text-[var(--clay-ink)] placeholder:text-[var(--clay-muted)] focus:outline-none"
        aria-label="Search products"
      />
    </form>
  );
}
