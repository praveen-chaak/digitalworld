import * as Tabs from "@radix-ui/react-tabs";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { formatPrice } from "../lib/format";
import { Button } from "../components/ui/Button";
import { useCart } from "../context/useCart";
import { getProductImages } from "../lib/productImages";

export function Product() {
  const { id } = useParams();
  const p = products.find((x) => String(x.id) === String(id));
  const { dispatch } = useCart();
  const images = p ? getProductImages(p) : [];

  if (!p) {
    return (
      <main className="container-app py-10">
        <div className="text-sm text-zinc-700">Product not found.</div>
        <Link className="mt-3 inline-block underline" to="/catalog">Back to catalog</Link>
      </main>
    );
  }

  return (
    <main className="container-app py-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <img
            src={images[0]}
            alt={p.title}
            className="aspect-square w-full rounded-3xl border border-zinc-200 object-cover"
          />
          <div className="mt-3 grid grid-cols-4 gap-2">
            {images.slice(0, 4).map((img, i) => (
              <img
                key={`${img}-${i}`}
                src={img}
                alt={`${p.title} ${i + 1}`}
                className="aspect-square w-full rounded-xl border border-zinc-200 object-cover"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs text-zinc-600">{p.brand} · {p.categoryLabel}</div>
          <h1 className="mt-2 text-2xl font-semibold">{p.title}</h1>
          <div className="mt-3 text-2xl font-semibold">{formatPrice(p.price)}</div>
          <p className="mt-3 text-sm leading-6 text-zinc-700">{p.description}</p>

          <div className="mt-4 flex gap-2">
            <Button
              disabled={!p.stock}
              onClick={() => dispatch({ type: "ADD", payload: p })}
            >
              Add to cart
            </Button>
            <Button variant="outline" onClick={() => dispatch({ type: "CLEAR" })}>
              Clear cart (demo)
            </Button>
          </div>

          <div className="mt-6 rounded-3xl border border-zinc-200 p-4">
            <Tabs.Root defaultValue="description">
              <Tabs.List className="flex gap-2 border-b border-zinc-200">
                {["description", "specs", "reviews"].map((t) => (
                  <Tabs.Trigger
                    key={t}
                    value={t}
                    className="px-3 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-zinc-900"
                  >
                    {t}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <Tabs.Content value="description" className="py-4 text-sm text-zinc-700">
                {p.description}
              </Tabs.Content>
              <Tabs.Content value="specs" className="py-4 text-sm text-zinc-700">
                <ul className="list-disc pl-5">
                  {(p.specs || []).map((s) => <li key={s}>{s}</li>)}
                </ul>
              </Tabs.Content>
              <Tabs.Content value="reviews" className="py-4 text-sm text-zinc-700">
                No reviews yet (dummy).
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </div>
    </main>
  );
}
