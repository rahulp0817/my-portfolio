"use client";
import Image from "next/image";
import {
  Instagram,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ScanQrCodeIcon,
  CalendarDays,
  Link,
  User,
} from "lucide-react";
import Modal from "../ui/modal";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const socials = [
  {
    icon: Mail,
    label: "Email",
    onClick: () => window.open("mailto:pradhanrahul277@gmail.com", "_blank"),
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    onClick: () =>
      window.open("https://linkedin.com/in/rahul-pradhan17", "_blank"),
  },
  {
    icon: Github,
    label: "GitHub",
    onClick: () => window.open("https://github.com/rahulp0817", "_blank"),
  },
  {
    icon: Twitter,
    label: "Twitter",
    onClick: () => window.open("https://twitter.com/yourusername", "_blank"),
  },
  {
    icon: Instagram,
    label: "Instagram",
    onClick: () =>
      window.open("https://www.instagram.com/rahulpradhan_17", "_blank"),
  },
  {
    icon: CalendarDays,
    label: "Schedule",
    onClick: () => window.open("https://twitter.com/yourusername", "_blank"),
  },
  {
    icon: ScanQrCodeIcon,
    label: "Scan QR",
    onClick: () => window.open("https://twitter.com/yourusername", "_blank"),
  },
];

const ConnectModal = ({ isOpen, onClose }: ConnectModalProps) => {
  const [isShowingQr, setIsShowingQr] = useState<boolean>(false);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center text-center my-4 mt-4">
        <div className="relative mb-8 h-36 w-full flex max-w-3xs justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {!isShowingQr ? (
              <motion.div
                key="profile"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative h-36 w-36 rounded-full overflow-hidden"
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            ) : (
              <motion.div
                key="qr"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative h-36 w-36"
              >
                <Image
                  src="/qrcode_profile.png"
                  alt="QR Code"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <h2 className="text-xl font-semibold">Let’s Connect</h2>
        <p className="mt-1 mb-6 text-sm text-muted-foreground">
          Reach out for opportunities, collaborations, or just a chat.
        </p>

        {/* Social Icons */}
        <div className="mx-auto flex max-w-2xs flex-wrap justify-center gap-4">
          {socials.map((social, index) => {
            const isQr = social.label === "Scan QR";
            const Icon = isQr
              ? isShowingQr
                ? User
                : ScanQrCodeIcon
              : social.icon;

            return (
              <div key={index} className="flex flex-col items-center">
                <motion.button
                  onClick={() => {
                    if (isQr) {
                      setIsShowingQr((prev) => !prev);
                    } else {
                      social.onClick();
                    }
                  }}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{
                    type: "tween",
                    duration: 0.15,
                    ease: "easeOut",
                  }}
                  className={`group flex h-11 w-11 items-center justify-center rounded-full border cursor-pointer will-change-transform transform-gpu hover:bg-blue-500/5 dark:hover:bg-muted/80 hover:border-none`}
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5 transition-colors group-hover:text-blue-500" />
                </motion.button>

                {/* <span className="text-[10px] font-mono font-semibold mt-1 text-muted-foreground">
                  {social.label}
                </span> */}
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ConnectModal;
