"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSettings, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ isIntro }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <motion.header
            initial={false}
            animate={{
                height: isIntro ? "100vh" : "4.5rem",
                backgroundColor: "black"
            }}
            transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: isIntro ? 0 : 0.5
            }}
            className="fixed top-0 left-0 right-0 z-50 text-white px-4 md:px-8 flex justify-between items-center overflow-hidden"
        >
            {/* Standard Nav (Hidden during intro) */}
            <nav className={`hidden md:flex items-center gap-6 transition-opacity duration-700 ${isIntro ? 'opacity-0' : 'opacity-100'}`}>
                <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
                <Link href="/shop" className="hover:text-gray-300 transition-colors">Shop</Link>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </nav>

            <button
                className={`md:hidden text-2xl z-50 relative transition-opacity duration-700 ${isIntro ? 'opacity-0' : 'opacity-100'}`}
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Brand Logo - Animates from Large Center to Top Center */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center`}>
                <motion.h1
                    layout
                    initial={{ opacity: 0, letterSpacing: "1em", scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        letterSpacing: isIntro ? "0.5em" : "0.2em",
                        scale: isIntro ? 1.5 : 1,
                        fontSize: isIntro ? "3rem" : "1.25rem",
                        fontWeight: "bold"
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                    }}
                    className="uppercase hidden md:block whitespace-nowrap"
                >
                    GlowFarm
                </motion.h1>

                <motion.h1
                    layout
                    initial={{ opacity: 0, letterSpacing: "1em", scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        letterSpacing: isIntro ? "0.5em" : "0.2em",
                        scale: isIntro ? 1.5 : 1,
                        fontSize: isIntro ? "1.25rem" : "1.25rem",
                        fontWeight: "bold"
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                    }}
                    className="uppercase md:hidden whitespace-nowrap"
                >
                    GlowFarm
                </motion.h1>
            </div>

            {/* Right Icons (Hidden during intro) */}
            <div className={`flex items-center gap-4 md:gap-6 text-xl transition-opacity duration-700 ${isIntro ? 'opacity-0' : 'opacity-100'}`}>
                <button aria-label="Settings" className="hover:text-gray-300 transition-colors hidden sm:block">
                    <FiSettings />
                </button>
                <button aria-label="Cart" className="hover:text-gray-300 transition-colors">
                    <FiShoppingCart />
                </button>
                <button aria-label="Account" className="hover:text-gray-300 transition-colors">
                    <FiUser />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden text-2xl font-light"
                    >
                        <Link href="/" onClick={toggleMenu} className="hover:text-gray-300">Home</Link>
                        <Link href="/about" onClick={toggleMenu} className="hover:text-gray-300">About</Link>
                        <Link href="/shop" onClick={toggleMenu} className="hover:text-gray-300">Shop</Link>
                        <Link href="/contact" onClick={toggleMenu} className="hover:text-gray-300">Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
