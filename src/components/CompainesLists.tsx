"use client";

import { motion, cubicBezier } from "framer-motion";

export const companies = [
  { id: 1, name: "Toguzo", onClick: () => console.log("Toguzo clicked") },
  { id: 2, name: "Piplub", onClick: () => console.log("Piplub clicked") },
  {
    id: 3,
    name: "RecordBook (YC22)",
    onClick: () => window.open("https://www.rekord.in/", "_blank"),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.35, // allow glow to finish
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

function MarqueeCompainesLists() {
  return (
    <section className="relative w-full py-12 flex justify-center overflow-hidden">
      {/* Sharp tube line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-full h-[1px] origin-center
          bg-gradient-to-r
          from-transparent
          via-neutral-300
          to-transparent
          dark:via-white/60
        "
      />

      {/* Glow layer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[20%] h-[16px]
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
          blur-2xl
          dark:via-white/80
          dark:opacity-60
        "
      />

      <motion.div
        className="relative max-w-5xl w-full px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={containerVariants}
      >
        {/* Editorial line (replaces heading) */}
        <motion.p
          variants={fadeUpVariants}
          className="
            text-base md:text-lg font-medium
            text-neutral-700 dark:text-neutral-500
            max-w-3xl mx-auto
          "
        >
          Teams across startups and organizations I’ve contributed to build and
          ship products
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="mt-14 flex flex-wrap items-center justify-center gap-14"
        >
          {companies.map((company) => (
            <motion.button
              key={company.id}
              onClick={company.onClick}
              variants={fadeUpVariants}
              className="
                text-lg md:text-xl font-bold
                text-neutral-800 dark:text-neutral-200
                hover:text-neutral-900 dark:hover:text-neutral-100
                transition-colors duration-300
                cursor-pointer  font-mono 
              "
            >
              {company.name}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default MarqueeCompainesLists;
