"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/button";
import { Typography } from "@/components/atoms/typography";
import { useCart } from "@/components/providers/cart-provider";
import type { Product } from "@/types";

export type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
  priority?: boolean;
};

export function ProductCard({ product, onAddToCart, priority }: ProductCardProps) {
  const { triggerCartShake } = useCart();

  function handleAddToCart() {
    triggerCartShake();
    onAddToCart?.(product);
  }

  return (
    <motion.article
      className="group flex flex-col gap-4 rounded-3xl border border-[var(--clay-border)] bg-white p-4"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--clay-soft)]">
          <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: 0.35 }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover"
              priority={priority}
            />
          </motion.div>
        </div>
      </Link>

      <div className="space-y-2">
        <Typography as="h3" variant="title" className="text-xl md:text-2xl">
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </Typography>
        <Typography variant="muted" className="min-h-10">
          {product.summary}
        </Typography>
      </div>

      <div className="mt-auto flex items-center justify-between pt-1">
        <p className="font-sans text-sm font-semibold tracking-[0.08em] text-[var(--clay-accent)] uppercase">
          ${product.price.toFixed(2)}
        </p>
        <Button variant="ghost" className="h-9 px-4" onClick={handleAddToCart}>
          Add
        </Button>
      </div>
    </motion.article>
  );
}
