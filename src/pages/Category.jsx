import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { ProductCard } from "../components/product/ProductCard";

export function Category() {
  const { slug } = useParams();
  const cat = categories.find((c) => c.slug === slug);
  const list = products.filter((p) => p.categorySlug === slug);

  return (
    <main className="container-app py-8">
      <h1 className="text-2xl font-semibold">{cat?.name || "Category"}</h1>
      <p className="mt-1 text-sm text-zinc-600">
        {cat?.children?.join(" · ") || "Products"}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </main>
  );
}
