"use client";

import { motion } from "framer-motion";

function Notfound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-neutral-900 dark:text-neutral-100">
      <div className="relative flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-[8rem] md:text-[10rem] font-bold tracking-tight"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-2 text-sm text-neutral-600 dark:text-neutral-400"
        >
          The Page You Are Looking For Does Not Exist.
        </motion.p>
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="
            mt-8 px-4 py-2 rounded-md text-sm
            bg-neutral-900 text-white
            dark:bg-cyan-500 hover:bg-cyan-400
            hover:opacity-90 transition
          "
        >
          Go Home
        </motion.a>
      </div>
    </div>
  );
}

export default Notfound;
