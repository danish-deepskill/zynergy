"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/** Fade-up on scroll into view. Respects prefers-reduced-motion. */
export function Reveal({ delay = 0, className, children }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
