"use client";

import { motion, AnimatePresence } from "framer-motion";
import AboutHero from "./AboutHero";
import Journey from "./Journey";
import Values from "./Values";

export default function AboutClient({ isIntro }) {
    return (
        <div className="bg-black text-white">
            <AnimatePresence>
                {!isIntro && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <AboutHero />
                        <Journey />
                        <Values />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
