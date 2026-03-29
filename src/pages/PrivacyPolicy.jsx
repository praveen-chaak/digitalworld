import { FileText, Globe, LockKeyhole, Mail, Phone, ShieldCheck } from "lucide-react";

const personalInfoFields = [
  "Name",
  "Email address",
  "Sex",
  "Age",
  "PIN code",
  "Credit card or debit card details",
  "Medical records and history",
  "Sexual orientation",
  "Biometric information",
  "Password",
  "Occupation, interests, and similar profile details",
];

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

export function PrivacyPolicy() {
  return (
    <main className="container-app py-8 sm:py-10">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_65px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="border-b border-slate-200/80 bg-gradient-to-r from-cyan-50 via-white to-emerald-50 px-6 py-8 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Digital World
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
            This page explains how Digital World collects, stores, processes, and protects
            personal and non-personal information when you use the website.
          </p>
        </div>

        <div className="grid gap-4 px-6 py-6 sm:px-8 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="text-sm font-semibold text-slate-950">Who this policy applies to</div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              The terms "We", "Us", "Our", and "Company" individually and collectively refer
              to Digital World. The terms "You", "Your", and "Yourself" refer to users of the
              website.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
            <div className="text-sm font-semibold text-slate-950">Your consent</div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              By using the website or providing information through it, you indicate that you
              understand, agree to, and consent to the practices described in this Privacy
              Policy.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <PolicySection icon={FileText} title="Introduction">
            <p>
              This Privacy Policy is an electronic record in the form of an electronic
              contract formed under the Information Technology Act, 2000, along with the
              applicable rules and amended provisions relating to electronic documents and
              records. It does not require any physical, electronic, or digital signature.
            </p>
            <p>
              This Privacy Policy is a legally binding document between you and Digital World.
              It becomes effective upon your acceptance, whether directly or indirectly in
              electronic form, including by clicking an acceptance option, using the website,
              or by other valid means.
            </p>
            <p>
              This document is published in accordance with the Information Technology
              (Reasonable Security Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011, under the Information Technology Act, 2000, which
              require publication of a privacy policy for the collection, use, storage, and
              transfer of sensitive personal data or information.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with its terms,
              please do not use the website.
            </p>
            <p>
              By providing your information or using the facilities offered through the
              website, you consent to the collection, storage, processing, and transfer of
              your personal and non-personal information as described in this policy. You
              further agree that such collection, use, storage, and transfer shall not cause
              any loss or wrongful gain to you or any other person.
            </p>
          </PolicySection>

          <PolicySection icon={ShieldCheck} title="User Information">
            <p>
              To access certain services on the website, users may be required to provide
              information during registration or while using specific features. Depending on
              the service, this may include:
            </p>

            <ul className="grid gap-2 rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5 text-sm text-slate-700 sm:grid-cols-2">
              {personalInfoFields.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>

            <p>
              The information supplied by users helps us improve the website and provide a
              more user-friendly experience. All required information is service-dependent,
              and we may use it to maintain, protect, improve, advertise, and develop our
              services.
            </p>
            <p>
              Information will not be considered sensitive personal data if it is freely
              available in the public domain, furnished under the Right to Information Act,
              2005, or otherwise made available under any law currently in force.
            </p>
          </PolicySection>

          <PolicySection icon={LockKeyhole} title="Cookies and Usage Data">
            <p>
              To improve responsiveness for users, we may use cookies or similar electronic
              tools to collect information and assign each visitor a unique random User ID.
              This helps us understand user interests tied to an identified computer.
            </p>
            <p>
              Unless you voluntarily identify yourself, such as through registration, we do
              not know who you are merely because a cookie is assigned to your device. A
              cookie can only contain information you provide and cannot read data from your
              hard drive. Advertisers may also place their own cookies in your browser when
              you interact with their ads, and that process is outside our control.
            </p>
            <p>
              Our web servers may automatically collect limited information about your
              Internet connection, including your IP address. This information does not
              personally identify you. We use it to deliver web pages upon request, tailor
              the website to user interests, measure site traffic, and inform advertisers
              about the geographic location of our visitors.
            </p>
          </PolicySection>

          <PolicySection icon={Globe} title="Links to Other Sites">
            <p>
              This Privacy Policy applies only to the Digital World website. Our website may
              contain links to external websites that are beyond our control, and we are not
              responsible for the privacy practices or your use of those websites.
            </p>
          </PolicySection>

          <PolicySection icon={ShieldCheck} title="Information Sharing">
            <p>
              We may share sensitive personal information with third parties without prior
              consent only in limited circumstances, such as when required by law, court
              order, governmental agency, or competent authority for verification of
              identity, prevention, detection, or investigation of offences, including cyber
              incidents, or for prosecution and punishment of offences.
            </p>
            <p>
              Such disclosures are made in good faith when we believe they are reasonably
              necessary to enforce our terms, comply with applicable law, or respond to legal
              obligations.
            </p>
            <p>
              We may also share information with our group companies, officers, and employees
              for the purpose of processing personal information on our behalf. In such cases,
              we seek to ensure that recipients process the information only according to our
              instructions and in compliance with this Privacy Policy and appropriate
              confidentiality and security measures.
            </p>
          </PolicySection>

          <PolicySection icon={LockKeyhole} title="Information Security">
            <p>
              We take appropriate security measures to protect against unauthorized access,
              alteration, disclosure, or destruction of data. These measures include internal
              reviews of our data collection, storage, and processing practices, as well as
              technical safeguards such as encryption and physical security controls where
              appropriate.
            </p>
            <p>
              Information collected on the website is stored within our controlled databases
              on secured servers protected behind firewalls, with password-restricted access.
              Even so, no system can be guaranteed to be completely secure, and we cannot
              guarantee that information provided to us will never be intercepted during
              transmission over the Internet.
            </p>
            <p>
              Any information you share in public or community discussion areas may be
              accessible to anyone with Internet access. Please use caution before posting
              personal information publicly.
            </p>
          </PolicySection>

          <PolicySection icon={FileText} title="Policy Updates">
            <p>
              The Internet is an evolving medium, and we may revise this Privacy Policy from
              time to time to reflect necessary future changes. However, our use of the
              information we collect will always remain consistent with the policy under which
              the information was originally collected.
            </p>
          </PolicySection>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <section className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-6 text-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Contact
            </div>
            <h2 className="mt-3 text-xl font-semibold text-white">Grievance Redressal</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Any complaints, abuse reports, concerns regarding content or comments, or
              breaches of these terms may be sent in writing or by email with an electronic
              signature to the designated grievance officer below.
            </p>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <div className="text-base font-semibold text-white">Mr. Gitigya Gaur</div>
              <div className="mt-1 text-sm text-slate-300">Digital World</div>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href="https://digitalworldox.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:bg-white/10"
              >
                <Globe className="h-4 w-4 text-cyan-300" />
                digitalworldox.com
              </a>
              <a
                href="mailto:digitalworld9871@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-cyan-300" />
                digitalworld9871@gmail.com
              </a>
              <a
                href="tel:+919871919701"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-cyan-300" />
                9871919701
              </a>
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="text-sm font-semibold text-slate-950">Important note</div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Continued use of the website after updates to this page will be governed by the
              latest published Privacy Policy.
            </p>
          </section>
        </aside>
      </div>
    </main>
  );
}
