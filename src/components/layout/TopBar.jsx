import { Clock3, MapPin, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="border-b border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="container-app flex flex-wrap items-center justify-between gap-2 py-2 text-xs text-slate-600">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1">
            <Phone className="h-3.5 w-3.5" /> +1 800 799 99 99
          </span>
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <MapPin className="h-3.5 w-3.5" /> Seattle, WA
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-slate-500">
          <Clock3 className="h-3.5 w-3.5" /> Open daily 10:00-22:00
        </div>
      </div>
    </div>
  );
}
