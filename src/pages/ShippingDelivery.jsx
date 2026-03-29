import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeIndianRupee,
  Boxes,
  Clock3,
  Mail,
  Truck,
} from "lucide-react";

function PolicySection({ icon: Icon, title, children }) {
  return (
    <section className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-slate-900 p-3 text-white shadow-lg shadow-slate-900/10">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function ShippingDelivery() {
  return (
    <main className="container-app py-8 sm:py-10">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_65px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="border-b border-slate-200/80 bg-gradient-to-r from-cyan-50 via-white to-emerald-50 px-6 py-8 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            <Boxes className="h-3.5 w-3.5" />
            Digital World
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Shipping Method
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
            Shipping on Digital World is free. Digital software is delivered by email, while
            physical products such as PC parts are shipped through courier partners across
            India.
          </p>
        </div>

        <div className="grid gap-4 px-6 py-6 sm:px-8 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-900 p-3 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-950">Digital delivery</div>
                <div className="text-sm text-slate-600">Free by email on the same day</div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-900 p-3 text-white">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-950">Confirmation timeline</div>
                <div className="text-sm text-slate-600">Usually within 12 hours of order confirmation</div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-900 p-3 text-white">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-950">Physical shipping</div>
                <div className="text-sm text-slate-600">Ships in 2 days, delivery in 4 to 10 working days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <PolicySection icon={Mail} title="Shipping of Digital Software / Codes">
            <p>
              Shipping of digital software and license codes is completely free. Since these
              items are digital, we deliver the required product, license key, or download
              link by email.
            </p>
            <p>
              Customers will usually receive the required software details on the same day the
              order is placed. In most cases, delivery is completed within 12 hours after the
              order is confirmed.
            </p>
            <p>
              Shipping on{" "}
              <a
                href="https://digitalworldox.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-700 hover:text-cyan-800"
              >
                digitalworldox.com
              </a>{" "}
              is totally free for digital products.
            </p>
          </PolicySection>

          <PolicySection icon={Truck} title="Shipping of Physical Products">
            <p>
              Physical products such as PC parts and other hardware products are typically
              shipped within 2 days of order confirmation.
            </p>
            <p>
              Delivery usually takes 4 to 10 working days after shipment, depending on the
              destination and courier service coverage.
            </p>
            <p>
              Physical shipments are generally handled through courier partners such as
              Delhivery, Anjani, and DTDC.
            </p>
          </PolicySection>

          <PolicySection icon={BadgeIndianRupee} title="Shipping Charges">
            <p>
              Shipping on Digital World is free. Most of our items are digital and are
              delivered by email at no additional cost.
            </p>
            <p>
              Physical products are also shipped free unless a special charge is clearly
              mentioned before order confirmation.
            </p>
          </PolicySection>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <section className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-6 text-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Need Help?
            </div>
            <h2 className="mt-3 text-xl font-semibold text-white">Delivery support</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              If you do not receive your digital product details within the expected same-day
              window, please contact our team and we will help you quickly.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href="mailto:digitalworld9871@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-cyan-300" />
                digitalworld9871@gmail.com
              </a>

              <Link
                to="/contacts"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:bg-white/10"
              >
                <ArrowRight className="h-4 w-4 text-cyan-300" />
                Contact support
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
