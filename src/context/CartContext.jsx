import { useEffect, useMemo, useReducer } from "react";
import { CartContext } from "./useCart";

const load = () => {
  try { return JSON.parse(localStorage.getItem("cart_items") || "[]"); }
  catch { return []; }
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const p = action.payload;
      const found = state.items.find((i) => i.id === p.id);
      const items = found
        ? state.items.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
        : [...state.items, { ...p, qty: 1 }];
      return { ...state, items };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case "SET_QTY": {
      const { id, qty } = action.payload;
      const items = state.items
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
      return { ...state, items };
    }
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: load() });

  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(state.items));
  }, [state.items]);

  const totals = useMemo(() => {
    const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0);
    return { subtotal, total: subtotal };
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch, totals }}>
      {children}
    </CartContext.Provider>
  );
}
