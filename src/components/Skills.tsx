"use client";

import { motion } from "framer-motion";

import {
  Code2,
  MonitorSmartphone,
  Braces,
  Palette,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import { FaFlutter, FaReact } from "react-icons/fa6";
import { SiKotlin, SiTailwindcss } from "react-icons/si";

const expertise = [
  { name: "Web Development", icon: <Code2 size={18} /> },
  { name: "Mobile Apps", icon: <MonitorSmartphone size={18} /> },
  { name: "UI/UX", icon: <Palette size={18} /> },
];

const languages = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "Flutter", icon: <FaFlutter /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "React", icon: <FaReact /> },
];

const tools = [
  { name: "GitHub", icon: <FaGithub size={18} /> },
  { name: "Figma", icon: <FaFigma size={18} /> },
  { name: "VS Code", icon: <Braces size={18} /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-6 relative bg-[var(--bg)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-violet-600">
            What I Bring
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Skills & Tools
          </h2>

          <div className="w-14 h-1 bg-[var(--accent)] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Expertise */}
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-center text-[var(--muted)] mb-5">
            Expertise
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-4"
          >
            {expertise.map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                className="
                  group relative overflow-hidden
                  rounded-xl border border-[var(--border)]
                  bg-[var(--bg2)]
                  px-5 py-4
                  flex items-center gap-3
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  hover:border-[var(--accent)]
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 text-[var(--accent)] transition-transform duration-300 group-hover:scale-125">
                  {item.icon}
                </div>

                <span className="relative z-10 font-medium text-sm">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages */}
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-center text-[var(--muted)] mb-5">
            Languages & Frameworks
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {languages.map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                className="
                  group relative overflow-hidden
                  rounded-xl border border-[var(--border)]
                  bg-[var(--bg2)]
                  px-4 py-4
                  flex items-center gap-3
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:border-[var(--accent)]
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span
                  className="
                    relative z-10
                    text-xl text-[var(--accent)]
                    transition-transform duration-300
                    group-hover:scale-125
                  "
                >
                  {item.icon}
                </span>

                <span className="relative z-10 text-sm font-medium">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-center text-[var(--muted)] mb-5">
            Tools
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tools.map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                className="
                  group relative overflow-hidden
                  w-[180px]
                  rounded-xl border border-[var(--border)]
                  bg-[var(--bg2)]
                  px-4 py-4
                  flex items-center justify-center gap-3
                  text-center
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:border-[var(--accent)]
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative z-10 text-[var(--accent)] transition-transform duration-300 group-hover:scale-125">
                  {item.icon}
                </span>

                <span className="relative z-10 text-sm font-medium">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}