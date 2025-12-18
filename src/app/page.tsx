"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import SkillsSection from "../components/skills-section";
import Achivement from "@/components/achivement";
import FloatingActionButton from "@/components/fab";
import NavigationBar from "@/components/Navigation/NavigationBar";
import {
  BriefcaseBusiness,
  CodeXml,
  User,
  Hammer,
  Download,
  MessagesSquare,
} from "lucide-react";
import ConnectModal from "@/components/Navigation/ConnectModal";
import MarqueeCompainesLists from "@/components/CompainesLists";
import TestimonialsList from "@/components/Testomonials";
import ChatbotModal from "@/components/Chatbot/ChatModal";
import Experience from "@/components/Experience";
import { Projects } from "@/components/Projects";

export default function Home() {
  const [blurState, setBlurState] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setBlurState(false);
  }, []);

  const navItems = [
    { icon: User, label: "About Me", href: "#about" },
    { icon: Hammer, label: "My Builds", href: "#projects" },
    { icon: CodeXml, label: "Skills", href: "#skills" },
    { icon: BriefcaseBusiness, label: "Experience", href: "#experience" },
    {
      icon: Download,
      label: "Resume",
      onClick: () => window.open("/resume.pdf", "_blank"),
    },
    {
      icon: MessagesSquare,
      label: "Connect",
      onClick: () => setIsConnectOpen((prev) => !prev),
    },
  ];

  return (
    <>
      <motion.div
        initial={{ filter: "blur(50px)" }}
        animate={{ filter: blurState ? "blur(20px)" : "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-rows-[20px_1fr_20px] min-h-screen w-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="row-start-1 flex gap-6 items-center md:justify-end justify-center w-full"
        >
          <a
            href="https://www.linkedin.com/in/rahul-pradhan17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.2, color: "#0A66C2" }}>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="cursor-pointer text-2xl"
              />
            </motion.div>
          </a>

          <a
            href="https://github.com/rahulp0817?tab=repositories&q=&type=&language=&sort=stargazers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.2, color: "#6e5494" }}>
              <FontAwesomeIcon
                icon={faGithub}
                className="cursor-pointer text-2xl"
              />
            </motion.div>
          </a>

          <a
            href="https://x.com/Rahulpradhan017"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.2, color: "#1DA1F2" }}>
              <FontAwesomeIcon
                icon={faXTwitter}
                className="cursor-pointer text-2xl"
              />
            </motion.div>
          </a>

          <a href="mailto:pradhanrahul277@gmail.com">
            <motion.div whileHover={{ scale: 1.2, color: "#D44638" }}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="cursor-pointer text-2xl"
              />
            </motion.div>
          </a>

          <a href="https://drive.google.com/file/d/15JuIk5yQApZf_-MAwviicaKhNK_ZKsS_/view?usp=drive_link">
            <motion.div whileHover={{ scale: 1.2, color: "#4285F4" }}>
              <FontAwesomeIcon
                icon={faGoogleDrive}
                className="cursor-pointer text-2xl"
              />
            </motion.div>
          </a>
        </motion.nav>
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-center sm:text-left">
            Hi, I&apos;m Rahul Pradhan
          </h1>
          <ul className="list-inside list-disc text-md sm:text-left text-gray-400 font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              A full-stack engineer from Bengaluru, India
            </li>
            <li className="mb-2">
              Currently Working at Recordbook(YC22) as a Software Engineer
            </li>
            <li className="mb-2">
              Have 1+ yrs of experiance building Software acrross App and Web
            </li>
            <li className="mb-2">
              Building{" "}
              <a
                href="https://github.com/rahulp0817/automation-workflow"
                className=" hover:text-orange-400 text-white"
              >
                CongniTask
              </a>{" "}
              an AI Automation SAAS Platform, solving complex workflows
            </li>
            <li className="mb-2">
              Reach out if you want to find a way to work together!
            </li>
          </ul>

          <motion.div className="">
            <h1 className="text-2xl font-bold text-center sm:text-left mb-6">
              Side Projects
            </h1>

            <ol className="list-disc pl-4 text-md sm:text-left text-gray-400 font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2 px-0 text-gray-400">
                <a
                  href="https://github.com/rahulp0817/Spring-Boot-JournalApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 text-white"
                >
                  Journal App
                </a>{" "}
                Managed user-generated content with MongoDB with Spring Security
              </li>
              <li className="mb-2 text-gray-400">
                <a
                  href="https://github.com/rahulp0817/Deployment-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 text-white"
                >
                  Deployment Server
                </a>{" "}
                Used to deploy any app on the AWS cloud with the ECS scaling
                feature
              </li>
              <li className="mb-2 pl-0 text-gray-400">
                <a
                  href="https://github.com/rahulp0817/LLM-Models"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 text-white"
                >
                  AI Chat-Bot
                </a>{" "}
                Multi-document reader handling PDFs, Word, and PPTs with natural
                language processing
              </li>
              <li className="mb-2 text-gray-400">
                <a
                  href="https://github.com/rahulp0817/Payment-WebApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 text-white"
                >
                  Polypay
                </a>{" "}
                Peer-to-peer payment platform (like Paytm), handling secure
                transactions
              </li>
              <li className="mb-2 text-gray-400">
                <a
                  href="https://github.com/rahulp0817/Netflix-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 text-white"
                >
                  Movie Web App
                </a>{" "}
                Movie Streaming platform similar kind of Netflix (UI)
              </li>
              <li className="mb-2 text-gray-400">
                <a
                  href="https://github.com/rahulp0817/tedmax-innovations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 text-white"
                >
                  Learning Management
                </a>{" "}
                User-centric LMS platform with dynamic course management (UI)
              </li>
              <li className="mb-2 text-gray-400">
                <a
                  href="https://github.com/rahulp0817/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 text-white"
                >
                  E-Commerce Stremming App
                </a>{" "}
                Build an React Native Application (UI)
              </li>
            </ol>
            <SkillsSection />
            <Achivement />
          </motion.div>
        </motion.main>
      </motion.div>
      {/* <section id="about">About Section</section>
      <section id="builds">Builds Section</section>
      <section id="skills">Skills Section</section>
      <section id="experience">Experience Section</section>
      <section id="connect">Connect Section</section> */}
      <MarqueeCompainesLists />
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="testimonials">
        <TestimonialsList />
      </section>
      <NavigationBar items={navItems} />
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />
      <FloatingActionButton mainAction={() => setOpen((prev) => !prev)} />
      <ChatbotModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
