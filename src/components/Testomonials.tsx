"use client";

import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const Testomonials = () => {
  return (
    <section className="flex flex-col items-center justify-center my-24 mb-28 px-4">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="uppercase hidden md:block text-xl md:text-2xl font-bold text-neutral-500 dark:text-neutral-100 mb-4"
      >
        Testimonials
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-mdtracking-wide mb-16 text-base md:text-lg font-medium text-neutral-700 dark:text-neutral-500"
      >
        What collaborators say about working with me
      </motion.h2>

      {/* Cards Container */}
      <div className="grid gap-8 shadow-lg shadow-cyan-500/10 max-w-3xl w-full rounded-2xl">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl border border-gray-200 dark:border-none rounded-2xl shadow-lg p-6 flex flex-col gap-4"
          >
            {/* Recommendation */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base select-none">
              “{testimonial.recommendation}”
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-4">
              {testimonial.image ? (
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
              )}

              <div
                className="flex flex-col gap-[2px]"
                onClick={() => window.open(testimonial.profileUrl, "_blank")}
              >
                <h3 className="font-medium text-gray-900 dark:text-gray-100 hover:underline cursor-pointer">
                  {testimonial.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 select-none">
                  {testimonial.designation} • {testimonial.company}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testomonials;
