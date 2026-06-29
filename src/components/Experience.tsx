"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Cognizant",
    period: "2025 - Present",
    description:
      "Working as a Junior Software Engineer, contributing to software development and engineering solutions.",
  },
  {
    role: "Web Development Intern",
    company: "QTech Solutions",
    period: "2024",
    description:
      "Designed, developed, and deployed the company's official website using WordPress, HTML, CSS, and JavaScript. Optimized the website for better performance and SEO.",
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
      "Developed full-stack web applications using React, Node.js, Express.js, and MySQL. Improved website performance and security through API optimizations.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-2"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-16 h-0.5 bg-gray-300 mb-12"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] bg-white border-2 border-gray-300 rounded-full" />

                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
