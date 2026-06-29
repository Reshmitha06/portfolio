"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "WaveScope",
    subtitle: "Digital Waveform Viewer & EDA Analyzer",
    description: "Browser-based VCD waveform viewer with high-performance Canvas rendering, interactive zoom/pan/cursor, and AI-powered signal analysis. Includes Python CLI tools for timing violation detection and signal statistics.",
    tech: ["Next.js", "TypeScript", "Python", "Canvas API", "Gemini AI"],
    link: "https://wavescope-iota.vercel.app",
    github: "https://github.com/Reshmitha06/wavescope",
    highlight: true,
  },
  {
    title: "LogicForge",
    subtitle: "Digital Logic Simulator & Circuit Designer",
    description: "EDA-inspired logic simulator with boolean algebra parsing, truth table generation, Karnaugh maps, SVG gate diagrams, Verilog HDL code generation, and AI circuit design assistant.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "SVG", "Verilog"],
    link: "https://logicforge-khaki.vercel.app",
    github: "https://github.com/Reshmitha06/logicforge-",
    highlight: true,
  },
  {
    title: "DocuMind",
    subtitle: "AI-Powered Document Intelligence",
    description: "Full-stack RAG application — upload PDFs, ask questions in natural language, get AI-generated answers grounded in document context. Uses text embeddings with cosine similarity vector search.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "RAG", "Embeddings"],
    link: "https://documind-pi-one.vercel.app",
    github: "https://github.com/Reshmitha06/documind",
    highlight: false,
  },
  {
    title: "SnapShrink",
    subtitle: "Client-Side Image Compressor",
    description: "Batch image compressor and format converter. Drag & drop interface with real-time quality preview, format conversion (JPEG/PNG/WebP), and compression statistics — all processed locally in the browser.",
    tech: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS"],
    link: "https://snapshrink-three.vercel.app",
    github: "https://github.com/Reshmitha06/snapshrink",
    highlight: false,
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`bg-white border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                project.highlight
                  ? "border-gray-200 ring-1 ring-gray-100"
                  : "border-gray-100"
              }`}
            >
              {project.highlight && (
                <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-0.5 rounded mb-3">
                  Featured — EDA/Cadence Domain
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-gray-500 mb-2">
                {project.subtitle}
              </p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm pt-2 border-t border-gray-50">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Live Demo &rarr;
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
