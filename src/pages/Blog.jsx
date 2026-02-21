import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export function Blog() {
  return (
    <main className="container-app py-8">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-semibold">Blog</h1>
        <Link className="text-sm font-medium hover:underline" to="/">Home</Link>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-3xl border border-zinc-200 bg-white p-5 hover:bg-zinc-50">
            <div className="text-xs text-zinc-600">{p.date}</div>
            <div className="mt-2 text-base font-semibold">{p.title}</div>
            <div className="mt-2 text-sm text-zinc-700">{p.excerpt}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
