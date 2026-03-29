import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BadgeAlert,
  FileText,
  Gavel,
  Mail,
  Scale,
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

export function TermsConditions() {
  return (
    <main className="container-app py-8 sm:py-10">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_65px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="border-b border-slate-200/80 bg-gradient-to-r from-cyan-50 via-white to-emerald-50 px-6 py-8 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            <FileText className="h-3.5 w-3.5" />
            Digital World
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Terms &amp; Conditions and Disclaimer
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
            These terms explain the rules, responsibilities, and limitations that apply when
            you access or use the Digital World website.
          </p>
        </div>

        <div className="grid gap-4 px-6 py-6 sm:px-8 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="text-sm font-semibold text-slate-950">Who these terms apply to</div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              The terms "We", "Us", "Our", and "Company" refer to Digital World. The terms
              "Visitor" and "User" refer to all people accessing or using the website.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="text-sm font-semibold text-slate-950">Important note</div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              If you do not accept these Terms and Conditions, please discontinue use of the
              website. Continued use of the website means these terms are binding on you.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <PolicySection icon={Gavel} title="Terms and Conditions">
            <p>
              This page states the Terms and Conditions under which you, as a Visitor, may
              visit this website. Please read this page carefully. If you do not accept these
              Terms and Conditions, we request that you exit the website.
            </p>
            <p>
              The business, its business divisions, subsidiaries, associate companies,
              subsidiaries of subsidiaries, or other related investment entities in India or
              abroad reserve the right to revise these Terms and Conditions at any time by
              updating this page.
            </p>
            <p>
              You should review this page periodically so that you remain aware of the latest
              binding Terms and Conditions applicable to your use of the website.
            </p>
          </PolicySection>

          <PolicySection icon={ShieldCheck} title="Use of Content">
            <p>
              All logos, brands, marks, headings, labels, names, signatures, numerals,
              shapes, or any combinations appearing on this website, unless otherwise noted,
              are properties owned by or used under license by the business and or its
              associate entities featured on the website.
            </p>
            <p>
              Use of these properties or any other content on this website, except as allowed
              under these Terms and Conditions or in the website content itself, is strictly
              prohibited.
            </p>
            <p>
              You may not sell, modify, reproduce, display, publicly perform, distribute, or
              otherwise use the materials on this website for any public or commercial purpose
              without prior written permission from the relevant organization or entity.
            </p>
          </PolicySection>

          <PolicySection icon={BadgeAlert} title="Acceptable Website Use">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5">
              <div className="text-sm font-semibold text-slate-950">Security Rules</div>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                <li>
                  Visitors must not access data that is not intended for them or log into a
                  server or account they are not authorized to access.
                </li>
                <li>
                  Visitors must not probe, scan, test vulnerabilities, or attempt to breach
                  security or authentication measures without proper authorization.
                </li>
                <li>
                  Visitors must not interfere with service to any user, host, or network,
                  including through viruses, trojans, overloading, flooding, mail bombing, or
                  crashing.
                </li>
                <li>
                  Visitors must not send unsolicited electronic mail, promotions, or
                  advertising through the website.
                </li>
              </ul>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Violations of system or network security may result in civil or criminal
                liability. The business and its associate entities may investigate suspected
                violations and cooperate with law enforcement authorities where required.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5">
              <div className="text-sm font-semibold text-slate-950">General Rules</div>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                <li>
                  Visitors may not use the website to transmit, distribute, store, or destroy
                  material that could encourage criminal conduct or violate applicable law or
                  regulation.
                </li>
                <li>
                  Visitors may not use the website in a way that infringes copyright,
                  trademark, trade secret, intellectual property rights, privacy rights, or
                  publicity rights of others.
                </li>
                <li>
                  Visitors may not transmit material that is libelous, defamatory,
                  pornographic, profane, obscene, threatening, abusive, or hateful.
                </li>
              </ul>
            </div>
          </PolicySection>

          <PolicySection icon={Scale} title="Indemnity">
            <p>
              The user agrees to indemnify and hold harmless, without objection, Digital
              World, its officers, directors, employees, and agents from and against any
              claims, actions, demands, liabilities, losses, or damages arising from or
              resulting from the user&apos;s use of{" "}
              <a
                href="https://digitalworldox.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-700 hover:text-cyan-800"
              >
                digitalworldox.com
              </a>{" "}
              or from any breach of these terms.
            </p>
          </PolicySection>

          <PolicySection icon={AlertTriangle} title="Liability">
            <p>
              The user agrees that neither the Company nor its group companies, directors,
              officers, or employees shall be liable for any direct, indirect, incidental,
              special, consequential, or exemplary damages arising from use of, or inability
              to use, the service.
            </p>
            <p>
              This includes, without limitation, damages related to procurement of substitute
              goods or services, data, information, services purchased or obtained, messages
              received, transactions entered into through the service, unauthorized access to
              user transmissions or data, or any other matter connected with the service,
              including loss of profits, use, or data, even if the Company was advised of the
              possibility of such damages.
            </p>
            <p>
              The user further agrees that the Company shall not be liable for damages arising
              from interruption, suspension, or termination of service, whether justified or
              not, negligent or intentional, inadvertent or advertent.
            </p>
            <p>
              The user also agrees that the Company shall not be responsible for statements or
              conduct of any third party connected with the service. In all cases, the
              Company&apos;s total liability to the user for all damages, losses, or causes of
              action shall not exceed the amount paid by the user to the Company, if any,
              related to the cause of action.
            </p>
          </PolicySection>

          <PolicySection icon={FileText} title="Disclaimer of Consequential Damages">
            <p>
              In no event shall the Company, or any parties, organizations, or entities
              associated with the corporate brand name or otherwise mentioned on this website,
              be liable for any damages whatsoever, including incidental and consequential
              damages, lost profits, damage to computer hardware, loss of data, or business
              interruption resulting from the use of, or inability to use, the website or its
              materials.
            </p>
            <p>
              This disclaimer applies whether the claim is based on warranty, contract, tort,
              or any other legal theory, and whether or not such entities were advised of the
              possibility of such damages.
            </p>
          </PolicySection>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <section className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-6 text-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Legal
            </div>
            <h2 className="mt-3 text-xl font-semibold text-white">Need clarification?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              If you have questions about the website terms, acceptable use, or legal
              disclaimers, please contact our team.
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
