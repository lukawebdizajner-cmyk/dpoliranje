import { Phone, Instagram, MessageCircle } from "lucide-react";
import { PHONE, INSTAGRAM } from "./images";
import { motion } from "framer-motion";

export function StickyBar() {
  return (
    <>
      <div className="hidden md:flex fixed right-6 bottom-6 z-40 flex-col gap-3">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="h-14 w-14 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#E10600] flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(124,92,255,0.8)] hover:scale-110 transition-transform"
        >
          <Instagram className="h-6 w-6 text-neutral-900" />
        </motion.a>
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          href={`tel:${PHONE}`}
          aria-label="Pozovite"
          className="h-14 w-14 rounded-full bg-[#FAF7F1] text-black flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform"
        >
          <Phone className="h-6 w-6" />
        </motion.a>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden fixed bottom-4 left-4 right-4 z-40 rounded-2xl glass-panel p-2 flex items-center gap-2 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]"
      >
        <a
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E10600] py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" /> Pozovite
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="h-11 w-11 rounded-xl bg-neutral-900/[0.08] flex items-center justify-center border border-neutral-900/10"
        >
          <Instagram className="h-5 w-5 text-neutral-900" />
        </a>
        <a
          href={`sms:${PHONE}`}
          aria-label="Poruka"
          className="h-11 w-11 rounded-xl bg-neutral-900/[0.08] flex items-center justify-center border border-neutral-900/10"
        >
          <MessageCircle className="h-5 w-5 text-neutral-900" />
        </a>
      </motion.div>
    </>
  );
}