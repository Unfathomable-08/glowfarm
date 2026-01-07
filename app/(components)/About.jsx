"use client";

import { motion } from "framer-motion";

const StreetLight = ({ height, delay }) => {
  return (
    <div className="relative flex flex-col items-center" style={{ height }}>
      {/* Pole */}
      <div className="w-1.5 md:w-2 bg-zinc-800 h-full rounded-t-full relative">
        {/* Cross arm / Lamp support */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-zinc-800 rounded-full" />

        {/* Lamp Head */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-6 bg-zinc-900 rounded-b-xl border-t border-zinc-700 overflow-hidden">
          {/* The Light Bulb (Glowing Part) */}
          <motion.div
            initial={{
              opacity: 0.4,
              backgroundColor: "#000",
              boxShadow: "0 0 0px 0px #ffffff", // Start with no glow
            }}
            whileInView={{
              opacity: 1,
              backgroundColor: "#fff6e5", // Warm light base
              boxShadow: `
                                0 0 20px 5px #ffffff,
                                0 0 40px 15px #ffd700,
                                0 0 80px 30px #ffaa00,
                                0 0 120px 50px rgba(255, 140, 0, 0.4)
                                `, // Multi-layered warm glow
            }}
            animate={{
              boxShadow: [
                `
                                    0 0 20px 5px #ffffff,
                                    0 0 40px 15px #ffd700,
                                    0 0 80px 30px #ffaa00,
                                    0 0 120px 50px rgba(255, 140, 0, 0.4)
                                `,
                `
                                    0 0 25px 8px #ffffff,
                                    0 0 50px 20px #ffd700,
                                    0 0 100px 40px #ffaa00,
                                    0 0 140px 60px rgba(255, 140, 0, 0.5)
                                `,
                `
                                    0 0 20px 5px #ffffff,
                                    0 0 40px 15px #ffd700,
                                    0 0 80px 30px #ffaa00,
                                    0 0 120px 50px rgba(255, 140, 0, 0.4)
                                `,
              ],
            }} // Subtle pulsing via keyframe-like array
            transition={{
              duration: 2.5,
              delay: delay,
              ease: "easeOut",
              boxShadow: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false }}
            className="absolute bottom-0 inset-x-0 h-4"
          />
        </div>

        {/* Ground Reflection / Beam Projection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.35, scale: 1.5 }}
          transition={{
            duration: 3,
            delay: delay + 0.5,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 bg-white blur-[50px] rounded-full pointer-events-none z-0"
        />
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section className="relative max-md:py-24 min-h-screen bg-[#050505] overflow-hidden flex flex-col md:flex-row items-end justify-between px-8 md:px-24 py-0">
      {/* Left: Street Lights */}
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

      {/* Right: Narrative Text */}
      <div className="flex flex-col justify-center h-full max-w-xl text-right pb-24">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
          className="text-4xl md:text-[52px] font-bold text-white mb-6 tracking-tight"
        >
          Guardians of Your <br />{" "}
          <span className="text-zinc-500 font-light italic">Evenings</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: false }}
          className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed"
        >
          Before homes were flooded with harsh light and glowing screens, lamps
          created warmth, calm, and presence. At GlowFarm, we design lighting
          that slows time - soft radiance that belongs in living rooms,
          bedrooms, and the quiet corners you call home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1.5, delay: 3.5 }}
          viewport={{ once: false }}
          className="h-px bg-linear-to-l from-white/30 to-transparent mt-12 self-end"
        />
      </div>
    </section>
  );
}
