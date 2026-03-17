import artisans from "@/data/artisans.json";
import products from "@/data/products.json";
import type { ArtisanStory, Product } from "@/types";

export function getProducts(): Product[] {
  return products as Product[];
}

export function getFeaturedProducts(limit = 3): Product[] {
  return getProducts().slice(0, limit);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((product) => product.slug === slug);
}

export function getProductCategories(): string[] {
  const categories = new Set(getProducts().map((product) => product.category));
  return ["All", ...Array.from(categories)];
}

export function getArtisans(): ArtisanStory[] {
  return artisans as ArtisanStory[];
}

export function getFeaturedArtisan(): ArtisanStory {
  return getArtisans()[0];
}
