"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-2"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-16 h-0.5 bg-gray-300 mb-8"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-600 leading-relaxed mb-4">
              I&apos;m a <span className="text-gray-900 font-medium">Junior Software Engineer at Cognizant</span> with 
              a B.Tech in Computer Science &amp; Engineering (IoT) from HITAM, Hyderabad. 
              I specialize in web development and have hands-on experience building 
              full-stack applications, deploying websites, and working with IoT devices.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              My journey includes internships at QTech Solutions, Digi Quanta, and 
              Swecha Organization — where I worked with React, Node.js, WordPress, 
              and embedded systems. I&apos;ve also explored 3D animation and VR 
              development using Blender and Unity3D.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m passionate about writing clean code, learning new technologies, 
              and building products that make a real impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-sm text-gray-500">Hyderabad, Telangana</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Education</h3>
                <p className="text-sm text-gray-500">B.Tech CSE (IoT), HITAM &mdash; CGPA: 8.17</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Interests</h3>
                <p className="text-sm text-gray-500">Web Dev, IoT, 3D Animation, VR</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
