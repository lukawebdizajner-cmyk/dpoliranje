import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export function Lightbox({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
          onClick={onClose}
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            src={src}
            alt="Galerija"
            className="max-h-[92vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_40px_100px_-10px_rgba(124,92,255,0.5)]"
          />
          <button
            aria-label="Zatvori"
            onClick={onClose}
            className="absolute top-6 right-6 h-11 w-11 rounded-full glass-panel flex items-center justify-center text-neutral-900 hover:bg-neutral-900/10 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}