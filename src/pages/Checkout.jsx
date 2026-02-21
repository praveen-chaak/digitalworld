import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useCart } from "../context/useCart";
import { formatPrice } from "../lib/format";

export function Checkout() {
  const { totals } = useCart();
  return (
    <main className="container-app py-8">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 p-5">
          <div className="text-sm font-semibold">Shipping</div>
          <div className="mt-3 space-y-2">
            <Input placeholder="Full name" />
            <Input placeholder="Phone" />
            <Input placeholder="Address" />
            <Input placeholder="City" />
          </div>
          <div className="mt-5 text-sm font-semibold">Payment</div>
          <div className="mt-3 space-y-2">
            <Input placeholder="Card number" />
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="MM/YY" />
              <Input placeholder="CVC" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 p-5">
          <div className="text-sm font-semibold">Order summary</div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span>Total</span>
            <span className="font-semibold">{formatPrice(totals.total)}</span>
          </div>
          <Button className="mt-5 w-full">Place order</Button>
          <div className="mt-3 text-xs text-zinc-600">
            Demo checkout (no payment integration).
          </div>
        </div>
      </div>
    </main>
  );
}
