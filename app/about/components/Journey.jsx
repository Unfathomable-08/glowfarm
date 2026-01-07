"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2022",
    title: "The First Spark",
    content: "In a garage filled with vintage filaments and dreams of warmth, GlowFarm was founded. We didn't want to create gadgets; we wanted to capture the essence of a quiet evening.",
  },
  {
    year: "2024",
    title: "Celestial Aligned",
    content: "Partnering with global artisans and sustainable materials, we expanded our reach. Not into every corner of the world, but into the homes that value intentional shadows.",
  },
  {
    year: "2026",
    title: "The Infinite Bloom",
    content: "Presenting to the world a new standard of architectural radiance. Our lights don't just occupy space - they create sanctuary in every room they touch.",
  },
];

const Milestone = ({ milestone, index }) => {
  return (
    <div className="relative flex flex-col items-center mb-18 w-full md:flex-row md:justify-between md:mb-28">
      {/* Central Vertical Line (always visible) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-900 hidden md:block" />

      {/* Card - Full width on mobile, alternating sides on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false, margin: "-100px" }}
        className={`
          relative z-10 w-full max-w-md px-6 py-8 bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-3xl
          md:w-[45%] md:p-10
          ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
        `}
      >
        <span className="text-amber-200 font-mono text-3xl md:text-4xl font-bold tracking-tighter mb-4 block">
          {milestone.year}
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 uppercase tracking-wider">
          {milestone.title}
        </h3>
        <p className="text-zinc-300 font-light leading-relaxed text-sm md:text-base">
          {milestone.content}
        </p>
      </motion.div>

      {/* Central Light Point */}
      <div className="absolute z-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, backgroundColor: "#18181b" }}
          whileInView={{
            scale: 1,
            backgroundColor: "#fffbeb",
            boxShadow: [
              "0 0 0px rgba(251, 191, 36, 0)",
              "0 0 30px rgba(251, 191, 36, 0.8)",
              "0 0 60px rgba(251, 191, 36, 0.4)",
              "0 0 90px rgba(251, 191, 36, 1)",
            ],
          }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: false, margin: "-150px" }}
          className="w-8 h-8 rounded-full border-4 border-zinc-800 z-20"
        />

        {/* Connecting Vertical Beam (Downwards) */}
        {index < milestones.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: ["0px", "160px", "280px"] }} // Responsive height
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: false }}
            className="w-px bg-linear-to-b from-amber-200 to-transparent mt-8 md:mt-0"
          />
        )}
      </div>
    </div>
  );
};

export default function Journey() {
  return (
    <section className="relative py-20 bg-[#020202] overflow-hidden px-6 md:px-24">
      <div className="text-center mb-20 md:mb-40">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6"
        >
          Our <span className="text-amber-200">Radiant</span> Path
        </motion.h2>
        <div className="w-24 h-1 bg-amber-200/30 mx-auto rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Central Beam Line (Desktop only) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-900 z-0 hidden md:block" />

        {milestones.map((m, i) => (
          <Milestone key={i} milestone={m} index={i} />
        ))}
      </div>

      {/* Side Decorative Glows - Adjusted for mobile */}
      <div className="absolute top-1/3 -left-1/4 w-96 h-96 md:w-125 md:h-125 bg-amber-200/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 md:w-125 md:h-125 bg-white/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
    </section>
  );
}