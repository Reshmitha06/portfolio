"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "LogicForge - Digital Logic Simulator",
    description: "EDA-inspired digital logic simulator with boolean algebra parsing, truth tables, Karnaugh maps, SVG gate diagrams, Verilog code generation, and an AI circuit design assistant powered by Gemini.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "EDA", "Verilog"],
    link: "https://logicforge-khaki.vercel.app",
    github: "https://github.com/Reshmitha06/logicforge-",
  },
  {
    title: "DocuMind - AI Document Q&A",
    description: "Full-stack RAG application that lets users upload PDFs and ask questions using AI. Built with Next.js API routes, Google Gemini AI, text embeddings, and cosine similarity vector search.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "RAG", "LLM"],
    link: "https://documind-pi-one.vercel.app",
    github: "https://github.com/Reshmitha06/documind",
  },
  {
    title: "SnapShrink - Image Compressor",
    description: "Client-side image compressor and format converter. Supports drag & drop, quality adjustment, batch processing, and conversion between JPEG, PNG, and WebP formats.",
    tech: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS"],
    link: "https://snapshrink-three.vercel.app",
    github: "https://github.com/Reshmitha06/snapshrink",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-2"
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-16 h-0.5 bg-gray-300 mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.link}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Live Demo &rarr;
                </a>
                <a
                  href={project.github}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
