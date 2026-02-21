import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { formatPrice } from "../lib/format";
import { Button } from "../components/ui/Button";

export function Cart() {
  const { state, dispatch, totals } = useCart();

  return (
    <main className="container-app py-8">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-semibold">Cart</h1>
        <Link className="text-sm font-medium hover:underline" to="/catalog">Continue shopping</Link>
      </div>

      <div className="mt-5 space-y-3">
        {state.items.length === 0 ? (
          <div className="rounded-3xl border border-zinc-200 p-6 text-sm text-zinc-700">
            Cart is empty.
          </div>
        ) : (
          state.items.map((it) => (
            <div key={it.id} className="rounded-3xl border border-zinc-200 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold">{it.title}</div>
                  <div className="mt-1 text-xs text-zinc-600">{formatPrice(it.price)} each</div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    className="w-20 rounded-2xl border border-zinc-200 px-3 py-2 text-sm"
                    value={it.qty}
                    onChange={(e) => dispatch({ type: "SET_QTY", payload: { id: it.id, qty: Number(e.target.value) } })}
                  />
                  <button
                    className="rounded-2xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
                    onClick={() => dispatch({ type: "REMOVE", payload: it.id })}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-lg font-semibold">Total: {formatPrice(totals.total)}</div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => dispatch({ type: "CLEAR" })}>Clear</Button>
          <Button onClick={() => (window.location.href = "/checkout")}>Checkout</Button>
        </div>
      </div>
    </main>
  );
}
