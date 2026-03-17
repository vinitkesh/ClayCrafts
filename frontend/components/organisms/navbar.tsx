"use client";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/atoms/icon";
import { Typography } from "@/components/atoms/typography";
import { NavLink } from "@/components/molecules/nav-link";
import { useCart } from "@/components/providers/cart-provider";

const navItems = [
  { href: "/", label: "Collections" },
  { href: "/shop", label: "Shop" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartShakeTick } = useCart();
  const cartControls = useAnimationControls();

  useEffect(() => {
    if (cartShakeTick === 0) return;
    cartControls.start({
      rotate: [0, -14, 10, -8, 6, 0],
      x: [0, -1, 1, -1, 1, 0],
      transition: { duration: 0.45, ease: "easeInOut" },
    });
  }, [cartControls, cartShakeTick]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--clay-border)] bg-[var(--clay-bg)] backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="size-2 rounded-full bg-[var(--clay-accent)]" />
          <Typography as="span" variant="muted" className="font-semibold tracking-[0.14em] uppercase">
            La. Ta Studio
          </Typography>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
          <Link
            href="#artisan"
            className="text-xs tracking-[0.16em] uppercase text-[var(--clay-muted)] transition-colors hover:text-[var(--clay-ink)]"
          >
            Artisan
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--clay-border)] bg-white text-[var(--clay-ink)]"
            animate={cartControls}
            aria-label="Cart"
          >
            <Icon name="cart" />
          </motion.button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--clay-border)] bg-white text-[var(--clay-ink)] md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Icon name={isOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--clay-border)] bg-[var(--clay-bg)] md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={() => setIsOpen(false)}
                />
              ))}
              <Link
                href="#artisan"
                onClick={() => setIsOpen(false)}
                className="text-xs tracking-[0.16em] uppercase text-[var(--clay-muted)] transition-colors hover:text-[var(--clay-ink)]"
              >
                Artisan
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
