"use client";

import { motion } from "framer-motion";
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiArrowRight } from "react-icons/fi";

const FooterLink = ({ children, href = "#" }) => (
    <motion.a
        href={href}
        whileHover={{ color: "#fff", textShadow: "0 0 15px rgba(255,255,255,0.8)" }}
        className="text-zinc-400 transition-all duration-300 relative group block py-1"
    >
        {children}
        <motion.span
            className="absolute bottom-0 left-0 h-px bg-white w-0 group-hover:w-full transition-all duration-500 shadow-[0_0_8px_white]"
        />
    </motion.a>
);

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] text-white py-24 overflow-hidden border-t border-white/5">

            {/* 1. Ambient Background Pulse */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-to-t from-zinc-200/20 via-transparent to-transparent blur-[150px] pointer-events-none z-0"
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    {/* Brand Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold tracking-tighter">GlowFarm</h3>
                        <p className="text-zinc-400 leading-relaxed font-light mt-4">
                            Harvesting light and cultivating atmosphere since the first spark of inspiration. Bringing the soul of the night into your modern sanctuary.
                        </p>
                        <div className="flex gap-6 mt-6">
                            {[FiInstagram, FiTwitter, FiFacebook, FiYoutube].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, color: "#fff", filter: "drop-shadow(0 0 8px white)" }}
                                    className="text-zinc-300 transition-all text-xl"
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-sm uppercase tracking-[0.3em] font-medium text-white/70">Sanctuary</h4>
                        <div className="space-y-2">
                            <FooterLink>The Collection</FooterLink>
                            <FooterLink>Bespoke Design</FooterLink>
                            <FooterLink>Atmosphere Guide</FooterLink>
                            <FooterLink>Light Studies</FooterLink>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="space-y-6">
                        <h4 className="text-sm uppercase tracking-[0.3em] font-medium text-white/70">Philosophy</h4>
                        <div className="space-y-2">
                            <FooterLink>Our Origin</FooterLink>
                            <FooterLink>Sustainability</FooterLink>
                            <FooterLink>Care & Craft</FooterLink>
                            <FooterLink>Press Office</FooterLink>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-sm uppercase tracking-[0.3em] font-medium text-white/70">Join the Glow</h4>
                        <p className="text-zinc-400 text-sm italic">Receive quiet updates and midnight arrivals.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Midnight email"
                                className="w-full bg-zinc-900/50 border border-zinc-500 py-3 px-4 rounded-full text-sm focus:outline-none focus:border-white/70 transition-all focus:bg-zinc-800"
                            />
                            <button className="absolute right-2 top-2 py-1.5 px-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center">
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Global Signature */}
                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <h1
                        className="text-6xl md:text-[10rem] font-bold text-white/20 tracking-tighter select-none pointer-events-none"
                    >
                        GLOW FARM
                    </h1>
                    <div className="text-zinc-300 text-xs uppercase tracking-widest text-center md:text-right">
                        <span>© 2026. THE ART OF RADIANCE.</span> <br />
                        <span className="mt-1 block opacity-90">DESIGNED BY <a className="underline pb-1" href="https://www.techdxon.com">TECHDXON</a></span>
                    </div>
                </div>
            </div>

        </footer>
    );
}



