"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href?: string;
  onClick?: () => void;
}

export default function NavigationBar({ items }: { items: NavItem[] }) {
  const { theme, setTheme } = useTheme();

  const handleClick = (item: NavItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      if (item.href.startsWith("#")) {
        const section = document.querySelector(item.href);
        section?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.open(item.href, "_blank");
      }
    }
  };

  return (
    <TooltipProvider delayDuration={200}>
      <motion.div
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        <div className="flex items-center gap-3 rounded-2xl border dark:border-white/10 dark:bg-black/40 px-4 py-2 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.12, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group bg-black/4 dark:bg-white/5 relative flex h-10 w-10 items-center justify-center cursor-pointer rounded-full text-foreground"
                    onClick={() => handleClick(item)}
                  >
                    <span className="absolute inset-0 rounded-xl bg-blue-500/20 dark:bg-primary/20 opacity-0 blur-md transition group-hover:opacity-100" />
                    <Icon className="relative h-5 w-5 opacity-100 transition group-hover:text-blue-600" />
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
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className={`group bg-black/4 dark:bg-white/5 relative flex h-10 w-10 items-center justify-center cursor-pointer rounded-full text-foreground hover:text-blue-500 dark:hover:text-yellow-500`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <span className="absolute inset-0 rounded-xl bg-white opacity-0 blur-md transition group-hover:opacity-100 dark:bg-amber-500/20" />
                {theme === "dark" ? (
                  <Sun className="relative h-5 w-5" />
                ) : (
                  <Moon className="relative h-5 w-5" />
                )}
              </motion.button>
            </TooltipTrigger>

            <TooltipContent side="top" sideOffset={10}>
              <p className="text-xs font-medium">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
