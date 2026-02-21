import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-dvh text-slate-900">
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
