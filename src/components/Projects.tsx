"use client";

import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "Pixcy",
    subtitle: "AI Fashion Discovery Platform",
    description:
      "Search once, discover fashion everywhere. AI-powered platform with text, image & voice search across Myntra, Ajio, Amazon, Flipkart and more — with price comparison, AI styling assistant, and smart recommendations.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "Image Search", "Voice Search"],
    link: "",
    github: "",
    featured: true,
    badge: "Featured — AI",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "VR Campus Tour",
    subtitle: "Interactive 3D Virtual College Walkthrough",
    description:
      "WebVR campus tour of HITAM built with React Three Fiber. Explore buildings in 3D — Academic Block, Library, Labs, Auditorium — with interactive info panels, orbit controls, and dynamic sky.",
    tech: ["Next.js", "React Three Fiber", "Three.js", "TypeScript", "WebXR"],
    link: "",
    github: "",
    featured: true,
    badge: "Featured — VR/3D",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "WaveScope",
    subtitle: "Digital Waveform Viewer & EDA Analyzer",
    description:
      "Browser-based VCD waveform viewer with Canvas rendering, zoom/pan/cursor, AI-powered signal analysis, and Python CLI tools for timing violations.",
    tech: ["Next.js", "TypeScript", "Python", "Canvas API", "Gemini AI"],
    link: "https://wavescope-iota.vercel.app",
    github: "https://github.com/Reshmitha06/wavescope",
    featured: true,
    badge: "Featured — EDA Domain",
    gradient: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    title: "LogicForge",
    subtitle: "Digital Logic Simulator & Circuit Designer",
    description:
      "EDA logic simulator — boolean algebra parsing, truth tables, K-maps, SVG gate diagrams, Verilog code generation, and AI circuit design assistant.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "SVG", "Verilog"],
    link: "https://logicforge-khaki.vercel.app",
    github: "https://github.com/Reshmitha06/logicforge-",
    featured: true,
    badge: "Featured — EDA Domain",
    gradient: "from-blue-500/20 to-purple-500/10",
  },
  {
    title: "SnapShrink",
    subtitle: "Client-Side Image Compressor",
    description:
      "Batch image compressor & format converter with drag-and-drop, real-time preview, and compression stats — all processed locally in the browser.",
    tech: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS"],
    link: "https://snapshrink-three.vercel.app",
    github: "https://github.com/Reshmitha06/snapshrink",
    featured: false,
    gradient: "from-amber-500/20 to-orange-500/10",
  },
];

function WaveScopePreview() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
      <rect width="400" height="160" fill="#060d06" />
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 20 + 10} x2="400" y2={i * 20 + 10} stroke="#0d1f0d" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 20 }, (_, i) => (
        <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="160" stroke="#0d1f0d" strokeWidth="0.5" />
      ))}
      <polyline points="20,30 40,30 40,50 60,50 60,30 80,30 80,50 100,50 100,30 120,30 120,50 140,50 140,30 160,30 160,50 180,50 180,30 200,30 200,50 220,50 220,30 240,30 240,50 260,50 260,30 280,30 280,50 300,50 300,30 320,30 320,50 340,50 340,30 360,30 360,50 380,50" stroke="#22c55e" strokeWidth="1.5" opacity="0.8" />
      <polyline points="20,80 60,80 60,100 120,100 120,80 160,80 160,100 200,100 200,80 280,80 280,100 340,100 340,80 380,80" stroke="#06b6d4" strokeWidth="1.5" opacity="0.8" />
      <polyline points="20,130 40,120 100,120 100,140 160,140 160,120 240,120 240,140 300,140 300,120 360,120 380,130" stroke="#a78bfa" strokeWidth="1.5" opacity="0.6" />
      <text x="8" y="35" fill="#22c55e" fontSize="8" fontFamily="monospace" opacity="0.6">clk</text>
      <text x="8" y="85" fill="#06b6d4" fontSize="8" fontFamily="monospace" opacity="0.6">data</text>
      <text x="8" y="135" fill="#a78bfa" fontSize="8" fontFamily="monospace" opacity="0.6">bus</text>
    </svg>
  );
}

