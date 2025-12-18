"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "Building scalable front-end systems",
  "Designing reliable back-end architecture",
  "Shipping production-grade software",
  "Optimizing performance & developer experience",
];

export default function LoadingScreen({ isReady }: { isReady: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % lines.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center text-center">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-semibold font-mono tracking-tight text-neutral-900 dark:text-neutral-100"
            >
              Rahul Pradhan
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.2 }}
              className="mt-1 text-md text-neutral-600 dark:text-neutral-400"
            >
              Software Engineer
            </motion.p>

            {/* Rotating line */}
            <div className="relative mt-6 h-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm text-muted-foreground"
                >
                  {lines[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Thin intelligence line */}
            <motion.div className="mt-6 h-px w-32 bg-foreground/20 overflow-hidden">
              <motion.div
                className="h-px w-1/3 bg-foreground/60"
                animate={{ x: ["-100%", "300%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Optional hint */}
            <p className="mt-6 text-xs text-muted-foreground">
              Preparing personalized experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
