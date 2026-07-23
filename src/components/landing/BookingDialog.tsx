import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, X, Phone, Instagram } from "lucide-react";
import { PHONE, PHONE_DISPLAY, INSTAGRAM, INSTAGRAM_HANDLE } from "./images";

const SERVICES = [
  "Dubinsko pranje enterijera",
  "Mašinsko poliranje",
  "Keramička zaštita",
  "Voskiranje",
  "Poliranje farova",
  "Pranje motornog prostora",
  "Pranje sedišta",
  "Ostalo",
];

export function BookingButton({
  children,
  className,
  variant = "primary",
}: {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
}) {
  const [open, setOpen] = useState(false);
  const base =
    variant === "primary"
      ? "group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(225,6,0,0.55)] hover:scale-[1.02] transition-all"
      : "inline-flex items-center gap-2 rounded-full glass-panel px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition";
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className ?? base}>
        <CalendarCheck className="h-4 w-4" />
        {children ?? "Zakažite svoj termin"}
      </button>
      <BookingDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function BookingDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: SERVICES[0],
    date: "",
    time: "",
    note: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const buildMessage = () => {
    const lines = [
      "Zdravo, želim da zakažem termin.",
      `Ime: ${form.name}`,
      `Telefon: ${form.phone}`,
      `Vozilo: ${form.vehicle}`,
      `Usluga: ${form.service}`,
      `Datum: ${form.date}${form.time ? " u " + form.time : ""}`,
    ];
    if (form.note) lines.push(`Napomena: ${form.note}`);
    return lines.join("\n");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const msg = encodeURIComponent(buildMessage());
    // Otvori SMS klijenta sa unapred popunjenom porukom
    window.location.href = `sms:${PHONE}?body=${msg}`;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-neutral-950/70 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#201a15] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.5)]"
          >
            <button
              onClick={onClose}
              aria-label="Zatvori"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative px-6 pt-8 pb-4 md:px-8">
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">
                Zakazivanje
              </div>
              <h3 className="font-display mt-2 text-2xl md:text-3xl font-semibold leading-tight">
                Zakažite svoj{" "}
                <span className="text-gradient-primary">termin</span>.
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Popunite formu — javljamo se u najkraćem roku radi potvrde termina.
              </p>
            </div>

            {sent ? (
              <div className="px-6 md:px-8 pb-8">
                <div className="rounded-2xl border border-white/10 bg-neutral-50 p-5 text-sm text-white/80">
                  Vaš zahtev je pripremljen. Ako se SMS klijent nije otvorio, kontaktirajte nas direktno:
                </div>
                <div className="mt-4 grid gap-2">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 p-3 hover:bg-white/[0.04]"
                  >
                    <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                  </a>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 p-3 hover:bg-white/[0.04]"
                  >
                    <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    onClose();
                  }}
                  className="mt-5 w-full rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E10600] px-6 py-3 text-sm font-semibold text-white"
                >
                  U redu
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="px-6 md:px-8 pb-8 grid gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Field
                    label="Ime i prezime"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="npr. Marko Marković"
                  />
                  <Field
                    label="Telefon"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    placeholder="npr. 064 123 4567"
                  />
                </div>
                <Field
                  label="Vozilo"
                  value={form.vehicle}
                  onChange={(v) => setForm({ ...form, vehicle: v })}
                  placeholder="npr. VW Golf 7, 2016."
                />
                <label className="grid gap-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-white/60">
                    Usluga
                  </span>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E10600]/30"
                  >
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="Datum"
                    required
                    type="date"
                    value={form.date}
                    onChange={(v) => setForm({ ...form, date: v })}
                  />
                  <Field
                    label="Vreme"
                    type="time"
                    value={form.time}
                    onChange={(v) => setForm({ ...form, time: v })}
                  />
                </div>
                <label className="grid gap-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-white/60">
                    Napomena
                  </span>
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    rows={3}
                    placeholder="Bilo šta što treba da znamo unapred..."
                    className="resize-none rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E10600]/30"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(225,6,0,0.55)] hover:scale-[1.01] transition"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Pošalji zahtev za termin
                </button>
                <p className="text-center text-[11px] text-white/50">
                  Klikom na dugme otvara se SMS aplikacija sa unapred pripremljenom porukom.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-[11px] uppercase tracking-widest text-white/60">
        {label}
        {required && <span className="text-[#E10600]"> *</span>}
      </span>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#E10600]/30"
      />
    </label>
  );
}
