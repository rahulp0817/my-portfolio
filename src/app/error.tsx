"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          An unexpected error occurred. You can try again, or reach out for
          support if the issue persists.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="
              px-5 py-2 rounded-md text-sm
              dark:bg-cyan-500 hover:bg-cyan-400
              transition text-white cursor-pointer font-semibold font-mono
            "
          >
            Try again
          </button>
          <a
            href="mailto:pradhanrahul277@gmail.com"
            className="
              px-5 py-2 rounded-md text-sm font-medium
              border border-neutral-300 text-neutral-700
              hover:bg-neutral-100
              dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800
              transition
            "
          >
            Contact support
          </a>
        </div>
        
        {error?.digest && (
          <p className="mt-6 text-xs text-neutral-400">
            Error ID: <span className="font-mono">{error.digest}</span>
          </p>
        )}
      </motion.div>
    </div>
  );
}
