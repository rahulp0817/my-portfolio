"use client";
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Action = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
};

interface FloatingActionButtonProps {
  mainAction?: () => void;
  actions?: Action[];
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  mainAction,
  actions = [],
}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div className="fixed z-50 bottom-7 right-12 flex flex-col items-end space-y-3">
      {/* Animated action buttons */}
      <AnimatePresence>
        {open &&
          actions.map((action, index) => (
            <motion.button
              key={index}
              onClick={action.onClick}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white shadow-lg px-4 py-2 rounded-xl hover:bg-gray-100 transition"
            >
              {action.icon}
              <span className="text-sm">{action.label}</span>
            </motion.button>
          ))}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={actions.length > 0 ? toggleMenu : mainAction}
        initial={false}
        // animate={{ rotate: open ? 45 : 0 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, delay: 0.2 }}
        className="w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-xl"
      >
        {actions.length > 0 ? (
          open ? (
            <MessageCircle size={26} />
          ) : (
            <MessageCircle size={26} />
          )
        ) : (
          <MessageCircle size={20} />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
