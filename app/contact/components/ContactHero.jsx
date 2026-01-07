"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden px-8 pt-32">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200 blur-[200px] rounded-full" />
            </div>

            <div className="relative z-10 text-center max-w-4xl">
                <motion.span
                    initial={{ opacity: 0, letterSpacing: "0.2em" }}
                    whileInView={{ opacity: 1, letterSpacing: "1em" }}
                    transition={{ duration: 1.5 }}
                    className="text-amber-200 text-xs font-black uppercase mb-6 block"
                >
                    Connections
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-none mb-8"
                >
                    Illuminate Our <br />
                    <span className="text-amber-200 italic font-light">Inbox</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
                >
                    Whether it's a technical query or a spark of inspiration,
                    we're here to channel the radiance. Let's create something
                    atmospheric together.
                </motion.p>
            </div>

            {/* Decorative bottom line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 2, delay: 1.5 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-linear-to-r from-transparent via-amber-200/20 to-transparent"
            />
        </section>
    );
}
