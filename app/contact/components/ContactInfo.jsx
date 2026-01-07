"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiClock, FiMapPin } from "react-icons/fi";

const InfoCard = ({ icon: Icon, title, content, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className="group relative bg-zinc-950/40 backdrop-blur-xl border p-8 rounded-3xl overflow-hidden border-amber-200/30 transition-all duration-500"
        >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/5 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-amber-200/20 transition-all duration-700" />

            <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 bg-zinc-900 rounded-2xl text-amber-200 group-hover:bg-amber-200 group-hover:text-black transition-all duration-500 shadow-lg">
                    <Icon size={24} />
                </div>
                <div>
                    <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-300 mb-2 group-hover:text-amber-200 transition-colors duration-500">
                        {title}
                    </h3>
                    <p className="text-lg font-medium text-white tracking-wide">
                        {content}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default function ContactInfo() {
    const infoItems = [
        {
            icon: FiMail,
            title: "Electronic Mail",
            content: "hello@glowfarm.com",
        },
        {
            icon: FiPhone,
            title: "Direct Line",
            content: "+1 (888) GLOW-FAR",
        },
        {
            icon: FiClock,
            title: "Operational Flux",
            content: "Mon - Fri | 11:00 - 20:00",
        }
    ];

    return (
        <section className="py-24 px-8 md:px-24 bg-black">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-3 gap-8">
                {infoItems.map((item, i) => (
                    <InfoCard
                        key={i}
                        {...item}
                        delay={0.2 + (i * 0.1)}
                        index={i}
                    />
                ))}
            </div>
        </section>
    );
}
