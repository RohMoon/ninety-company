"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center gap-4 text-center"
    >
      <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
        Ninety Company
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">나인티 컴퍼니</p>
    </motion.section>
  );
}
