"use client";

import { motion } from "framer-motion";

const StreetLight = ({ height, delay }) => {
  return (
    <div
      className="relative h-screen flex flex-col items-center"
      style={{ height }}
    >
      {/* Pole */}
      <div className="w-2 bg-linear-to-b from-zinc-800 to-zinc-900 h-full rounded-t-full relative">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-zinc-800 rounded-full shadow-lg" />

        {/* Lamp Head */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-8 bg-zinc-900 rounded-b-2xl border-t border-zinc-700 overflow-hidden shadow-2xl">
          <motion.div
            initial={{ opacity: 0, backgroundColor: "#000" }}
            whileInView={{
              opacity: [0.4, 1, 0.8, 1],
              backgroundColor: "#fffbeb", // amber-50 equivalent
              boxShadow: [
                `0 0 20px 5px rgba(251, 191, 36, 0.4)`,
                `0 0 60px 20px rgba(251, 191, 36, 0.8)`,
                `0 0 40px 15px rgba(251, 191, 36, 0.6)`,
                `0 0 100px 40px rgba(251, 191, 36, 0.9)`,
              ],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute bottom-0 inset-x-0 h-5"
          />
        </div>

        {/* Volumetric Beam - more advanced */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 0.15, scaleY: 1 }}
          transition={{ duration: 2, delay: delay + 0.5 }}
          style={{ transformOrigin: "top" }}
          className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-[150%] bg-linear-to-b from-amber-200 via-amber-200/5 to-transparent blur-[60px] pointer-events-none"
        />

        {/* Ground Reflection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.4, scale: 2 }}
          transition={{ duration: 3, delay: delay + 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 w-50 h-40 bg-amber-200 blur-[80px] rounded-[100%] pointer-events-none"
        />
      </div>
    </div>
  );
};

export default function AboutHero() {
  return (
    <section className="relative min-h-screen bg-[#020202] overflow-hidden flex flex-col md:flex-row items-end justify-between px-8 md:px-24 pt-40 pb-0">
      <div className="hidden md:flex items-end gap-30 md:gap-40 -mb-0.5">
        <StreetLight height="40vh" delay={0.5} />
        <StreetLight height="55vh" delay={1.2} />
        <StreetLight height="75vh" delay={1.9} />
      </div>
      <div className="flex md:hidden items-end gap-24 mb-10">
        <StreetLight height="25vh" delay={0.5} />
        <StreetLight height="40vh" delay={1.2} />
        <StreetLight height="55vh" delay={1.9} />
      </div>

      <div className="flex flex-col justify-center h-full max-w-2xl text-right md:pb-42 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-[80px] font-bold text-white mb-6 tracking-tighter leading-none"
        >
          Architects of the <br />
          <span className="text-amber-200 italic font-light">Shadows</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-zinc-400 text-xl font-light leading-relaxed max-w-lg ml-auto"
        >
          We don't just sell lamps. We harvest the quiet energy of the evening.
          Our philosophy is simple: light should be felt, not just seen.
          GlowFarm is a sanctuary for those who seek to illuminate the soul of
          their sanctuary.
        </motion.p>
      </div>
    </section>
  );
}
