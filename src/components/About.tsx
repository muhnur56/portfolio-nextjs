"use client";

import { profile, skills } from "@/data/portfolio";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 bg-[var(--bg2)]"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[4px] text-[var(--muted)] mb-2 text-violet-600"
        >
          ABOUT ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-10"
        >
          Tentang Saya
        </motion.h2>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* KIRI */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)]">
              <Image
                src="/foto.png"
                alt={profile.name}
                width={200}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {profile.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="bg-[var(--bg2)] border border-[var(--border)] rounded-xl p-4 text-center"
                >
                  <h3 className="text-xl font-bold text-[var(--accent)]">
                    {stat.num}
                  </h3>

                  <p className="text-xs text-[var(--muted)] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 bg-[var(--bg2)] border border-[var(--border)] rounded-xl p-5"
            >
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
                Status
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-[var(--text)]">
                  <GraduationCap
                    size={16}
                    className="text-[var(--accent)]"
                  />
                  <span>Freshgraduate</span>
                </div>

                <div className="flex items-center gap-3 text-[var(--text)]">
                  <MapPin
                    size={16}
                    className="text-[var(--accent)]"
                  />
                  <span>Kediri, Jawa Timur</span>
                </div>

                <div className="flex items-center gap-3 text-cyan-400">
                  <span>●</span>
                  <span>Open to Work</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* KANAN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2"
            >
              {profile.name}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[var(--accent)] text-base mb-5"
            >
              Mobile Developer • UI/UX Designer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[15px] text-[var(--muted)] leading-7 mb-8 text-justify"
            >
              {profile.description}
            </motion.p>

            {/* Skills */}
            <div className="space-y-8">
              {skills.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: groupIndex * 0.15,
                  }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xs uppercase tracking-wider text-[var(--muted)] mb-4">
                    {group.category}
                  </h4>

                  <div className="space-y-4">
                    {group.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-[var(--text)]">
                            {skill.name}
                          </span>

                          <span className="text-sm text-[var(--muted)]">
                            {skill.pct}%
                          </span>
                        </div>

                        <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${skill.pct}%`,
                            }}
                            transition={{
                              duration: 1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <h4 className="text-xs uppercase tracking-wider text-[var(--muted)] mb-4">
                Expertise
              </h4>

              <div className="flex flex-wrap gap-2">
                {["Dart", "Flutter", "Kotlin", "UI/UX", "GetX"].map(
                  (item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-2 text-sm rounded-full bg-[var(--bg2)] border border-[var(--border)] text-[var(--text)]"
                    >
                      {item}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition"
              >
                Lihat Project
              </a>

              <a
                href="/cv.pdf"
                className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text)] text-sm hover:bg-[var(--bg2)] transition"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}