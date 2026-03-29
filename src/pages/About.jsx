import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Globe,
  LaptopMinimalCheck,
  Phone,
  Receipt,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    value: "Since 2003",
    label: "Trusted IT business experience serving customers across India.",
  },
  {
    value: "100,000+",
    label: "Software licenses successfully delivered to growing businesses and individuals.",
  },
  {
    value: "80+",
    label: "Variants available across antivirus, Microsoft Windows, and Microsoft Office.",
  },
  {
    value: "Pan India",
    label: "Focused on connecting reliable software access to customers nationwide.",
  },
];

const categories = [
  {
    title: "Antivirus",
    description:
      "Protection solutions from Quick Heal, Kaspersky, K7, McAfee, NPAV, Guardian, ESET, and more.",
  },
  {
    title: "Microsoft Windows",
    description:
      "Windows licenses for individuals, professionals, and business environments at competitive pricing.",
  },
  {
    title: "Microsoft Office",
    description:
      "MS Office licenses designed to help teams and individuals work smarter every day.",
  },
  {
    title: "IT Peripherals",
    description:
      "Desktop PCs and essential IT parts delivered with a value-first approach for every customer.",
  },
];

export function About() {
  return (
    <main className="container-app py-8 sm:py-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_65px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-cyan-100/80 via-white to-emerald-100/80" />
        <div className="absolute -left-12 top-12 h-36 w-36 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              <Building2 className="h-3.5 w-3.5" />
              About Digital World
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]">
              Software, security, and IT solutions built around trust, value, and long-term service.
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              Welcome to Digital World, your trusted partner for software licenses,
              antivirus solutions, Microsoft products, and IT peripherals. We have been
              in the IT business since 2003 and continue to serve both B2B and B2C
              customers with reliable service, competitive pricing, and practical
              solutions that help them thrive in the digital age.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              With a strong presence across India and more than 100,000 licenses
              delivered, we are committed to making premium software more accessible and
              affordable. Our website,{" "}
              <a
                href="https://digitalworldox.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-700 hover:text-cyan-800"
              >
                digitalworldox.com
              </a>{" "}
              , has been serving customers online since August 2021 with the goal of
              reaching users across Pan India directly.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(16,185,129,0.28)] transition hover:from-cyan-600 hover:to-emerald-600"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-900 p-3 text-white">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-950">Business Model</div>
                  <div className="text-sm text-slate-600">Serving both B2B and B2C customers</div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-900 p-3 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-950">Product Focus</div>
                  <div className="text-sm text-slate-600">Software licenses, security, and IT essentials</div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-900 p-3 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-950">Mission</div>
                  <div className="text-sm text-slate-600">
                    Deliver minimum prices and dependable service to valuable customers across India.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => (
          <article
            key={item.value}
            className="rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
          >
            <div className="text-2xl font-semibold tracking-tight text-slate-950">{item.value}</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.label}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
            What We Offer
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Broad product coverage for home users, professionals, and businesses.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {categories.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white p-3 text-slate-900 shadow-sm ring-1 ring-slate-200">
                    <LaptopMinimalCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <section className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-6 text-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Company Details
            </div>
            <div className="mt-5 space-y-4 text-sm leading-7">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <div className="text-base font-semibold text-white">M/s. Digital World</div>
                <div className="mt-1 text-slate-300">Partnership firm</div>
              </div>

              <div className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <Receipt className="mt-1 h-4 w-4 text-cyan-300" />
                <div>
                  <div className="font-medium text-white">GST Number</div>
                  <div className="text-slate-300">07CNAPG4642K1Z1</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <Phone className="mt-1 h-4 w-4 text-cyan-300" />
                <div>
                  <div className="font-medium text-white">Contact Number</div>
                  <a href="tel:+919871919791" className="text-slate-300 hover:text-white">
                    9871919791
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <Building2 className="mt-1 h-4 w-4 text-cyan-300" />
                <div>
                  <div className="font-medium text-white">Partner</div>
                  <div className="text-slate-300">Mr. Gitigya Gaur</div>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
            Our Story
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Built to deliver genuine value in software and IT purchasing.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            Digital World was built on a simple idea: premium software and dependable IT
            products should be easy to access, fairly priced, and backed by responsive
            support. From software licensing to antivirus subscriptions and computer
            peripherals, we work to keep the buying experience straightforward and
            trustworthy.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            We continue to grow by focusing on customer satisfaction, practical pricing,
            and consistent service quality. Whether you are securing one personal device
            or purchasing at scale for your business, our team is here to help you choose
            the right product with confidence.
          </p>
        </div>
      </section>
    </main>
  );
}
