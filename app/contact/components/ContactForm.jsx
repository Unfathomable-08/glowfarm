"use client";

import { motion } from "framer-motion";
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook, FiSend } from "react-icons/fi";

const SocialLink = ({ icon: Icon, href, label }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 text-zinc-300 hover:text-amber-200 transition-colors duration-300 group"
        >
            <div className="p-3 bg-zinc-900 rounded-full group-hover:bg-amber-200/10 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all">
                <Icon size={20} />
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase">{label}</span>
        </motion.a>
    );
};

export default function ContactForm() {
    return (
        <section className="py-24 px-8 md:px-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                {/* Left Side: Narrative & Socials */}
                <div className="lg:w-1/3 flex flex-col justify-between py-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter"
                        >
                            Start the <br />
                            <span className="text-amber-200 italic font-light">Conversation</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-zinc-300 font-light leading-relaxed mb-12 text-lg"
                        >
                            We believe every message is a potential photon - an opportunity to
                            create shared brilliance. Reach out through our social frequencies
                            or the direct channel on the right.
                        </motion.p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-amber-200 mb-8">Social Frequencies</h3>
                        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                            <SocialLink icon={FiInstagram} label="Instagram" href="#" />
                            <SocialLink icon={FiTwitter} label="Twitter" href="#" />
                            <SocialLink icon={FiLinkedin} label="LinkedIn" href="#" />
                            <SocialLink icon={FiFacebook} label="Facebook" href="#" />
                        </div>
                    </div>
                </div>

                {/* Right Side: The Form */}
                <div className="lg:w-2/3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="p-10 md:p-16 bg-zinc-950/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] relative overflow-hidden"
                    >
                        {/* Corner Light */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-200/5 blur-[80px] rounded-full" />

                        <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-200 ml-4">Full Identity</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full bg-zinc-700/50 border border-white/5 rounded-xl mt-2 px-3 py-3 text-white placeholder:text-zinc-400 focus:outline-none focus:border-amber-200/50 focus:ring-1 focus:ring-amber-200/20 transition-all"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-200 ml-4">Digital Address</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full bg-zinc-700/50 border border-white/5 rounded-xl mt-2 px-3 py-3 text-white placeholder:text-zinc-400 focus:outline-none focus:border-amber-200/50 focus:ring-1 focus:ring-amber-200/20 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-200 ml-4">The Spark (Subject)</label>
                                <input
                                    type="text"
                                    placeholder="How can we illuminate your space?"
                                    className="w-full bg-zinc-700/50 border border-white/5 rounded-xl mt-2 px-3 py-3 text-white placeholder:text-zinc-400 focus:outline-none focus:border-amber-200/50 focus:ring-1 focus:ring-amber-200/20 transition-all"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-200 ml-4">The Narrative (Message)</label>
                                <textarea
                                    rows="5"
                                    placeholder="Describe your vision..."
                                    className="w-full bg-zinc-700/50 border border-white/5 rounded-xl mt-2 px-3 py-3 text-white placeholder:text-zinc-400 focus:outline-none focus:border-amber-200/50 focus:ring-1 focus:ring-amber-200/20 transition-all resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-6 bg-amber-200 text-black font-black uppercase tracking-[0.4em] text-xs rounded-2xl shadow-[0_10px_40px_rgba(251,191,36,0.3)] hover:shadow-[0_20px_60px_rgba(251,191,36,0.5)] transition-all flex items-center justify-center gap-4"
                            >
                                Illuminate Us <FiSend size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
