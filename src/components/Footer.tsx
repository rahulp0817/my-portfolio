"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function Footer() {
  return (
    <motion.div
      className="relative w-[98%] mt-12 py-8 bg-background overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {/* Sharp tube line */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scaleX: 0 },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-full h-[1px] origin-center
          bg-gradient-to-r
          from-transparent
          via-neutral-300
          to-transparent
          dark:via-cyan-400
        "
      />

      {/* Glow layer */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 0.7,
            transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
          },
        }}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[80%] h-[14px]
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
          blur-2xl
          dark:via-cyan-400
          dark:opacity-60
        "
      />

      {/* Content */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6,
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.15,
            },
          },
        }}
        className="relative z-10 py-8 max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-4"
      >
        {/* Section 1 */}
        <motion.div className="flex flex-col gap-1 text-center md:text-left">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Rahul Pradhan
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Software Developer
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Bengaluru, India
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div className="flex flex-col gap-3 text-center md:text-left">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
            Contents
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li className="hover:text-neutral-900 font-medium dark:hover:text-neutral-200 cursor-pointer">
              About Me
            </li>
            <li className="hover:text-neutral-900 font-medium dark:hover:text-neutral-200 cursor-pointer">
              Projects
            </li>
            <li className="hover:text-neutral-900 font-medium dark:hover:text-neutral-200 cursor-pointer">
              Experience
            </li>
            <li className="hover:text-neutral-900 font-medium dark:hover:text-neutral-200 cursor-pointer">
              Skills
            </li>
          </ul>
        </motion.div>

        {/* Section 3 */}
        <motion.div className="flex flex-col gap-3 text-center md:text-left">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
            Socials
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li className="hover:text-neutral-900 font-medium dark:hover:text-neutral-200 cursor-pointer">
              LinkedIn
            </li>
            <li className="hover:text-neutral-900 font-medium dark:hover:text-neutral-200 cursor-pointer">
              Instagram
            </li>
            <li className="hover:text-neutral-900 font-medium dark:hover:text-neutral-200 cursor-pointer">
              GitHub
            </li>
            <li className="hover:text-neutral-900 font-medium dark:hover:text-neutral-200 cursor-pointer">
              Twitter
            </li>
          </ul>
        </motion.div>

        {/* Section 4 */}
        <motion.div className="flex flex-col gap-4 text-center md:text-left">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
            Let’s Connect
          </h4>
          <p className="text-sm text-neutral-600  dark:text-neutral-400">
            Want to collaborate or discuss an opportunity? Book a meeting with
            me.
          </p>

          <button
            className="
              w-fit mx-auto md:mx-0
              px-4 py-2 rounded-md
              text-sm font-medium
              text-white cursor-pointer
              bg-cyan-500 hover:bg-cyan-400
              transition duration-300 ease-in-out my-1 shadow-2xl shadow-cyan-500/40
            "
          >
            Schedule Meet
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom line */}
      <motion.p
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delay: 1.2, duration: 0.5 },
          },
        }}
        className="relative z-10 mt-32 max-w-6xl mx-auto px-4 text-sm text-neutral-500 dark:text-neutral-400"
      >
        © Designed & Developed by{" "}
        <span className="font-mono font-semibold dark:text-neutral-200 text-neutral-900">
          Rahul Pradhan
        </span>
      </motion.p>
    </motion.div>
  );
}

export default Footer;
