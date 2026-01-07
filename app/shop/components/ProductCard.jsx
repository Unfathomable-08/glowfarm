"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

export default function ProductCard({ product }) {
    return (
        <div className="relative rounded-lg w-full aspect-square bg-gray-100 overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
            {/* Content Overlay - revealed on hover */}
            <div className="absolute inset-0 z-20 p-2 border border-white/20 rounded-sm flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[1px]">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-[10px] font-bold text-amber-200 tracking-widest uppercase mb-1">
                            {product.category}
                        </p>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                            {product.name}
                        </h3>
                        <div className="flex items-center gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <FiStar
                                    key={i}
                                    className={`w-2.5 h-2.5 ${i < Math.floor(product.rating)
                                            ? "fill-[#ffd700] text-amber-200"
                                            : "text-gray-500"
                                        }`}
                                />
                            ))}
                            <span className="text-[8px] text-gray-300 ml-1">({product.rating})</span>
                        </div>
                    </div>
                    <p className="text-lg font-light text-white font-mono">
                        ${product.price}
                    </p>
                </div>
            </div>

            <div className="w-full h-full relative bg-black">
                <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    className="object-contain z-10 px-4 transform -translate-y-4 group-hover:scale-105 transition-transform duration-500"
                />

                {/* The Darkening Background Effect from Shop.jsx */}
                <motion.div
                    initial={{ filter: "brightness(1)" }}
                    whileInView={{ filter: "brightness(0.15)" }}
                    viewport={{ once: false }}
                    transition={{ duration: 3, ease: "linear", delay: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/gray-box.jpg"
                        alt="Background"
                        fill
                        className="opacity-100 object-cover"
                    />
                </motion.div>

                {/* Amber Glow Beam on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#ffd70020] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-5" />
            </div>
        </div>
    );
}
