"use client";

import { motion, AnimatePresence } from "framer-motion";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactClient({ isIntro }) {
    return (
        <div className="bg-black text-white">
            <AnimatePresence>
                {!isIntro && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <ContactHero />
                        <ContactInfo />
                        <ContactForm />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
