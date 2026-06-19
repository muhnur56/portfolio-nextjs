"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed15,transparent_40%)]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education
          </h2>

          <p className="text-sm text-gray-400 mt-2 text-violet-600">
            JOURNEY, EXPERIENCE & ACHIEVEMENT
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-cyan-400 mx-auto rounded-full mt-4"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-slate-700 -translate-x-1/2"
          />

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.2,
                  }}
                  viewport={{ once: true }}
                  className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-900 z-10"
                />

                {/* Card */}
                <div className="w-full md:w-[40%] md:h-[120px]">
                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="bg-[#0f172a]/70 backdrop-blur-md border border-slate-700 rounded-2xl p-3 hover:border-violet-500 transition-all duration-300"
                  >
                    <p className="text-cyan-400 text-xs font-semibold mb-2">
                      {item.year}
                    </p>

                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm mb-3 text-violet-600">
                      {item.location}
                    </p>

                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400">
                      {item.level}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}