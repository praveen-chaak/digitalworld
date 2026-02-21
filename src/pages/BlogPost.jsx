import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="container-app py-10">
        <div className="text-sm text-zinc-700">Post not found.</div>
        <Link className="mt-3 inline-block underline" to="/blog">Back to blog</Link>
      </main>
    );
  }

  return (
    <main className="container-app py-8">
      <Link className="text-sm font-medium hover:underline" to="/blog">← Blog</Link>
      <div className="mt-3 text-xs text-zinc-600">{post.date}</div>
      <h1 className="mt-2 text-2xl font-semibold">{post.title}</h1>
      <div className="mt-4 rounded-3xl border border-zinc-200 p-6 text-sm leading-6 text-zinc-700">
        {post.content}
      </div>
    </main>
  );
}
