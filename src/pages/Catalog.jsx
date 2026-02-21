import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { brands } from "../data/brands";
import { ProductCard } from "../components/product/ProductCard";

export function Catalog() {
  const [sp, setSp] = useSearchParams();
  const q = (sp.get("q") || "").toLowerCase();
  const brand = sp.get("brand") || "all";
  const sort = sp.get("sort") || "popular";

  let list = products.filter((p) =>
    (!q || p.title.toLowerCase().includes(q)) &&
    (brand === "all" || p.brand === brand)
  );

  if (sort === "price_asc") list = [...list].sort((a,b) => a.price - b.price);
  if (sort === "price_desc") list = [...list].sort((a,b) => b.price - a.price);

  return (
    <main className="container-app py-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Catalog</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Browse products and use filters like the demo.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            className="rounded-2xl border border-zinc-200 px-3 py-2 text-sm"
            value={brand}
            onChange={(e) => { sp.set("brand", e.target.value); setSp(sp); }}
          >
            <option value="all">All brands</option>
            {brands.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>

          <select
            className="rounded-2xl border border-zinc-200 px-3 py-2 text-sm"
            value={sort}
            onChange={(e) => { sp.set("sort", e.target.value); setSp(sp); }}
          >
            <option value="popular">Popular</option>
            <option value="price_asc">Price: low → high</option>
            <option value="price_desc">Price: high → low</option>
          </select>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>

      {list.length === 0 ? (
        <div className="mt-6 text-sm text-zinc-600">
          No results. Try clearing filters.
        </div>
      ) : null}

      <div className="mt-8 text-sm text-zinc-700">
        Quick: <Link className="underline" to="/category/office">Office</Link>
      </div>
    </main>
  );
}
