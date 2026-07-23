import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Phone,
  Instagram,
  Sparkles,
  ShieldCheck,
  Droplets,
  Sun,
  Armchair,
  Car,
  Truck,
  Bike,
  Bus,
  Wrench,
  Award,
  Clock,
  CheckCircle2,
  MapPin,
  Star,
} from "lucide-react";
import { useState } from "react";
import { IMG, PHONE, PHONE_DISPLAY, INSTAGRAM, INSTAGRAM_HANDLE } from "./images";
import { BeforeAfter } from "./BeforeAfter";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { Images, ArrowRight } from "lucide-react";
import { BookingButton } from "./BookingDialog";

export function GalleryCTA({ variant = "band" }: { variant?: "band" | "inline" }) {
  if (variant === "inline") {
    return (
      <Link
        to="/galerija"
        className="inline-flex items-center gap-2 rounded-full glass-panel px-6 py-3.5 text-sm font-medium text-neutral-900 hover:bg-neutral-900/10 transition"
      >
        <Images className="h-4 w-4" />
        Pogledaj galeriju
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }
  return (
    <section className="relative py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-900/10 bg-gradient-to-br from-[#FF6B00]/20 via-white to-[#E10600]/15 p-8 md:p-12 text-center">
            <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-[#FF6B00]/30 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-[#E10600]/25 blur-3xl" />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/60">Galerija</div>
              <h3 className="font-display mt-3 text-3xl md:text-4xl font-semibold leading-tight">
                Pogledajte naše <span className="text-gradient-primary">radove</span>.
              </h3>
              <p className="mt-3 text-neutral-900/65 max-w-xl mx-auto text-sm md:text-base">
                Pre i posle fotografije, poliranje, keramička zaštita i dubinsko pranje — sve na jednom mestu.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  to="/galerija"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(124,92,255,0.8)] hover:shadow-[0_25px_60px_-15px_rgba(53,214,255,0.9)] hover:scale-[1.02] transition-all"
                >
                  <Images className="h-4 w-4" />
                  Otvori galeriju
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 bg-ambient" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,92,255,0.25),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 md:pb-24 md:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-fit items-center gap-2 rounded-full glass-panel px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] text-neutral-900/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E10600] shadow-[0_0_10px_#E10600]" />
            Premium Auto Detailing • Ruma
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-6 text-[44px] sm:text-6xl lg:text-[76px] leading-[0.95] font-semibold tracking-tight"
          >
            Sjaj koji izgleda <span className="text-gradient-primary">bolje</span> nego prvog dana.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base md:text-lg text-neutral-900/65 leading-relaxed"
          >
            Premium detailing za automobile, kamione, autobuse i motocikle.
            Dubinsko pranje, mašinsko poliranje, keramička zaštita i voskiranje —
            uz posvećenu ručnu obradu svakog detalja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={`tel:${PHONE}`}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(124,92,255,0.8)] hover:shadow-[0_25px_60px_-15px_rgba(53,214,255,0.9)] hover:scale-[1.02] transition-all"
            >
              <Phone className="h-4 w-4" />
              Pozovite odmah
              <span className="opacity-70 font-normal">— {PHONE_DISPLAY}</span>
            </a>
            <BookingButton />
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-panel px-6 py-3.5 text-sm font-medium text-neutral-900 hover:bg-neutral-900/10 transition"
            >
              <Instagram className="h-4 w-4" />
              Pogledajte Instagram
            </a>
            <Link
              to="/galerija"
              className="inline-flex items-center gap-2 rounded-full glass-panel px-6 py-3.5 text-sm font-medium text-neutral-900 hover:bg-neutral-900/10 transition"
            >
              <Sparkles className="h-4 w-4" />
              Pogledaj galeriju
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "1000+", l: "Obrađenih vozila" },
              { n: "8+", l: "Godina iskustva" },
              { n: "100%", l: "Ručna obrada" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-semibold text-gradient-primary">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-neutral-900/50">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-neutral-900/10 shadow-[0_50px_120px_-20px_rgba(124,92,255,0.5)]"
          >
            <img src={IMG.polPostA} alt="Poliran automobil sa dubokim sjajem" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
              <div className="glass-panel rounded-2xl px-4 py-3">
                <div className="text-[10px] uppercase tracking-widest text-neutral-900/60">Rezultat</div>
                <div className="font-display text-lg font-semibold text-neutral-900">Ogledalski sjaj</div>
              </div>
              <div className="glass-panel h-12 w-12 rounded-full flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-[#E10600]" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:block absolute -bottom-8 -left-8 w-48 aspect-square overflow-hidden rounded-2xl border border-neutral-900/10 shadow-2xl"
          >
            <img src={IMG.cer1} alt="Keramička zaštita" className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#FF6B00]/30 blur-3xl -z-10" />
          <div className="absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-[#E10600]/30 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

const highlights = [
  { icon: Car, t: "Više vrsta vozila" },
  { icon: Wrench, t: "Profesionalna oprema" },
  { icon: ShieldCheck, t: "Keramička zaštita" },
  { icon: Droplets, t: "Dubinsko pranje" },
  { icon: Sparkles, t: "Poliranje visokog sjaja" },
  { icon: Clock, t: "Rad po dogovoru" },
];

export function Highlights() {
  return (
    <section className="relative py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {highlights.map((h, i) => (
            <Reveal key={h.t} delay={i * 0.05}>
              <div className="group glass-panel rounded-2xl p-4 md:p-5 h-full flex flex-col items-start gap-3 hover:bg-neutral-900/[0.06] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(124,92,255,0.5)]">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF6B00]/25 to-[#E10600]/20 border border-neutral-900/10 flex items-center justify-center text-white">
                  <h.icon className="h-5 w-5" />
                </div>
                <div className="text-sm md:text-[15px] font-medium text-neutral-900/90 leading-tight">{h.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const pairs = [
  { before: IMG.polPreA, after: IMG.polPostA, label: "Poliranje karoserije — restauracija sjaja" },
  { before: IMG.dpPreB, after: IMG.dpPostB, label: "Dubinsko pranje enterijera" },
  { before: IMG.dpPreC, after: IMG.dpPostC, label: "Dubinsko pranje sedišta" },
  { before: IMG.polPreD, after: IMG.polPostD, label: "Korekcija laka — poliranje" },
];

export function BeforeAfterSection() {
  const [idx, setIdx] = useState(0);
  return (
    <section id="pre-posle" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-10 md:mb-14 flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Rezultati</div>
              <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
                Prava razlika vidi se u <span className="text-gradient-primary">detaljima</span>.
              </h2>
              <p className="mt-4 text-neutral-900/60 max-w-lg">
                Povucite klizač i uverite se kako izgleda posao urađen do savršenstva —
                bez skraćivanja, bez kompromisa.
              </p>
            </div>
            <div className="flex gap-2">
              {pairs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Prikaz ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === idx ? "w-10 bg-gradient-to-r from-[#FF6B00] to-[#E10600]" : "w-2.5 bg-neutral-900/20 hover:bg-neutral-900/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
        <BeforeAfter key={idx} before={pairs[idx].before} after={pairs[idx].after} label={pairs[idx].label} />
      </div>
    </section>
  );
}

const services = [
  { icon: Droplets, t: "Dubinsko pranje", d: "Podrazumeva pranje enterijera — sedišta, tapacirunga, tepiha i unutrašnjih površina profesionalnim preparatima. Radi se tokom cele godine, a sušenje je mašinsko — auto je potpuno suv i spreman za upotrebu isti dan.", big: true },
  { icon: Sparkles, t: "Mašinsko poliranje", d: "Uklanjanje ogrebotina i restauracija dubokog sjaja laka." },
  { icon: ShieldCheck, t: "Keramička zaštita", d: "Dugotrajna zaštita laka, felni, stakala, kože i plastike." },
  { icon: Sparkles, t: "Voskiranje", d: "Premium vosak za zaštitu i produženi sjaj karoserije." },
  { icon: Sun, t: "Poliranje farova", d: "Vraćanje kristalne prozirnosti i noćne vidljivosti." },
  { icon: Armchair, t: "Čišćenje kože", d: "Nežno pranje i hidratacija kožnih površina." },
  { icon: Truck, t: "Pranje kamiona", d: "Detailing kabina i karoserija teretnih vozila." },
  { icon: Bike, t: "Poliranje motocikala", d: "Ručna obrada svakog detalja motora." },
  { icon: Bus, t: "Pranje autobusa", d: "Održavanje flote i pojedinačnih vozila." },
];

export function Services() {
  return (
    <section id="usluge" className="relative py-20 md:py-32 border-t border-neutral-900/[0.06]">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Usluge</div>
            <h2 className="font-display mt-3 text-4xl md:text-5xl font-semibold leading-[1.05]">
              Kompletna nega vašeg <span className="text-gradient-primary">vozila</span>.
            </h2>
            <p className="mt-4 text-neutral-900/60 mx-auto max-w-lg">
              Od dubinskog pranja do keramičke zaštite — sve na jednom mestu, u Rumi.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3 md:gap-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 6) * 0.04}>
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-900/10 bg-[#FAF7F1] transition-all duration-500 hover:border-neutral-900/20 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(500px_120px_at_50%_50%,rgba(124,92,255,0.15),transparent)]" />
                <div className="relative flex items-center gap-4 md:gap-5 p-4 md:p-5">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-br from-[#FF6B00]/25 to-[#E10600]/15 border border-neutral-900/10 flex items-center justify-center flex-none">
                    <s.icon className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-base md:text-xl font-semibold text-neutral-900">{s.t}</div>
                    <div className="mt-1 text-xs md:text-sm text-neutral-900/60">{s.d}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  "Profesionalna oprema",
  "Višegodišnje iskustvo",
  "Sjaj traje bukvalno godinama",
  "Sigurna obrada laka",
  "Pažnja prema detaljima",
  "Veliki izbor usluga",
  "Sve vrste vozila",
  "Vozilo 24h pod video nadzorom",
  "Posvećenost svakom klijentu",
];

export function Why() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-neutral-900/10 shadow-[0_40px_100px_-20px_rgba(124,92,255,0.4)]">
            <img src={IMG.cer2} alt="Detailing u studiju" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#E10600] flex items-center justify-center">
                <Award className="h-5 w-5 text-neutral-900" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">Ručna završna obrada</div>
                <div className="text-xs text-neutral-900/60">Bez skraćivanja, bez kompromisa.</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Zašto DP</div>
            <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
              Standard koji se <span className="text-gradient-primary">oseti</span> u svakom detalju.
            </h2>
          </Reveal>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {reasons.map((r, i) => (
              <Reveal key={r} delay={i * 0.04}>
                <li className="flex items-start gap-3 py-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-none text-[#E10600]" />
                  <span className="text-neutral-900/85">{r}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const vehicles = [
  { icon: Car, t: "Putnička vozila" },
  { icon: Truck, t: "Kamioni" },
  { icon: Bike, t: "Motori" },
  { icon: Bus, t: "Autobusi" },
];

export function Vehicles() {
  return (
    <section className="relative py-20 md:py-28 border-t border-neutral-900/[0.06]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Vozila</div>
            <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
              Radimo <span className="text-gradient-primary">sve tipove</span> vozila.
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
          {vehicles.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl glass-panel p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 transition-all">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(300px_200px_at_50%_100%,rgba(53,214,255,0.3),transparent)]" />
                <v.icon className="h-14 w-14 md:h-16 md:w-16 text-neutral-900/85 group-hover:text-neutral-900 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
                <div className="font-display text-base md:text-lg font-medium text-center">{v.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { t: "Pregled vozila", d: "Analiza stanja laka, Radi se vizuelno i vrsi se utvrdjivanje debljine laka, u slucaju poliranja." },
  { t: "Dogovor usluge", d: "Preporuka najbolje kombinacije tretmana za vaše vozilo." },
  { t: "Dubinsko pranje enterijera", d: "Temeljno pranje kompletne unutrasnjosti automobila." },
  { t: "Priprema laka", d: "Fizička i hemijska dekontaminacija laka pre poliranja." },
  { t: "Mašinsko poliranje", d: "Korekcija laka u vise faza u zavisnosti od debljine laka." },
  { t: "Pečenje keramičkog premaza IR lampom", d: "Nanošenje keramičke zaštite i termičko fiksiranje IR lampom za maksimalnu trajnost." },
  { t: "Predaja vozila", d: "Finalna kontrola i predaja vozila u vrhunskom stanju." },
];

export function Process() {
  return (
    <section id="proces" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Proces</div>
            <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
              Sedam koraka do <span className="text-gradient-primary">savršenog</span> rezultata.
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-1/2" />
          <div className="space-y-8 md:space-y-14">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className={`relative flex md:items-center gap-6 md:gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:block flex-1" />
                  <div className="relative z-10 flex-none">
                    <div className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#E10600] flex items-center justify-center font-display font-semibold text-white shadow-[0_10px_30px_-5px_rgba(124,92,255,0.7)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex-1 glass-panel rounded-2xl p-5 md:p-7">
                    <div className="font-display text-xl md:text-2xl font-semibold">{s.t}</div>
                    <div className="mt-2 text-neutral-900/60 text-sm md:text-base">{s.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const diff = [
  { t: "Profesionalni preparati", d: "Renomirani brendovi za lak, staklo, kožu i tkaninu." },
  { t: "Sigurna obrada laka", d: "Kontrolisana korekcija bez oštećenja." },
  { t: "Dugotrajan sjaj", d: "Rezultat koji traje godinama." },
  { t: "Hidrofobna zaštita", d: "Voda i prljavština klize sa površine." },
  { t: "Precizan rad", d: "Bez preskočenih detalja i skrivenih površina." },
  { t: "Video nadzor", d: "Vozilo je 24h pod video nadzorom." },
];

export function Difference() {
  return (
    <section className="relative py-20 md:py-28 border-t border-neutral-900/[0.06]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Premium razlika</div>
            <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
              Zašto DP izgleda <span className="text-gradient-primary">drugačije</span>.
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-3 md:gap-5">
          {diff.map((d, i) => (
            <Reveal key={d.t} delay={i * 0.05}>
              <div className="glass-panel rounded-2xl md:rounded-3xl p-6 md:p-8 h-full hover:bg-neutral-900/[0.05] transition group">
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-primary mb-3">0{i + 1}</div>
                <div className="font-display text-xl font-semibold">{d.t}</div>
                <div className="mt-2 text-neutral-900/60 text-sm">{d.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type GalleryItem = { src: string; cat: string; span?: string };
const galleryAll: GalleryItem[] = [
  { src: IMG.polPostA, cat: "Poliranje", span: "row-span-2" },
  { src: IMG.dp1, cat: "Dubinsko pranje" },
  { src: IMG.cer1, cat: "Keramička zaštita" },
  { src: IMG.dpPostB, cat: "Dubinsko pranje", span: "row-span-2" },
  { src: IMG.pol3, cat: "Poliranje" },
  { src: IMG.dp3, cat: "Kamioni" },
  { src: IMG.dpPostC, cat: "Dubinsko pranje" },
  { src: IMG.cer2, cat: "Keramička zaštita", span: "row-span-2" },
  { src: IMG.pol4, cat: "Poliranje" },
  { src: IMG.auto1, cat: "Enterijer" },
  { src: IMG.dp2, cat: "Enterijer" },
  { src: IMG.dp4, cat: "Kamioni" },
  { src: IMG.auto2, cat: "Enterijer" },
  { src: IMG.dpExtra, cat: "Enterijer" },
  { src: IMG.polPostD, cat: "Poliranje" },
  { src: IMG.ceramic1, cat: "Keramička zaštita", span: "row-span-2" },
  { src: IMG.ceramic2, cat: "Keramička zaštita" },
  { src: IMG.seatPre1, cat: "Enterijer" },
  { src: IMG.seatPost1, cat: "Enterijer" },
  { src: IMG.seatPre2, cat: "Enterijer" },
  { src: IMG.seatPost2, cat: "Enterijer" },
];

const categories = ["Sve", "Poliranje", "Dubinsko pranje", "Keramička zaštita", "Enterijer", "Kamioni"];

export function Gallery() {
  const [cat, setCat] = useState("Sve");
  const [open, setOpen] = useState<string | null>(null);
  const items = cat === "Sve" ? galleryAll : galleryAll.filter((g) => g.cat === cat);
  return (
    <section id="galerija" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Galerija</div>
              <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
                Rezultati koji <span className="text-gradient-primary">govore</span>.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm border transition ${
                    cat === c
                      ? "bg-[#FAF7F1] text-black border-[#FAF7F1]"
                      : "border-neutral-900/15 text-neutral-900/70 hover:text-neutral-900 hover:border-neutral-900/30"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.button
              key={it.src + i}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              onClick={() => setOpen(it.src)}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-900/10 bg-[#FAF7F1] ${it.span ?? ""}`}
            >
              <img src={it.src} alt={it.cat} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
                <span className="text-[11px] uppercase tracking-widest text-neutral-900/85">{it.cat}</span>
                <span className="h-8 w-8 rounded-full glass-panel flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v7H3V3h7" /></svg>
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <Lightbox src={open} onClose={() => setOpen(null)} />
    </section>
  );
}

export function InstagramSection() {
  const previews = [IMG.polPostA, IMG.cer1, IMG.dpPostB, IMG.pol3, IMG.cer2, IMG.polPostD];
  return (
    <section className="relative py-20 md:py-28 border-t border-neutral-900/[0.06]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {previews.map((p, i) => (
              <a
                key={p + i}
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden rounded-xl md:rounded-2xl border border-neutral-900/10 ${
                  i === 0 ? "col-span-2 row-span-2" : "aspect-square"
                }`}
              >
                <img src={p} alt="Instagram post" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-3">
                  <Instagram className="h-6 w-6 text-neutral-900" />
                </div>
              </a>
            ))}
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Instagram</div>
            <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
              Pratite naše <span className="text-gradient-primary">radove</span>.
            </h2>
            <p className="mt-4 text-neutral-900/60 max-w-md">
              Svakodnevno objavljujemo nove transformacije, rezultate poliranja i
              zaštićene lakove. Uverite se sami.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(124,92,255,0.8)] hover:scale-[1.02] transition"
            >
              <Instagram className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Marko J.", city: "Ruma", text: "Odveo sam kola na dubinsko pranje i poliranje — izgledaju bolje nego iz salona. Detalji su fenomenalni.", rating: 5 },
  { name: "Ivana S.", city: "Sremska Mitrovica", text: "Prava profesionalnost. Keramička zaštita drži već mesecima, voda se skida sama sa laka. Preporuka.", rating: 5 },
  { name: "Nikola P.", city: "Šabac", text: "Očistili su enterijer da izgleda kao nov. Vidi se ljubav prema poslu i pažnja prema svakoj sitnici.", rating: 5 },
  { name: "Dejan M.", city: "Inđija", text: "Poliranje farova mi je uštedelo pravo bogatstvo — vidljivost je vraćena, a izgled fenomenalan.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Utisci klijenata</div>
            <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
              Poverenje se <span className="text-gradient-primary">zaslužuje</span>.
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className="glass-panel rounded-2xl md:rounded-3xl p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition">
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-[#E10600] text-[#E10600]" />
                    ))}
                  </div>
                  <p className="text-neutral-900/85 text-[15px] leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-900/10">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs text-neutral-900/50">{t.city}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Koliko traje dubinsko pranje?", a: "Dubinsko pranje traje oko 10 sati, u zavisnosti od stanja i tipa enterijera." },
  { q: "Koliko traje mašinsko poliranje?", a: "Puno poliranje traje 1–2 dana, jer se lak obrađuje u više prolaza." },
  { q: "Koliko traje keramička zaštita?", a: "Nakon poliranja se nanosi keramička zaštita. U zavisnosti od kvaliteta preparata, trajnost je od 6 meseci do 9 godina uz pravilno održavanje." },
  { q: "Da li radite kamione?", a: "Da, radimo kompletno pranje, poliranje i zaštitu teretnih vozila." },
  { q: "Da li radite autobuse?", a: "Da, obrada kompletne karoserije i enterijera autobusa." },
  { q: "Koliko unapred se zakazuje termin?", a: "Preporuka je 3–7 dana ranije, po dogovoru se pravi termin." },
  { q: "Da li nudite poliranje farova?", a: "Da, vraćamo prozirnost farova i završno ih štitimo." },
  { q: "Da li čistite kožu?", a: "Da, koristimo bezbedne preparate za pranje i hidrataciju kože." },
  { q: "Kako mogu zakazati termin?", a: "Pozovite 064 479 6133 ili nam pišite na Instagramu — brzo odgovaramo." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 md:py-32 border-t border-neutral-900/[0.06]">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Česta pitanja</div>
            <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
              Odgovori na sve što vas <span className="text-gradient-primary">zanima</span>.
            </h2>
          </div>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.03}>
                <div className="glass-panel rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <span className="font-display text-base md:text-lg font-medium pr-4">{f.q}</span>
                    <span className={`h-8 w-8 rounded-full border border-neutral-900/15 flex items-center justify-center flex-none transition-transform ${isOpen ? "rotate-45 bg-gradient-to-br from-[#FF6B00] to-[#E10600] border-transparent" : ""}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-neutral-900/65 text-sm md:text-base leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="kontakt" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-ambient opacity-60" />
      <div className="relative mx-auto max-w-2xl px-5 md:px-8 text-center">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">Kontakt</div>
          <h2 className="font-display mt-3 text-3xl md:text-5xl font-semibold leading-[1.05]">
            Zakažite <span className="text-gradient-primary">termin</span>.
          </h2>
          <p className="mt-3 text-neutral-900/60 mx-auto max-w-md text-sm md:text-base">
            Pozovite ili pišite na Instagramu — odgovaramo brzo i dogovaramo termin po vašoj želji.
          </p>
          <div className="mt-6 flex justify-center">
            <BookingButton>Zakažite svoj termin</BookingButton>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 grid gap-3 max-w-md mx-auto">
            <a href={`tel:${PHONE}`} className="flex items-center gap-4 p-4 glass-panel rounded-2xl hover:bg-neutral-900/[0.05] transition text-left">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#E10600] flex items-center justify-center flex-none">
                <Phone className="h-5 w-5 text-neutral-900" />
              </div>
              <div>
                <div className="text-[10px] text-neutral-900/50 uppercase tracking-widest">Telefon</div>
                <div className="font-display text-base font-semibold">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass-panel rounded-2xl hover:bg-neutral-900/[0.05] transition text-left">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#E10600] flex items-center justify-center flex-none">
                <Instagram className="h-5 w-5 text-neutral-900" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-neutral-900/50 uppercase tracking-widest">Instagram</div>
                <div className="font-display text-sm md:text-base font-semibold truncate">{INSTAGRAM_HANDLE}</div>
              </div>
            </a>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 glass-panel rounded-2xl text-left">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#E10600] flex items-center justify-center flex-none">
                  <MapPin className="h-4 w-4 text-neutral-900" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-neutral-900/50 uppercase tracking-widest">Lokacija</div>
                  <div className="font-display text-sm font-semibold">Ruma</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 glass-panel rounded-2xl text-left">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#E10600] flex items-center justify-center flex-none">
                  <Clock className="h-4 w-4 text-neutral-900" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-neutral-900/50 uppercase tracking-widest">Vreme</div>
                  <div className="font-display text-sm font-semibold">Po dogovoru</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const nav: Array<{ label: string; to: "/" | "/galerija" }> = [
    { label: "Početna", to: "/" },
    { label: "Galerija", to: "/galerija" },
  ];
  return (
    <footer className="relative border-t border-neutral-900/[0.08] py-14 pb-28 md:pb-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full ring-1 ring-white/10 bg-gradient-to-br from-[#FF6B00] to-[#E10600] flex items-center justify-center font-display font-bold text-white">
              DP
            </div>
            <div>
              <div className="font-display text-base font-semibold">DP Poliranje i Pranje</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-900/50">Ruma</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-neutral-900/55 max-w-xs">
            Premium auto detailing studio u Rumi. Dubinsko pranje, poliranje i
            keramička zaštita za sve vrste vozila.
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-900/50 mb-4">Navigacija</div>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-neutral-900/70 hover:text-neutral-900 transition">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-900/50 mb-4">Kontakt</div>
          <ul className="space-y-2 text-sm">
            <li><a className="text-neutral-900/80 hover:text-neutral-900 transition" href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></li>
            <li><a className="text-neutral-900/80 hover:text-neutral-900 transition" href={INSTAGRAM} target="_blank" rel="noreferrer">{INSTAGRAM_HANDLE}</a></li>
            <li className="text-neutral-900/60">Ruma, Srbija</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-neutral-900/[0.06] mx-auto max-w-7xl px-5 md:px-8 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-widest text-neutral-900/40">
        <div>© {new Date().getFullYear()} DP Poliranje i Pranje Ruma. Sva prava zadržana.</div>
        <div>Premium Auto Detailing</div>
      </div>
    </footer>
  );
}
const beforeAfterPairs = [
  { before: IMG.seatPre1, after: IMG.seatPost1, label: "Pranje sedišta — pre i posle" },
  { before: IMG.seatPre2, after: IMG.seatPost2, label: "Pranje sedišta — pre i posle" },
  { before: IMG.seatPre3, after: IMG.seatPost3, label: "Pranje sedišta — pre i posle" },
  { before: IMG.multiPre, after: IMG.multiPost, label: "Poliranje multimedije — pre i posle" },
  { before: IMG.enginePre, after: IMG.enginePost, label: "Pranje motornog prostora — pre i posle" },
];

const comboImages: Array<{ src: string; title: string; caption: string }> = [
  {
    src: IMG.engineCombo1,
    title: "Pranje motornog prostora",
    caption: "Gore: posle • Dole: pre",
  },
  {
    src: IMG.underHood,
    title: "Ispod haube",
    caption: "Detaljna obrada svakog ugla",
  },
  {
    src: IMG.hoodCombo,
    title: "Pranje haube",
    caption: "Gore: pre • Dole: posle",
  },
  {
    src: IMG.polishSplit,
    title: "Keramička zaštita i poliranje",
    caption: "Leva strana: pre • Desna strana: posle",
  },
];

const ceramicShowcase = [IMG.ceramic1, IMG.ceramic2, IMG.ceramic3];

export function Transformations() {
  const [idx, setIdx] = useState(0);
  const pair = beforeAfterPairs[idx];
  return (
    <section id="transformacije" className="relative py-20 md:py-32 border-t border-neutral-900/[0.06]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-10 md:mb-14 flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">
                Pre / posle
              </div>
              <h2 className="font-display mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
                Prave <span className="text-gradient-primary">transformacije</span>.
              </h2>
              <p className="mt-4 text-neutral-900/60 max-w-lg">
                Povucite klizač i uverite se u razliku — sedišta, motorni prostor,
                multimedija i lak, sve obrađeno do savršenstva.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {beforeAfterPairs.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm border transition ${
                    i === idx
                      ? "bg-neutral-900 text-white border-neutral-900"
                      : "border-neutral-900/15 text-neutral-900/70 hover:text-neutral-900 hover:border-neutral-900/30"
                  }`}
                  aria-label={p.label}
                >
                  {p.label.split(" — ")[0]} {i + 1}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <BeforeAfter key={idx} before={pair.before} after={pair.after} label={pair.label} />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {comboImages.map((c, i) => (
            <Reveal key={c.src} delay={i * 0.05}>
              <figure className="group relative overflow-hidden rounded-3xl border border-neutral-900/10 bg-[#FAF7F1]">
                <img
                  src={c.src}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover aspect-[4/5] md:aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                    {c.caption}
                  </div>
                  <div className="font-display text-lg md:text-xl font-semibold text-white mt-1">
                    {c.title}
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 md:mt-14">
            <div className="mb-4 flex items-center gap-3">
              <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-900/50">
                Keramička zaštita i poliranje
              </div>
              <div className="h-px flex-1 bg-neutral-900/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {ceramicShowcase.map((src, i) => (
                <div
                  key={src}
                  className={`overflow-hidden rounded-2xl md:rounded-3xl border border-neutral-900/10 ${
                    i === 0 ? "md:col-span-2 md:row-span-1" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt="Keramička zaštita i poliranje"
                    loading="lazy"
                    className="h-full w-full object-cover aspect-[4/3]"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <BookingButton>Zakažite svoj termin</BookingButton>
            <GalleryCTA variant="inline" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
