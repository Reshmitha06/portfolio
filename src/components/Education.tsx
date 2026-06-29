"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (IoT)",
    institution: "Hyderabad Institute of Technology and Management",
    period: "2021 – 2025",
    score: "CGPA: 8.17",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Vaishnavi Abhyaas Junior College",
    period: "2018 – 2020",
    score: "CGPA: 9.36",
  },
  {
    degree: "10th Standard",
    institution: "St. Anthony High School",
    period: "2017 – 2018",
    score: "CGPA: 9.8",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-2"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-16 h-0.5 bg-gray-300 mb-12"
        />

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{edu.institution}</p>
              </div>
              <div className="mt-3 sm:mt-0 sm:text-right shrink-0">
                <p className="text-sm font-medium text-gray-900">{edu.score}</p>
                <p className="text-xs text-gray-400 mt-0.5">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
