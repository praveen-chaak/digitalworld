import { cn } from "../../lib/cn";

export function Button({ className, variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold tracking-tight transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-[0_8px_20px_rgba(16,185,129,0.25)] hover:from-cyan-600 hover:to-emerald-600",
    outline: "border border-slate-300/80 bg-white/80 text-slate-700 backdrop-blur hover:bg-white",
    ghost: "text-slate-700 hover:bg-slate-100",
  };

  return <button className={cn(base, variants[variant], className)} {...props} />;
}
