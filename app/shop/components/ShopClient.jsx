"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSliders } from "react-icons/fi";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";
import { products } from "../data";

export default function ShopClient({ isIntro }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceRange, setPriceRange] = useState(600);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isIntro) {
            setIsLoaded(true);
        }
    }, [isIntro]);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
            const priceMatch = product.price <= priceRange;
            return categoryMatch && priceMatch;
        });
    }, [selectedCategory, priceRange]);

    const resetFilters = () => {
        setSelectedCategory("All");
        setPriceRange(600);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isIntro ? 0 : 1 }}
            transition={{ duration: 1 }}
            className={`container mx-auto md:px-6 max-w-360 pb-24 bg-black ${isIntro ? 'h-0 overflow-hidden' : 'pt-32'}`}
        >
            {/* Header Area */}
            <div className="flex flex-col max-md:px-4 md:flex-row justify-between items-end mb-16 gap-10">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, letterSpacing: "1em" }}
                        animate={{ opacity: isIntro ? 0 : 1, letterSpacing: isIntro ? "1em" : "0.2em" }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter text-white uppercase"
                    >
                        GLOW<span className="text-amber-200">SHOP</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isIntro ? 0 : 1, x: isIntro ? -20 : 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="text-[10px] font-black tracking-[0.6em] uppercase text-white/70 mt-4 ml-2"
                    >
                        Architectural Radiance Collection
                    </motion.p>
                </div>

                <div className="flex items-center gap-6">
                    <div className="text-right">
                        <span className="text-[10px] font-mono text-amber-200 uppercase tracking-widest block mb-1">
                            Available Flux
                        </span>
                        <span className="text-xs font-mono text-white/70 uppercase">
                            {filteredProducts.length} Sources
                        </span>
                    </div>
                    <button
                        onClick={() => setIsMobileFiltersOpen(true)}
                        className="lg:hidden flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-amber-200 transition-all"
                    >
                        <FiSliders size={16} />
                        Filters
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row relative">
                {/* Filters Sidebar */}
                {!isIntro && (
                    <Filters
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        resetFilters={resetFilters}
                        isOpen={isMobileFiltersOpen}
                        onClose={() => setIsMobileFiltersOpen(false)}
                    />
                )}

                {/* Product Grid Area */}
                <div className="flex-1 min-h-[70vh]">
                    <AnimatePresence mode="wait">
                        {isLoaded && !isIntro && (
                            <ProductGrid
                                key={`${selectedCategory}-${priceRange}`} // Re-trigger entry animation on filter
                                products={filteredProducts}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Thematic background glows */}
            <div className="fixed top-0 right-0 w-200 h-200 bg-amber-200/5 rounded-full blur-[150px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 left-0 w-150 h-150 bg-[#ff8c00]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
        </motion.div>
    );
}
