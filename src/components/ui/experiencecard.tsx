"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  position: string;
  date: string;
  description: string;
  techStack: string[];
}

export default function ExperienceCard({
  company,
  position,
  date,
  description,
  techStack,
}: ExperienceCardProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold dark:text-white">{company}</div>
        <div className="text-sm text-gray-300">
          {/* Company Logo Placeholder */}
        </div>
      </div>

      <div className="text-lg font-medium dark:text-white mb-4">
        {position} <span className="text-sm ml-2 text-neutral-400">{date}</span>
      </div>

      <div className="text-sm text-neutral-400 mb-4">{description}</div>

      {/* Tech Stack */}
      <div className="flex gap-2 flex-wrap">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="group relative"
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>{tech}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
