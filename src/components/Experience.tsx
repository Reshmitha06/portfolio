"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Cognizant",
    period: "2025 – Present",
    description:
      "Contributing to software development and engineering solutions as a full-time engineer.",
  },
  {
    role: "Web Development Intern",
    company: "QTech Solutions",
    period: "2024",
    description:
      "Designed and deployed company website using WordPress, HTML, CSS, JavaScript. Optimized for performance and SEO.",
  },
  {
    role: "Junior Technical Engineer Intern",
    company: "Digi Quanta",
    period: "2024",
    description:
      "Assisted in IoT device development, debugging, and performance optimization.",
  },
  {
    role: "Full Stack Development Intern",
    company: "Swecha Organization",
    period: "2023",
    description:
      "Built full-stack web apps using React, Node.js, Express.js, and MySQL.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-heading mb-12"
        >
          Experience
          <span className="block w-12 h-0.5 bg-bdr-h mt-3" />
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-bdr" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.period + exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 w-[11px] h-[11px] bg-background border border-bdr-h rounded-full" />
                <span className="text-[11px] text-muted uppercase tracking-wider">{exp.period}</span>
                <h3 className="text-base font-semibold text-heading mt-1">{exp.role}</h3>
                <p className="text-sm text-sec mb-1">{exp.company}</p>
                <p className="text-sm text-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
