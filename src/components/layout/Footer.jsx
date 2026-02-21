import { Link } from "react-router-dom";

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
          <div className="text-sm font-semibold text-white">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link to="/catalog" className="hover:text-white">Catalog</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contacts" className="hover:text-white">Contacts</Link></li>
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
          <div className="mt-3 space-y-2 text-sm text-slate-400">
            <p>support@softmart.example</p>
            <p>+1 800 799 99 99</p>
            <p>Mon-Sun: 10:00-22:00</p>
          </div>
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
