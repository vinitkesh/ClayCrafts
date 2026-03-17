import { ShopView } from "@/components/pages/shop-view";
import { getProductCategories, getProducts } from "@/lib/data";

export default function ShopPage() {
  const products = getProducts();
  const categories = getProductCategories();

  return <ShopView products={products} categories={categories} />;
}
