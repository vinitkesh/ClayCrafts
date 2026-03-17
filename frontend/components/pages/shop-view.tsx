"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/atoms/button";
import { Typography } from "@/components/atoms/typography";
import { SearchBar } from "@/components/molecules/search-bar";
import { ProductCard } from "@/components/molecules/product-card";
import type { Product } from "@/types";

type ShopViewProps = {
  products: Product[];
  categories: string[];
};

export function ShopView({ products, categories }: ShopViewProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.summary.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, products, query]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-12">
      <Typography variant="eyebrow">Collection Directory</Typography>
      <Typography as="h1" variant="title" className="mt-2">
        Shop ClayCraft Pieces
      </Typography>
      <Typography className="mt-3 max-w-xl">
        Browse handcrafted ceramics by category and discover the piece that fits your space.
      </Typography>

      <div className="mt-8 flex flex-col gap-4">
        <SearchBar value={query} onChange={setQuery} />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === activeCategory ? "solid" : "ghost"}
              className="h-9 px-4"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 2} />
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-[var(--clay-border)] bg-white p-8 text-center">
          <Typography as="p" variant="title" className="text-2xl">
            No pieces found
          </Typography>
          <Typography className="mt-2">Try another keyword or select a different category.</Typography>
        </div>
      ) : null}
    </section>
  );
}
