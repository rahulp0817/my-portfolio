"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatbotModal({ isOpen, onClose }: ChatbotModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-28 right-16 z-50 w-[360px] h-[520px]
                       rounded-2xl border border-white/10 backdrop-blur-xl
                       flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 mt-1">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-gray-700 dark:text-gray-200 font-semibold" />
                <div className="dark:text-white font-medium">Rahul Pradhan</div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm text-white/90">
              <div className="bg-blue-500/40 p-3 rounded-xl w-fit max-w-[80%]">
                Hi 👋 How can I help you today?
              </div>
            </div>

            {/* Input */}
            <div className="p-3">
              <div className="flex items-center gap-2 border border-neutral-400 rounded-xl px-3 py-2 backdrop-blur-md">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-black dark:text-white dark:placeholder-white/50
                             outline-none text-sm"
                />
                <button className="dark:text-white/80 hover:text-white transition">
                  ➤
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
