import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { posts } from "../data/posts";
import { ProductCard } from "../components/product/ProductCard";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

const faqs = [
  {
    q: "How do I receive my license key after payment?",
    a: "Keys are delivered digitally right after successful payment. You can find them in your order details and email inbox.",
  },
  {
    q: "Are these licenses valid for fresh installations?",
    a: "Yes. Most products support clean installations, but always check each product description for exact activation type and edition.",
  },
  {
    q: "Do you provide support for activation issues?",
    a: "Yes. If activation fails, contact support with your order ID and screenshot. We help with troubleshooting and replacement when applicable.",
  },
  {
    q: "Can I use one key on multiple devices?",
    a: "It depends on the SKU. Single-device, bind, and volume/MAK licenses are listed separately with device counts in specs.",
  },
];

const promoSlides = [
  {
    id: "promo-1",
    image: "/promo-banner.webp",
    title: "Antivirus - Windows - MS Office",
    subtitle: "Save up to 90% and get instant delivery on email and WhatsApp.",
    ctaLabel: "Shop now",
    ctaTo: "/catalog",
  },
  {
    id: "promo-2",
    image: encodeURI("/ms office/ChatGPT-Image-Oct-17-2025-01_02_41-PM-600x600.webp"),
    title: "Office Licenses For Home & Business",
    subtitle: "From Office 2016 to Office 2024 with reliable activation support.",
    ctaLabel: "Explore Office",
    ctaTo: "/category/office",
  },
  {
    id: "promo-3",
    image: encodeURI("/windows/Windows11h_act-1-600x600.png.webp"),
    title: "Windows 10/11 Home & Pro Keys",
    subtitle: "OEM, Retail, and MAK options for personal and business setups.",
    ctaLabel: "Explore Windows",
    ctaTo: "/category/windows-desktop",
  },
  {
    id: "promo-4",
    image: encodeURI("/win server/Microsoft-Windows-Server-2022-Standard-600x600.jpg.webp"),
    title: "Windows Server & RDS CAL",
    subtitle: "Server 2019/2022/2025 and RDS licensing for teams at scale.",
    ctaLabel: "Explore Server",
    ctaTo: "/category/windows-server",
  },
];

export function Home() {
  const hotSelling = products
    .filter((p) => p.badge === "popular" || p.badge === "bulk" || p.rating >= 4.8)
    .slice(0, 4);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % promoSlides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + promoSlides.length) % promoSlides.length);
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const id = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => window.clearInterval(id);
  }, [isPaused]);

  return (
    <main>
      <section className="container-app py-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
          <div className="pointer-events-none absolute -right-16 -top-12 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-12 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative grid min-h-[320px] grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-10">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                New Digital Collection
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Modern licenses for work, teams, and enterprise.
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
                Instant delivery, genuine keys, and clean pricing across Office, Windows, and Server editions.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/catalog">
                  <Button className="px-5">Browse catalog</Button>
                </Link>
                <Link to="/category/office">
                  <Button variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                    Explore Office
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden items-center justify-center md:flex">
              <img
                src={encodeURI("/ms office/ChatGPT-Image-Oct-17-2025-01_02_41-PM-600x600.webp")}
                alt="Featured software bundle"
                className="h-56 w-full max-w-md rounded-2xl border border-white/20 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-app pb-10">
        <div
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-[0_20px_45px_rgba(15,23,42,0.2)]"
          role="region"
          aria-label="Promotional offers slider"
          aria-roledescription="carousel"
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              nextSlide();
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              prevSlide();
            }
          }}
        >
          {promoSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={index !== activeIndex}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-[220px] w-full object-cover md:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
              <div className="absolute inset-0 flex items-end md:items-center">
                <div className="w-full max-w-3xl p-5 md:p-10">
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-4xl">{slide.title}</h3>
                  <p className="mt-2 text-sm text-slate-200 md:text-base">{slide.subtitle}</p>
                  <Link to={slide.ctaTo} className="mt-4 inline-flex">
                    <Button className="px-4">{slide.ctaLabel}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 md:px-4">
            <button
              type="button"
              onClick={prevSlide}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Next slide"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
            {promoSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/60 ${
                  index === activeIndex ? "w-7 bg-white" : "w-2.5 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <div className="pointer-events-none h-[220px] md:h-[360px]" />
        </div>
      </section>

      <section className="container-app pb-10">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Trending products</h2>
            <p className="mt-1 text-sm text-slate-600">Best-selling keys and packs this week.</p>
          </div>
          <Link to="/catalog" className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-800">
            Shop all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="container-app pb-10">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Shop by Category</h2>
          <Link to="/catalog" className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-800">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/category/${cat.slug}`}>
              <Card className="h-full p-5">
                <p className="text-lg font-semibold text-slate-900">{cat.name}</p>
                <p className="mt-2 text-sm text-slate-600">{cat.children.slice(0, 3).join(" · ")}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-cyan-700">Explore</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-app pb-10">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">HOT SELLING PRODUCTS</h2>
          <Link to="/catalog?sort=price_desc" className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-800">
            More hot deals <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {hotSelling.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="container-app pb-10">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Latest Blog</h2>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-800">
            Read all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.id} className="p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">{post.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-800">
                Read post <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-app pb-14">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-1 text-sm text-slate-600">Quick answers about delivery, activation, and support.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-xl border border-slate-200 bg-white/80 p-4 open:bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-900">
                {item.q}
                <ChevronDown className="h-4 w-4 text-slate-500 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
