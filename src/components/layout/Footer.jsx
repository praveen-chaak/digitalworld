import { Link } from "react-router-dom";

const informationLinks = [
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blogs" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/shipping-delivery", label: "Shipping Policy" },
  { to: "/return-refund-policy", label: "Return Policy" },
  { to: "/terms-and-conditions", label: "T&C and Disclaimer" },
  { to: "/contacts", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200/70 bg-slate-950 text-slate-300">
      <div className="container-app grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="inline-flex items-center gap-2">
            <img
              src="/logo-d.jpeg"
              alt="Digital World logo"
              className="h-9 w-9 rounded-lg object-cover ring-1 ring-slate-700"
            />
            <div className="text-lg font-semibold text-white">Digital World</div>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Modern software marketplace for Windows, Office, and server licensing.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Information</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {informationLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Popular</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link to="/category/office" className="hover:text-white">Office</Link></li>
            <li><Link to="/category/windows-desktop" className="hover:text-white">Windows Desktop</Link></li>
            <li><Link to="/category/windows-server" className="hover:text-white">Windows Server</Link></li>
            <li><Link to="/category/project-visio" className="hover:text-white">Project & Visio</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Support</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <a className="hover:text-white" href="mailto:digitalworld9871@gmail.com">
                digitalworld9871@gmail.com
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="tel:+919871919701">
                9871919701
              </a>
            </li>
            <li>
              <a
                className="hover:text-white"
                href="https://digitalworldox.com/"
                target="_blank"
                rel="noreferrer"
              >
                digitalworldox.com
              </a>
            </li>
            <li><Link to="/catalog" className="hover:text-white">Catalog</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-app py-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Digital World. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
