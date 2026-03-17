import { Typography } from "@/components/atoms/typography";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { ProductCard } from "@/components/molecules/product-card";
import type { Product } from "@/types";

type ProductGridProps = {
  title: string;
  subtitle: string;
  products: Product[];
};

export function ProductGrid({ title, subtitle, products }: ProductGridProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <MotionReveal>
        <Typography variant="title">{title}</Typography>
        <Typography className="mt-2 max-w-xl">{subtitle}</Typography>
      </MotionReveal>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 2} />
        ))}
      </div>
    </section>
  );
}
