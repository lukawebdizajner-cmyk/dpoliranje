import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  before: string;
  after: string;
  label?: string;
};

export function BeforeAfter({ before, after, label }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      ref={ref}
      className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-3xl select-none touch-none border border-neutral-900/10 shadow-[0_30px_80px_-20px_rgba(124,92,255,0.35)]"
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
    >
      <img
        src={after}
        alt="Posle detailinga"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt="Pre detailinga"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full glass-panel px-3 py-1 text-[11px] font-medium tracking-widest uppercase text-neutral-900/90">
        Pre
      </div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E10600] px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-white">
        Posle
      </div>
      {label && (
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex justify-center">
          <div className="glass-panel rounded-full px-4 py-1.5 text-xs md:text-sm text-neutral-900/85">
            {label}
          </div>
        </div>
      )}

      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E10600] via-white to-[#FF6B00] shadow-[0_0_20px_rgba(124,92,255,0.8)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass-panel flex items-center justify-center shadow-[0_0_30px_rgba(124,92,255,0.6)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l-6-6 6-6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}