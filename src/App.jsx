import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Category } from "./pages/Category";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { ReturnRefundPolicy } from "./pages/ReturnRefundPolicy";
import { ShippingDelivery } from "./pages/ShippingDelivery";
import { TermsConditions } from "./pages/TermsConditions";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/category/:slug", element: <Category /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:slug", element: <BlogPost /> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/return-refund-policy", element: <ReturnRefundPolicy /> },
      { path: "/shipping-delivery", element: <ShippingDelivery /> },
      { path: "/terms-and-conditions", element: <TermsConditions /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
