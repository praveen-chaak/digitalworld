import { Link } from "react-router-dom";
import { Heart, Scale, Star } from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { formatPrice } from "../../lib/format";
import { useCart } from "../../context/useCart";
import { getProductImages } from "../../lib/productImages";

export function ProductCard({ p }) {
  const { dispatch } = useCart();
  const image = getProductImages(p)[0];

  return (
    <Card className="group p-3">
      <div className="relative">
        {p.badge ? (
          <Badge className="absolute left-2 top-2 z-10 bg-slate-900 text-white">{p.badge}</Badge>
        ) : null}
        <Link to={`/product/${p.id}`}>
          <img
            src={image}
            alt={p.title}
            className="aspect-[4/3] w-full rounded-xl border border-slate-200 object-cover transition duration-300 group-hover:scale-[1.015]"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="mt-3 text-xs text-slate-500">{p.categoryLabel}</div>
      <div className="mt-1 line-clamp-2 text-sm font-semibold text-slate-900">
        <Link className="hover:text-cyan-700" to={`/product/${p.id}`}>{p.title}</Link>
      </div>

      <div className="mt-2 flex items-center gap-1 text-xs text-amber-500">
        <Star className="h-3.5 w-3.5 fill-current" />
        <span>{p.rating}</span>
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        {p.oldPrice ? <span className="text-xs text-slate-400 line-through">{formatPrice(p.oldPrice)}</span> : null}
        <span className="text-lg font-semibold text-slate-900">{formatPrice(p.price)}</span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2">
          <button className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-100" aria-label="Favorite">
            <Heart className="h-4 w-4" />
          </button>
          <button className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-100" aria-label="Compare">
            <Scale className="h-4 w-4" />
          </button>
        </div>
        <Button
          variant="primary"
          className="px-3 py-2 text-xs"
          disabled={!p.stock}
          onClick={() => dispatch({ type: "ADD", payload: p })}
        >
          Add to cart
        </Button>
      </div>
    </Card>
  );
}
