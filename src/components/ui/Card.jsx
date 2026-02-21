import { cn } from "../../lib/cn";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.1)]",
        className
      )}
      {...props}
    />
  );
}
