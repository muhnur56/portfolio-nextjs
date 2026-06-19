"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { projects } from "@/data/project";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const filteredProjects =
    activeFilter === "All"
      ? otherProjects
      : otherProjects.filter(
          (project) => project.category === activeFilter
        );

  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  const startIndex = (currentPage - 1) * projectsPerPage;

  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 md:px-6 relative bg-[var(--bg2)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <span className="border-l-4 border-purple-500 pl-3">
              Projects
            </span>
          </h2>

          <div className="flex flex-wrap gap-2">
            {["All", "Web App", "Mobile App", "UI/UX"].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1);
                }}
                className={`px-4 py-1.5 rounded-full text-xs transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-purple-600 text-white"
                    : "border border-white/10 text-gray-400 hover:border-purple-500 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured */}
        {featuredProject && activeFilter === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
            grid lg:grid-cols-2
            overflow-hidden
            rounded-2xl
            border border-purple-500/30
            bg-[#0f1026]
            mb-6
          "
          >
            <div className="relative min-h-[300px] bg-gradient-to-br from-purple-700/80 to-purple-900/20">
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 rounded-full bg-purple-600 text-[10px] text-white">
                  FEATURED
                </span>
              </div>

              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-contain p-6"
              />
            </div>

            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-cyan-400">
                  {featuredProject.title}
                </h3>

                <span className="px-2.5 py-1 rounded-full bg-purple-600/20 text-purple-300 text-[10px]">
                  {featuredProject.category}
                </span>
              </div>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-white/10 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 text-sm hover:border-purple-500 transition"
                >
                  <FaGithub size={14} />
                  Github
                </a>

                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 text-sm hover:border-cyan-500 transition"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          key={`${activeFilter}-${currentPage}`}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="
              bg-[#0f1026]
              border border-white/10
              rounded-xl
              overflow-hidden
              hover:border-purple-500/40
              transition-all duration-300
            "
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center gap-2">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    {project.title}
                  </h3>

                  <span className="px-2.5 py-1 rounded-full bg-purple-600/20 text-purple-300 text-[10px]">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-400 mt-3 text-xs leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full bg-white/10 text-[10px] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-xs hover:border-purple-500 transition"
                  >
                    <FaGithub size={13} />
                    Github
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-xs hover:border-cyan-500 transition"
                  >
                    <ExternalLink size={13} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-2 mt-8"
          >
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={currentPage === 1}
              className="
              px-3 py-2
              rounded-lg
              border border-white/10
              text-sm
              text-gray-300
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`
                w-9 h-9 rounded-lg text-sm transition-all
                ${
                  currentPage === i + 1
                    ? "bg-purple-600 text-white"
                    : "border border-white/10 text-gray-400 hover:border-purple-500 hover:text-white"
                }
              `}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="
              px-3 py-2
              rounded-lg
              border border-white/10
              text-sm
              text-gray-300
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
            >
              Next
            </button>
          </motion.div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No projects found.
          </div>
        )}
      </div>
    </section>
  );
}