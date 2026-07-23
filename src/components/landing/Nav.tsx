import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PHONE } from "./images";

const links = [
  { to: "/", label: "Početna" },
  { to: "/galerija", label: "Galerija" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-[#FAF7F1]/80 border-b border-neutral-900/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="DP Poliranje logo"
              className="h-11 w-11 md:h-12 md:w-12 rounded-full object-cover ring-1 ring-white/10"
            />
            <div className="leading-tight">
              <div className="font-display text-sm md:text-base font-semibold tracking-tight">DP Poliranje</div>
              <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-neutral-900/50">Ruma</div>
            </div>
          </Link>


          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-neutral-900 after:scale-x-100" }}
                className="text-sm text-neutral-900/70 hover:text-neutral-900 transition relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-gradient-to-r after:from-[#FF6B00] after:to-[#E10600] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E10600] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(124,92,255,0.7)] hover:shadow-[0_15px_40px_-10px_rgba(53,214,255,0.7)] transition-all"
            >
              <Phone className="h-4 w-4" /> Pozovite
            </a>
            <button
              aria-label="Meni"
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden h-10 w-10 rounded-full glass-panel flex items-center justify-center"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden rounded-2xl glass-panel p-6"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-lg font-display text-neutral-900/85 hover:text-neutral-900"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={`tel:${PHONE}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E10600] px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" /> Pozovite odmah
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}