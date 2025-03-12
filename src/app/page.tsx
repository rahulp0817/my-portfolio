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

export default function Home() {
  const [blurState, setBlurState] = useState(false);

  useEffect(() => {
    setBlurState(false);
  }, []);

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
              A full-stack engineer from India, Bengaluru learning about AI
              Agents
            </li>
            <li className="mb-2">
              Building{" "}
              <a
                href="https://github.com/rahulp0817/automation-workflow"
                className=" hover:text-orange-400 text-white"
              >
                CongniTask
              </a>{" "}
              an AI Automation SAAS Platform
            </li>
            <li className="mb-2">Worked on a streaming statup for 8 months</li>
            <li className="mb-2">
              Reach out if you want to find a way to work together!
            </li>
          </ul>

          <motion.div className="">
            <h1 className="text-2xl font-bold text-center sm:text-left mb-6">
              Side Projects
            </h1>

            <ol className="list-inside list-decimal text-sm  sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2 text-gray-400">
                <a
                  href="https://github.com/rahulp0817/Spring-Boot-JournalApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 text-white"
                >
                  Journal App
                </a>{" "}
                Used to create users and their journals
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
              <li className="mb-2 text-gray-400">
                <a
                  href="https://github.com/rahulp0817/LLM-Models"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 text-white"
                >
                  AI Chat-Bot
                </a>{" "}
                It&apos;s a Multi-document reading chatbot that can read PDFs,
                Word files, and PPTs.
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
                A Money Transaction platform similar to paypal
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
                LMS platform for students to learn the courses (UI)
              </li>
            </ol>
            <SkillsSection />
            <Achivement />
          </motion.div>
        </motion.main>

        {/* <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </motion.footer> */}
      </motion.div>
    </>
  );
}
