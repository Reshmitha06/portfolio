"use client";

import { motion } from "framer-motion";

const details = [
  { label: "Location", value: "Hyderabad, Telangana" },
  { label: "Education", value: "B.Tech CSE (IoT), HITAM — CGPA: 8.33" },
  { label: "Interests", value: "Web Dev, GenAI, EDA, IoT, VR" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-heading mb-12"
        >
          About
          <span className="block w-12 h-0.5 bg-bdr-h mt-3" />
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-foreground leading-relaxed mb-4">
              I&apos;m a <span className="text-heading font-medium">Junior Software Engineer at Cognizant</span> with
              a B.Tech in Computer Science &amp; Engineering (IoT) from HITAM, Hyderabad.
              I build full-stack applications with modern frameworks and have deep interest
              in generative AI and EDA tooling.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              My journey includes internships at QTech Solutions, Digi Quanta, and
              Swecha Organization — working with React, Node.js, embedded systems,
              and 3D/VR development.
            </p>
            <p className="text-sec leading-relaxed text-sm">
              Passionate about clean code, open-source, and building products that solve real problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 space-y-4"
          >
            {details.map((item) => (
              <div key={item.label} className="border-l border-bdr pl-4">
                <p className="text-[11px] uppercase tracking-wider text-muted mb-0.5">{item.label}</p>
                <p className="text-sm text-foreground">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
