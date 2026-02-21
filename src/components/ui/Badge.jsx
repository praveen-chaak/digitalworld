import { cn } from "../../lib/cn";
export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700",
        className
      )}
      {...props}
    />
  );
}
