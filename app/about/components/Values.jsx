"use client";

import { motion } from "framer-motion";

const Meteor = ({ delay }) => {
    return (
        <motion.div
            initial={{
                x: "120%",
                y: "-20%",
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: "-20%",
                y: "120%",
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: 1.5,
                delay,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: Math.random() * 5 + 2
            }}
            style={{ left: Math.random() * 100 + "%" }}
            className="absolute w-50 h-px bg-linear-to-l from-amber-200 via-amber-200/50 to-transparent -rotate-45 blur-[1px] z-0"
        >
            {/* Meteor Head Glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-amber-200 rounded-full shadow-[0_0_10px_#fde68a]" />
        </motion.div>
    );
};

const ValueBox = ({ title, content, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="group relative h-80 bg-zinc-950/40 backdrop-blur-2xl border border-white/5 p-10 rounded-[2.5rem] overflow-hidden flex flex-col justify-end"
        >
            {/* Box Accent Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-amber-200/70 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200/40 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-amber-200/70 transition-all duration-700" />

            <span className="font-mono text-sm mb-4 block text-amber-200 transition-colors duration-500">
                0{index + 1}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">
                {title}
            </h3>
            <p className="text-zinc-300 font-light text-sm leading-relaxed transition-colors duration-500">
                {content}
            </p>

            {/* Hover Line */}
            <motion.div
                className="absolute bottom-0 left-0 h-1 bg-amber-200"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );
};

const values = [
    {
        title: "Atmospheric Soul",
        content: "We believe a light should tell a story. Every piece we design carries the intention of creating a specific mood, a deeper breath, and a moment of peace."
    },
    {
        title: "Timeless Quality",
        content: "Our lamps are built for the decades. We use materials that age with grace, ensuring that your sanctuary remains illuminated for a lifetime of memories."
    },
    {
        title: "Sustainable Glow",
        content: "Illumination shouldn't cost the earth. We source our components responsibly and design for energy efficiency, keeping the future's light as bright as ours."
    },
    {
        title: "Intentional Design",
        content: "Everything we do is calculated to serve the user's well-being. From the angle of the beam to the warmth of the bulb, every detail is intentional."
    }
];

export default function Values() {
    return (
        <section className="relative bg-[#020202] overflow-hidden px-8 md:px-24">
            {/* Meteor Rain Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <Meteor key={i} delay={Math.random() * 10} />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4">
                    {values.map((v, i) => (
                        <ValueBox key={i} title={v.title} content={v.content} index={i} />
                    ))}
                </div>

                <div className="mt-40 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-zinc-600 font-mono text-[10px] uppercase tracking-[1em]"
                    >
                        Endless Radiance • GlowFarm Philosophy • Harvesting Light
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
