"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EMPHASIZED_DECELERATE = [0.05, 0.7, 0.1, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.8, delay, ease: EMPHASIZED_DECELERATE }}
    >
      {children}
    </motion.div>
  );
}
