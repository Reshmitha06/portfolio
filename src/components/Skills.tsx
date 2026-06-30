"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend & Frameworks",
    skills: ["React", "Next.js", "TypeScript", "HTML/CSS"],
  },
  {
    title: "AI / ML & Backend",
    skills: ["Generative AI", "LLMs", "RAG Pipelines", "Python"],
  },
  {
    title: "EDA & Tools",
    skills: ["Verilog/HDL", "VCD Analysis", "Canvas API", "Git", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-heading mb-12"
        >
          Skills
          <span className="block w-12 h-0.5 bg-bdr-h mt-3" />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-bdr rounded-xl p-5 bg-card card-lift"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-sec mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1.5 bg-tag text-foreground rounded-lg border border-bdr hover:border-bdr-h transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