function LogicForgePreview() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
      <rect width="400" height="160" fill="#06060f" />
      <line x1="50" y1="50" x2="100" y2="50" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="80" x2="100" y2="80" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
      <path d="M100,40 L100,90 Q140,65 100,40 Z" stroke="#60a5fa" strokeWidth="1.5" fill="none" opacity="0.7" />
      <line x1="140" y1="65" x2="170" y2="65" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
      <text x="108" y="69" fill="#60a5fa" fontSize="9" fontFamily="monospace" opacity="0.5">AND</text>
      <line x1="200" y1="50" x2="240" y2="50" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
      <line x1="200" y1="80" x2="240" y2="80" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
      <path d="M240,40 Q250,40 270,65 Q250,90 240,90 Q255,65 240,40 Z" stroke="#a78bfa" strokeWidth="1.5" fill="none" opacity="0.7" />
      <line x1="270" y1="65" x2="300" y2="65" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
      <text x="244" y="69" fill="#a78bfa" fontSize="9" fontFamily="monospace" opacity="0.5">OR</text>
      <line x1="50" y1="130" x2="100" y2="130" stroke="#f472b6" strokeWidth="1" opacity="0.5" />
      <path d="M100,115 L140,130 L100,145 Z" stroke="#f472b6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="145" cy="130" r="4" stroke="#f472b6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <line x1="149" y1="130" x2="180" y2="130" stroke="#f472b6" strokeWidth="1" opacity="0.5" />
      <text x="107" y="134" fill="#f472b6" fontSize="9" fontFamily="monospace" opacity="0.5">NOT</text>
      <text x="300" y="40" fill="#4b5563" fontSize="8" fontFamily="monospace" opacity="0.4">A B | Y</text>
      <text x="300" y="52" fill="#4b5563" fontSize="8" fontFamily="monospace" opacity="0.3">0 0 | 0</text>
      <text x="300" y="64" fill="#4b5563" fontSize="8" fontFamily="monospace" opacity="0.3">0 1 | 0</text>
      <text x="300" y="76" fill="#4b5563" fontSize="8" fontFamily="monospace" opacity="0.3">1 0 | 0</text>
      <text x="300" y="88" fill="#60a5fa" fontSize="8" fontFamily="monospace" opacity="0.5">1 1 | 1</text>
    </svg>
  );
}

function SnapShrinkPreview() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
      <rect width="400" height="160" fill="#0f0a06" />
      <rect x="40" y="30" width="100" height="100" rx="6" stroke="#f59e0b" strokeWidth="1" fill="#f59e0b" fillOpacity="0.05" />
      <text x="65" y="75" fill="#f59e0b" fontSize="10" fontFamily="monospace" opacity="0.5">2.4 MB</text>
      <text x="60" y="90" fill="#f59e0b" fontSize="7" fontFamily="monospace" opacity="0.3">1920x1080</text>
      <line x1="160" y1="80" x2="220" y2="80" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
      <polygon points="220,75 230,80 220,85" fill="#f59e0b" fillOpacity="0.4" />
      <text x="175" y="72" fill="#f59e0b" fontSize="8" fontFamily="monospace" opacity="0.4">-78%</text>
      <rect x="250" y="45" width="70" height="70" rx="4" stroke="#f59e0b" strokeWidth="1" fill="#f59e0b" fillOpacity="0.08" />
      <text x="262" y="80" fill="#f59e0b" fontSize="10" fontFamily="monospace" opacity="0.6">520 KB</text>
      <text x="267" y="93" fill="#f59e0b" fontSize="7" fontFamily="monospace" opacity="0.3">WebP</text>
    </svg>
  );
}

function PixcyPreview() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
      <rect width="400" height="160" fill="#0d060f" />
      {/* Search bar */}
      <rect x="60" y="20" width="280" height="30" rx="15" stroke="#a855f7" strokeWidth="1" fill="#a855f7" fillOpacity="0.05" />
      <text x="80" y="40" fill="#a855f7" fontSize="10" fontFamily="monospace" opacity="0.5">bootcut trousers...</text>
      <circle cx="320" cy="35" r="8" stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M318,33 L322,37" stroke="#a855f7" strokeWidth="1.5" opacity="0.5" />
      {/* Product cards */}
      <rect x="30" y="65" width="65" height="80" rx="4" stroke="#a855f7" strokeWidth="0.5" fill="#a855f7" fillOpacity="0.04" />
      <rect x="35" y="70" width="55" height="40" rx="2" fill="#a855f7" fillOpacity="0.08" />
      <text x="38" y="120" fill="#a855f7" fontSize="6" fontFamily="monospace" opacity="0.4">Myntra</text>
      <text x="38" y="130" fill="#a855f7" fontSize="7" fontFamily="monospace" opacity="0.6">₹899</text>
      <rect x="110" y="65" width="65" height="80" rx="4" stroke="#ec4899" strokeWidth="0.5" fill="#ec4899" fillOpacity="0.04" />
      <rect x="115" y="70" width="55" height="40" rx="2" fill="#ec4899" fillOpacity="0.08" />
      <text x="118" y="120" fill="#ec4899" fontSize="6" fontFamily="monospace" opacity="0.4">Ajio</text>
      <text x="118" y="130" fill="#ec4899" fontSize="7" fontFamily="monospace" opacity="0.6">₹749</text>
      <rect x="190" y="65" width="65" height="80" rx="4" stroke="#a855f7" strokeWidth="0.5" fill="#a855f7" fillOpacity="0.04" />
      <rect x="195" y="70" width="55" height="40" rx="2" fill="#a855f7" fillOpacity="0.08" />
      <text x="198" y="120" fill="#a855f7" fontSize="6" fontFamily="monospace" opacity="0.4">Amazon</text>
      <text x="198" y="130" fill="#a855f7" fontSize="7" fontFamily="monospace" opacity="0.6">₹1,199</text>
      <rect x="270" y="65" width="65" height="80" rx="4" stroke="#ec4899" strokeWidth="0.5" fill="#ec4899" fillOpacity="0.04" />
      <rect x="275" y="70" width="55" height="40" rx="2" fill="#ec4899" fillOpacity="0.08" />
      <text x="278" y="120" fill="#ec4899" fontSize="6" fontFamily="monospace" opacity="0.4">Flipkart</text>
      <text x="278" y="130" fill="#ec4899" fontSize="7" fontFamily="monospace" opacity="0.6">₹649</text>
    </svg>
  );
}

