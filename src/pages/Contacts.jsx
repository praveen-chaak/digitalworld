import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export function Contacts() {
  return (
    <main className="container-app py-8">
      <h1 className="text-2xl font-semibold">Contacts</h1>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 p-5">
          <div className="text-sm font-semibold">Contact form</div>
          <div className="mt-3 space-y-2">
            <Input placeholder="Your name" />
            <Input placeholder="Email" />
            <textarea className="w-full rounded-2xl border border-zinc-200 p-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300" rows="5" placeholder="Message"></textarea>
            <Button>Send</Button>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-200 p-5 text-sm text-zinc-700">
          <div className="font-semibold">Store Name</div>
          <div className="mt-2">St. Petersburg, Nevsky Prospect 28</div>
          <div className="mt-1">Daily 10:00–22:00</div>
          <div className="mt-1">8 800 799 99 99</div>
        </div>
      </div>
    </main>
  );
}
