"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const achievements = [
  {
    title: "Published in IUCEE Magazine",
    description:
      "Research article published in the IUCEE (Indo Universal Collaboration for Engineering Education) magazine, distributed across engineering institutions all over India.",
    type: "publication",
    image: "/achievements/iucee-magazine.jpg",
  },
  {
    title: "PR Lead — IUCEE-EWB HITAM",
    description:
      "Led Public Relations for IUCEE-EWB (Engineers Without Borders) chapter at HITAM for 18 months. Managed outreach, event communications, and community engagement across engineering networks.",
    type: "leadership",
    duration: "18 months",
  },
  {
    title: "Volunteer — ForACause NGO",
    description:
      "Active volunteer at ForACause NGO for 1 year. Contributed to social impact initiatives, community service drives, and awareness campaigns.",
    type: "volunteering",
    duration: "1 year",
  },
];

const typeIcons: Record<string, React.ReactElement> = {
  publication: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  leadership: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  volunteering: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-heading mb-12"
        >
          Achievements & Leadership
          <span className="block w-12 h-0.5 bg-bdr-h mt-3" />
        </motion.h2>

        <div className="space-y-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-bdr rounded-xl p-6 bg-card card-lift hover:border-bdr-h transition-all duration-300"
            >
              <div className="flex gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-subtle border border-bdr flex items-center justify-center text-sec">
                  {typeIcons[item.type]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-heading">{item.title}</h3>
                      {"duration" in item && (
                        <span className="text-[11px] text-muted uppercase tracking-wider">{item.duration}</span>
                      )}
                    </div>
                    <span className="flex-shrink-0 text-[10px] font-medium uppercase tracking-wider text-sec bg-tag px-2 py-1 rounded">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed mt-2">{item.description}</p>

                  {/* Image for publication */}
                  {"image" in item && item.image && (
                    <div className="mt-4 relative w-full h-48 rounded-lg overflow-hidden border border-bdr bg-subtle">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-muted text-xs">
                        Add image: public/achievements/iucee-magazine.jpg
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
