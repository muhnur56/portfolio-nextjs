"use client";

import IDCard from "./IDCard";
import { profile } from "@/data/portfolio";
import { Sparkles } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-8 px-4 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* KIRI */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div>
              <motion.span
                variants={fadeUp}
                className="inline-block px-1 py-2 mb-1 text-sm font-light"
              >
                Portfolio 2026
              </motion.span>
            </div>


            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-violet-400/20 bg-violet-400/10 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-violet-300" />
              <span className="text-white text-sm font-medium">
                {profile.greeting}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[var(--accent)]"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[15px] text-[var(--muted)] max-w-[440px] mb-8 leading-6 text-justify"
            >
              {profile.description}
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 flex-wrap"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 rounded-lg text-sm font-medium bg-violet-900 text-white hover:bg-violet-500 transition"
              >
                Lihat Projects
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 rounded-lg text-sm font-medium border border-[var(--accent)] text-[var(--accent)] hover:bg-violet-900 hover:text-white transition"
              >
                Hubungi Saya
              </motion.a>
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mt-6"
            >
              {[
                {
                  icon: <FaInstagram size={20} />,
                  link: "https://www.instagram.com/muh_nur56/",
                },
                {
                  icon: <FaWhatsapp size={20} />,
                  link: "https://wa.me/085236590381",
                },
                {
                  icon: <FaGithub size={20} />,
                  link: "https://github.com/muhnur56",
                },
                {
                  icon: <FaLinkedin size={20} />,
                  link:
                    "https://www.linkedin.com/in/muhammad-nur-713905328/",
                },
                {
                  icon: <FaDribbble size={20} />,
                  link:
                    "https://dribbble.com/muhammadnurr",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border border-violet-500/20 bg-violet-500/10 hover:bg-violet-500/20 transition"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* KANAN */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            whileHover={{
              y: -8,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IDCard
                name={profile.name}
                role={profile.info.role}
                photo={profile.photo}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}