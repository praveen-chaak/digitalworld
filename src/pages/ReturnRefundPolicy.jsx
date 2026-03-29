import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeIndianRupee,
  Boxes,
  Clock3,
  LaptopMinimalCheck,
  Mail,
  ShieldCheck,
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

export function ReturnRefundPolicy() {
  return (
    <main className="container-app py-8 sm:py-10">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_65px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="border-b border-slate-200/80 bg-gradient-to-r from-cyan-50 via-white to-emerald-50 px-6 py-8 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Digital World
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Return / Refund Policy
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
            This page explains how Digital World handles returns, cancellations, replacements,
            and refunds for software licenses, desktop systems, and hardware products.
          </p>
        </div>

        <div className="grid gap-4 px-6 py-6 sm:px-8 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-900 p-3 text-white">
                <LaptopMinimalCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-950">Software licenses</div>
                <div className="text-sm text-slate-600">Generally non-returnable once delivered</div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-900 p-3 text-white">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-950">Refund timing</div>
                <div className="text-sm text-slate-600">Typically processed within 24 to 48 hours</div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-900 p-3 text-white">
                <Boxes className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-950">Hardware policy</div>
                <div className="text-sm text-slate-600">Cancellation before shipping only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <PolicySection icon={LaptopMinimalCheck} title="Return and Refund Policy for Software">
            <p>
              Once a software license has been delivered to the customer through Email or
              WhatsApp, it cannot normally be returned and the amount cannot usually be
              refunded. This is because the software can be redeemed online, and once a
              license is redeemed, it may no longer work on another PC.
            </p>
            <p>
              If a customer places a wrong order by mistake, they should contact us on the
              same day. Our team will verify whether the shared license key is unused and was
              ordered by mistake. If that is confirmed, we will refund the full amount to the
              customer.
            </p>
            <p>
              If a customer does not receive any license key after successful payment, we will
              refund the paid amount within 24 to 48 hours.
            </p>
            <p>
              A refund will also be provided if the software license shared with the customer
              is incorrect or if the customer faces a genuine activation issue with the
              provided license.
            </p>
          </PolicySection>

          <PolicySection icon={Boxes} title="Cancellation Policy for Hardware">
            <p>
              Customers can cancel hardware orders before the material is shipped. Once the
              order has been shipped, cancellation is not allowed.
            </p>
            <p>
              If the order is cancelled before shipping, 100% of the amount will be
              transferred to the customer&apos;s bank account within 48 hours, and the same may
              reflect in the bank account within 24 to 48 hours depending on banking
              timelines.
            </p>
          </PolicySection>

          <PolicySection icon={BadgeIndianRupee} title="Refund and Replacement Policy for Hardware">
            <p>
              In case of order cancellation before shipping, the full amount will be refunded
              within 48 hours, and the refunded amount may reflect in the customer&apos;s account
              within 24 to 48 hours.
            </p>
            <p>
              In case a product requires replacement, we will initiate a refund only if we
              are unable to replace or repair the product within 30 days of receiving the
              faulty item.
            </p>
            <p>
              If the product is rejected by the respective company or brand, the same
              unrepaired product will be dispatched back to the customer.
            </p>
          </PolicySection>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <section className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-6 text-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Support
            </div>
            <h2 className="mt-3 text-xl font-semibold text-white">Need refund help?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              If you ordered the wrong license, did not receive your license key, or are
              facing an activation issue, please contact our team as soon as possible.
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
