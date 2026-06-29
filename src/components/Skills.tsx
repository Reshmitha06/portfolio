"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "WordPress"],
  },
  {
    title: "Programming & Database",
    skills: ["Python", "MySQL", "Express.js", "REST APIs"],
  },
  {
    title: "IoT & Tools",
    skills: ["Arduino IDE", "Sensor Integration", "Unity3D", "Blender", "Figma", "Wireshark", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-2"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-16 h-0.5 bg-gray-300 mb-12"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
