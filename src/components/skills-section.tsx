import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaLinux,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoKubernetes,
  BiLogoSpringBoot,
} from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { FaCss3 } from "react-icons/fa6";

export default function SkillsSection() {
  const skills = [
    { name: "ReactJS", icon: <FaReact /> },
    { name: "NextJS", icon: <RiNextjsFill /> },
    { name: "TypeScript", icon: <BiLogoTypescript /> },
    { name: "JavaScript", icon: <RiJavascriptFill /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "ExpressJS", icon: <SiExpress /> },
    { name: "Git & GitHub", icon: <IoLogoGithub /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Spring Boot", icon: <BiLogoSpringBoot /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <BiLogoKubernetes /> },
  ];

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold text-center sm:text-left mb-6">
        Technical Skills
      </h1>

      <div className="grid md:grid-cols-5 sm:grid-cols-6 grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center px-2 py-1.5 border rounded-full justify-center gap-2 cursor-pointer"
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <motion.span
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-lg"
            >
              {skill.icon}
            </motion.span>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
