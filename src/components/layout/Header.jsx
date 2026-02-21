import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, Search, ShoppingCart, User, X } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "../../lib/cn";
import { categories } from "../../data/categories";
import { formatPrice } from "../../lib/format";
import { Button } from "../ui/Button";
import { useCart } from "../../context/useCart";

export function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const { state, dispatch, totals } = useCart();

  const cartCount = state.items.reduce((s, i) => s + i.qty, 0);

  const pages = useMemo(
    () => [
      { to: "/catalog", label: "Catalog" },
      { to: "/blog", label: "Blog" },
      { to: "/about", label: "About" },
      { to: "/contacts", label: "Contacts" },
    ],
    []
  );

  function onSearchSubmit(e) {
    e.preventDefault();
    navigate(`/catalog?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
      <div className="container-app flex items-center justify-between gap-3 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2">
            <img
              src="/logo-d.jpeg"
              alt="Digital World logo"
              className="h-9 w-9 rounded-lg object-cover ring-1 ring-slate-200"
            />
            <span className="text-xl font-bold tracking-tight text-slate-900">Digital World</span>
          </Link>

          <NavigationMenu.Root className="relative hidden md:block">
            <NavigationMenu.List className="flex items-center gap-1">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700",
                    "hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  )}
                >
                  Categories <ChevronDown className="h-4 w-4" />
                </NavigationMenu.Trigger>

                <NavigationMenu.Content className="absolute left-0 top-[calc(100%+10px)] w-[780px] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
                  <div className="grid grid-cols-3 gap-4">
                    {categories.map((col) => (
                      <div key={col.slug} className="rounded-xl border border-slate-200 bg-slate-50/60 p-3">
                        <div className="text-sm font-semibold text-slate-900">{col.name}</div>
                        <ul className="mt-2 space-y-1 text-sm text-slate-600">
                          {col.children.map((it) => (
                            <li key={it}>
                              <Link className="hover:text-slate-900" to={`/category/${col.slug}`}>
                                {it}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {pages.map((p) => (
                <NavigationMenu.Item key={p.to}>
                  <NavigationMenu.Link asChild>
                    <NavLink
                      to={p.to}
                      className={({ isActive }) =>
                        cn(
                          "rounded-xl px-3 py-2 text-sm font-medium",
                          isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                        )
                      }
                    >
                      {p.label}
                    </NavLink>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
            <NavigationMenu.Viewport />
          </NavigationMenu.Root>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <form
            onSubmit={onSearchSubmit}
            className="hidden w-full max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 md:flex"
          >
            <Search className="h-4 w-4 text-slate-500" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              placeholder="Search licenses, products..."
            />
          </form>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/85 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Account</span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_45px_rgba(15,23,42,0.14)]"
                sideOffset={10}
                align="end"
              >
                {["Orders", "Favorites", "Profile", "Settings", "Log out"].map((it) => (
                  <DropdownMenu.Item
                    key={it}
                    className="cursor-pointer rounded-lg px-3 py-2 text-sm text-slate-700 outline-none hover:bg-slate-100"
                  >
                    {it}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <button
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/85 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white"
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="ml-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-2 py-0.5 text-xs text-white">
              {cartCount}
            </span>
          </button>

          <Dialog.Root open={cartOpen} onOpenChange={setCartOpen}>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-slate-900/40" />
              <Dialog.Content className="fixed right-4 top-4 w-[390px] max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.2)]">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-base font-semibold text-slate-900">
                    Your cart
                  </Dialog.Title>
                  <Dialog.Close className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Close">
                    <X className="h-4 w-4" />
                  </Dialog.Close>
                </div>

                <div className="mt-4 space-y-3">
                  {state.items.length === 0 ? (
                    <div className="text-sm text-slate-600">Cart is empty.</div>
                  ) : (
                    state.items.map((it) => (
                      <div key={it.id} className="rounded-xl border border-slate-200 bg-slate-50/60 p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-medium text-slate-900">{it.title}</div>
                            <div className="mt-1 text-xs text-slate-600">Qty: {it.qty}</div>
                            <div className="mt-1 text-sm font-semibold text-slate-900">{formatPrice(it.price)}</div>
                          </div>
                          <button
                            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
                            onClick={() => dispatch({ type: "REMOVE", payload: it.id })}
                          >
                            remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-slate-600">Total</div>
                  <div className="text-lg font-semibold text-slate-900">{formatPrice(totals.total)}</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button variant="outline" onClick={() => { setCartOpen(false); navigate("/cart"); }}>
                    View cart
                  </Button>
                  <Button onClick={() => { setCartOpen(false); navigate("/checkout"); }}>
                    Checkout
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
