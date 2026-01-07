"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        name: "Elena Rossi",
        role: "Interior Designer",
        quote: "The warmth of these lights is unlike anything I've worked with. They don't just illuminate; they transform the soul of a room.",
    },
    {
        id: 2,
        name: "Marcus Thorne",
        role: "Architect",
        quote: "Precision meets poetry. GlowFarm has mastered the balance between functional clarity and atmospheric mystery.",
    },
    {
        id: 3,
        name: "Sofia Chen",
        role: "Art Curator",
        quote: "Every filament feels curated. It's rare to find lighting that acts as both a tool and a masterpiece simultaneously.",
    },
    {
        id: 4,
        name: "Julian Vane",
        role: "Homeowner",
        quote: "Finally, a light that understands the quiet moments. It's the first thing I turn on and the last thing I'd ever replace.",
    }
];

const TestimonialCard = ({ testimonial, mouseX, mouseY }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-96 w-80 bg-[#1A1A1A] rounded-3xl p-8 overflow-hidden border border-white/5 flex flex-col justify-between"
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                style={{
                    background: useSpring(
                        `radial-gradient(400px circle at var(--x) var(--y), rgba(255, 246, 229, 0.08), transparent 80%)`,
                        { stiffness: 500, damping: 50 }
                    ),
                    '--x': mouseX,
                    '--y': mouseY
                }}
            />

            <div className="relative z-10">
                <div className="text-4xl text-amber-200/40 font-serif mb-6 italic">"</div>
                <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-200 transition-colors duration-500 italic">
                    {testimonial.quote}
                </p>
            </div>

            <div className="relative z-10">
                <div className="h-px w-12 bg-zinc-800 mb-6 group-hover:w-full transition-all duration-700 group-hover:bg-amber-200/30" />
                <h4 className="text-white text-xl font-semibold tracking-wide">{testimonial.name}</h4>
                <p className="text-zinc-500 text-sm uppercase tracking-widest mt-1">{testimonial.role}</p>
            </div>
        </motion.div>
    );
};

export default function Testimonials() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen bg-[#0a0a0a] py-32 px-4 md:px-8 overflow-hidden flex flex-col items-center justify-center"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="max-w-7xl w-full">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-amber-200/50 uppercase tracking-[1em] text-[10px] font-medium"
                    >
                        Echoes of Radiance
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mt-4 tracking-tighter"
                    >
                        Voices of the <span className="italic font-light text-zinc-500">Glow.</span>
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    {testimonials.map((t) => (
                        <TestimonialCard
                            key={t.id}
                            testimonial={t}
                            mouseX={mouseX}
                            mouseY={mouseY}
                        />
                    ))}
                </div>
            </div>

            {/* Floating Lens Flare Background */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"
            />
        </section>
    );
}
