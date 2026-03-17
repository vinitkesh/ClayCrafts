"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { Typography } from "@/components/atoms/typography";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { useCart } from "@/components/providers/cart-provider";
import type { Product } from "@/types";

type ProductDetailViewProps = {
  product: Product;
};

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { triggerCartShake } = useCart();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <MotionReveal className="mb-6">
        <Typography variant="eyebrow">{product.category}</Typography>
        <Typography as="h1" variant="title" className="mt-2">
          {product.name}
        </Typography>
      </MotionReveal>

      <div className="grid gap-7 md:grid-cols-12">
        <MotionReveal className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.9rem] border border-[var(--clay-border)] bg-[var(--clay-soft)]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </MotionReveal>

        <MotionReveal className="md:col-span-5" delay={0.08}>
          <article className="rounded-[1.9rem] border border-[var(--clay-border)] bg-white p-6 md:p-8">
            <p className="font-sans text-xs tracking-[0.16em] text-[var(--clay-muted)] uppercase">
              Studio Description
            </p>
            <Typography className="mt-3">{product.description}</Typography>
            <p className="mt-7 font-sans text-lg font-semibold tracking-[0.06em] text-[var(--clay-accent)] uppercase">
              ${product.price.toFixed(2)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={triggerCartShake}>Add to Cart</Button>
              <Link href="/shop">
                <Button variant="ghost">Back to Shop</Button>
              </Link>
            </div>
            {product.badges?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[var(--clay-border)] bg-[var(--clay-soft)] px-3 py-1 font-sans text-[0.68rem] tracking-[0.1em] uppercase text-[var(--clay-muted)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        </MotionReveal>
      </div>
    </section>
  );
}
