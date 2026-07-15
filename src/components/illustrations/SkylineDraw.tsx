"use client";

import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.15, duration: 1.6, ease: [0.65, 0, 0.35, 1] as const },
      opacity: { delay: i * 0.15, duration: 0.4 },
    },
  }),
};

export default function SkylineDraw({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* linhas de grade de fundo */}
      <motion.g
        stroke="var(--color-paper)"
        strokeOpacity={0.08}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="420" strokeWidth="1" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 84} x2="1000" y2={i * 84} strokeWidth="1" />
        ))}
      </motion.g>

      {/* linha do solo */}
      <motion.line
        x1="0" y1="400" x2="1000" y2="400"
        stroke="var(--color-scarlet)" strokeWidth="1.5"
        custom={0} variants={draw} initial="hidden" animate="visible"
      />

      {/* prédio 1 */}
      <motion.path
        d="M60 400 V240 H160 V400"
        stroke="var(--color-paper)" strokeWidth="1.5"
        custom={1} variants={draw} initial="hidden" animate="visible"
      />
      {/* prédio 2 (destaque em vermelho) */}
      <motion.path
        d="M180 400 V150 H300 V400"
        stroke="var(--color-scarlet)" strokeWidth="2"
        custom={1.4} variants={draw} initial="hidden" animate="visible"
      />
      <motion.path
        d="M180 150 L240 100 L300 150"
        stroke="var(--color-scarlet)" strokeWidth="2"
        custom={1.9} variants={draw} initial="hidden" animate="visible"
      />
      {/* prédio 3 */}
      <motion.path
        d="M320 400 V260 H420 V400"
        stroke="var(--color-paper)" strokeWidth="1.5"
        custom={1.6} variants={draw} initial="hidden" animate="visible"
      />
      {/* torre alta */}
      <motion.path
        d="M460 400 V90 H560 V400"
        stroke="var(--color-paper)" strokeWidth="1.5"
        custom={2} variants={draw} initial="hidden" animate="visible"
      />
      {/* grade de janelas da torre */}
      <motion.g
        stroke="var(--color-paper)" strokeOpacity={0.4} strokeWidth="1"
        custom={2.6} variants={draw} initial="hidden" animate="visible"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1="460" y1={120 + i * 40} x2="560" y2={120 + i * 40} />
        ))}
      </motion.g>
      {/* prédio 4 */}
      <motion.path
        d="M600 400 V220 H680 V400"
        stroke="var(--color-paper)" strokeWidth="1.5"
        custom={2.1} variants={draw} initial="hidden" animate="visible"
      />
      {/* casa pequena */}
      <motion.path
        d="M720 400 V320 H800 V400 M720 320 L760 280 L800 320"
        stroke="var(--color-paper)" strokeWidth="1.5"
        custom={2.3} variants={draw} initial="hidden" animate="visible"
      />
      {/* guindaste — em obra */}
      <motion.path
        d="M860 400 V140 M860 140 L960 140 M860 170 L900 140 M940 140 V170"
        stroke="var(--color-scarlet)" strokeWidth="2"
        custom={2.8} variants={draw} initial="hidden" animate="visible"
      />
    </svg>
  );
}
