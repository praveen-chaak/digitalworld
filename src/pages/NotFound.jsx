import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <main className="container-app py-12">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="mt-2 text-sm text-zinc-700">Page not found.</p>
      <Link className="mt-4 inline-block underline" to="/">Go home</Link>
    </main>
  );
}
