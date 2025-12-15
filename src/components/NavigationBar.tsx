"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CodeXml,
  User,
  Sun,
  Moon,
  Hammer,
  Download,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const items = [
  { icon: User, label: "About me" },
  { icon: Hammer, label: "My Builds" },
  { icon: CodeXml, label: "Skills" },
  { icon: BriefcaseBusiness, label: "Experience" },
  { icon: Download, label: "Resume" },
  { icon: CodeXml, label: "Connect me" },
];

export default function NavigationBar() {
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider delayDuration={200}>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 18,
        }}
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="flex items-center gap-3 rounded-2xl border dark:border-white/10 dark:bg-black/40 px-4 py-2 backdrop-blur-md shadow-xl">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <motion.button
                    whileHover={{
                      scale: 1.12,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.96 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="group bg-black/4 dark:bg-white/5 relative flex h-10 w-10 items-center justify-center cursor-pointer rounded-full text-foreground"
                  >
                    <span className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 blur-md transition group-hover:opacity-100" />

                    <Icon className="relative h-5 w-5 opacity-100 transition group-hover:text-blue-600 " />
                  </motion.button>
                </TooltipTrigger>

                <TooltipContent side="top" sideOffset={10}>
                  <p className="text-xs font-medium">{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}

          <div className="mx-2 h-6 w-px bg-border dark:bg-white/20" />

          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                whileHover={{ rotate: 0, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative ml-0 cursor-pointer bg-black/4 dark:bg-white/5 flex h-10 w-10 items-center justify-center rounded-full"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <span className="absolute inset-0 rounded-full bg-primary/20 opacity-0 blur-md transition hover:opacity-100" />
                {theme === "dark" ? (
                  <Sun className="relative h-5 w-5 hover:text-yellow-600" />
                ) : (
                  <Moon className="relative h-5 w-5 hover:text-blue-600" />
                )}
              </motion.button>
            </TooltipTrigger>

            <TooltipContent side="top" sideOffset={10}>
              <p className="text-xs font-medium">
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
