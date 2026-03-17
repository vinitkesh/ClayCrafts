import { ArtisanFeature } from "@/components/organisms/artisan-feature";
import { Hero } from "@/components/organisms/hero";
import { JoinCircle } from "@/components/organisms/join-circle";
import { ProductGrid } from "@/components/organisms/product-grid";
import { getFeaturedArtisan, getFeaturedProducts } from "@/lib/data";

export default function Home() {
  const featuredProducts = getFeaturedProducts(4);
  const featuredArtisan = getFeaturedArtisan();

  return (
    <>
      <Hero />
      <ProductGrid
        title="Curated Essentials"
        subtitle="A focused edit of pieces that pair clean silhouettes with tactile glazing."
        products={featuredProducts}
      />
      <ArtisanFeature artisan={featuredArtisan} />
      <JoinCircle />
    </>
  );
}
