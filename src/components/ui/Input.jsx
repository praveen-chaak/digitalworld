import { cn } from "../../lib/cn";

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-slate-300/80 bg-white/80 px-4 py-2.5 text-sm text-slate-800 outline-none backdrop-blur placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30",
        className
      )}
      {...props}
    />
  );
}