function VRCampusTourPreview() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
      <rect width="400" height="160" fill="#060610" />
      {/* Ground */}
      <rect x="0" y="110" width="400" height="50" fill="#1a3a1a" />
      {/* Sky gradient */}
      <rect x="0" y="0" width="400" height="110" fill="#0a1628" />
      {/* Stars */}
      <circle cx="50" cy="20" r="1" fill="#fff" opacity="0.4" />
      <circle cx="150" cy="35" r="0.8" fill="#fff" opacity="0.3" />
      <circle cx="300" cy="15" r="1" fill="#fff" opacity="0.4" />
      <circle cx="350" cy="45" r="0.8" fill="#fff" opacity="0.3" />
      {/* Main building */}
      <rect x="140" y="50" width="120" height="60" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" opacity="0.8" />
      <rect x="140" y="45" width="120" height="8" fill="#374151" />
      {/* Windows */}
      <rect x="155" y="60" width="12" height="15" fill="#93c5fd" opacity="0.6" />
      <rect x="175" y="60" width="12" height="15" fill="#93c5fd" opacity="0.6" />
      <rect x="215" y="60" width="12" height="15" fill="#93c5fd" opacity="0.6" />
      <rect x="235" y="60" width="12" height="15" fill="#93c5fd" opacity="0.6" />
      {/* Gate */}
      <rect x="185" y="80" width="30" height="30" fill="#0d1628" />
      <rect x="183" y="75" width="34" height="5" fill="#8b4513" />
      {/* Side buildings */}
      <rect x="50" y="70" width="60" height="40" fill="#5b2c6f" stroke="#a855f7" strokeWidth="0.5" opacity="0.6" />
      <rect x="290" y="75" width="55" height="35" fill="#1a5276" stroke="#06b6d4" strokeWidth="0.5" opacity="0.6" />
      {/* Trees */}
      <polygon points="35,110 40,80 45,110" fill="#166534" opacity="0.7" />
      <polygon points="115,110 120,85 125,110" fill="#166534" opacity="0.7" />
      <polygon points="275,110 280,88 285,110" fill="#166534" opacity="0.7" />
      <polygon points="360,110 365,82 370,110" fill="#166534" opacity="0.7" />
      {/* Road */}
      <rect x="185" y="110" width="30" height="50" fill="#4a4a4a" />
      {/* HITAM text */}
      <text x="200" y="42" fill="#fbbf24" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.8">HITAM</text>
      {/* 3D indicator */}
      <text x="20" y="150" fill="#06b6d4" fontSize="7" fontFamily="monospace" opacity="0.5">WebVR • 3D</text>
    </svg>
  );
}

const previewMap: Record<string, () => React.ReactElement> = {
  WaveScope: WaveScopePreview,
  LogicForge: LogicForgePreview,
  SnapShrink: SnapShrinkPreview,
  Pixcy: PixcyPreview,
  "VR Campus Tour": VRCampusTourPreview,
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-heading mb-12"
        >
          Projects
          <span className="block w-12 h-0.5 bg-bdr-h mt-3" />
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, i) => {
            const Preview = previewMap[project.title];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group border border-bdr rounded-xl overflow-hidden bg-card hover:border-bdr-h transition-all duration-500 card-lift"
              >
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  {Preview && <Preview />}
                  {project.featured && (
                    <span className="absolute top-3 right-3 text-[10px] font-medium uppercase tracking-wider text-neutral-400 bg-black/60 backdrop-blur px-2 py-1 rounded">
                      {project.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-heading">{project.title}</h3>
                  <p className="text-xs text-sec mt-0.5 mb-3">{project.subtitle}</p>
                  <p className="text-sm text-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 bg-tag text-foreground rounded-full border border-bdr">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm pt-4 border-t border-bdr">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-heading font-medium hover:text-foreground transition-colors">
                        Live Demo &rarr;
                      </a>
                    ) : (
                      <span className="text-sec font-medium">In Development</span>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sec hover:text-foreground transition-colors">
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
