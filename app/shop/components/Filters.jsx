"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiRefreshCw } from "react-icons/fi";
import { categories } from "../data";

export default function Filters({
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    resetFilters,
    isOpen,
    onClose
}) {
    const content = (
        <div className="flex flex-col gap-10 p-8 h-full bg-[#050505] overflow-x-hidden">
            <div className="flex justify-between items-center lg:hidden">
                <h2 className="text-xl font-bold tracking-widest uppercase text-white">Refine Illumination</h2>
                <button onClick={onClose} className="p-2 text-white/50 hover:text-white transition-colors">
                    <FiX size={24} />
                </button>
            </div>

            {/* Categories */}
            <section>
                <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-amber-200 mb-6">Light Source</h3>
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 border ${selectedCategory === cat
                                ? "bg-amber-200 text-black border-[#ffd700] shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                                : "bg-transparent text-white border-white/40 hover:border-amber-200/70"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Price Range */}
            <section className="relative">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-amber-200">Luminosity (Price)</h3>
                    <span className="text-sm font-mono text-white">${priceRange}</span>
                </div>
                <div className="relative h-12 flex items-center">
                    {/* Visual Track */}
                    <div className="absolute w-full h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-amber-200 shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                            animate={{ width: `${(priceRange / 600) * 100}%` }}
                        />
                    </div>

                    {/* Actual Input */}
                    <input
                        type="range"
                        min="0"
                        max="600"
                        step="1"
                        value={priceRange}
                        onChange={(e) => setPriceRange(parseInt(e.target.value))}
                        className="absolute w-full h-1 opacity-0 cursor-pointer z-20"
                    />

                    {/* Custom Thumb */}
                    <motion.div
                        className="absolute w-4 h-4 bg-white rounded-full border-2 border-amber-200 shadow-[0_0_15px_rgba(255,215,0,1)] pointer-events-none z-10"
                        animate={{ left: `calc(${(priceRange / 600) * 100}% - 8px)` }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    />
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-mono text-white uppercase">
                    <span>$0</span>
                    <span>$600+</span>
                </div>
            </section>

            {/* Reset */}
            <button
                onClick={resetFilters}
                className="mt-auto flex items-center justify-center gap-2 py-4 border border-white/10 text-white hover:text-amber-200 hover:border-[#ffd700]/40 transition-all group"
            >
                <FiRefreshCw className="group-hover:rotate-180 transition-transform duration-700" size={14} />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">Recenter Light</span>
            </button>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 sticky top-24 h-[calc(100vh-120px)] border-r border-white/5 overflow-y-auto overflow-x-hidden bg-[#050505]">
                {content}
            </aside>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md z-100 lg:hidden"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="fixed bottom-0 left-0 right-0 h-[68vh] bg-[#050505] border-t border-white/10 z-101 lg:hidden rounded-t-[3rem] overflow-hidden"
                        >
                            <div className="w-12 h-1 bg-white/10 mx-auto mt-6 rounded-full" />
                            {content}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
