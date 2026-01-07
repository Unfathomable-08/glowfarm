"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
    { id: 1, name: "Lumina Desk", src: "/lamp1.png" },
    { id: 2, name: "Aura Floor", src: "/lamp2.png" },
    { id: 3, name: "Nebula Pendant", src: "/lamp3.png" },
    { id: 4, name: "Solaris Wall", src: "/lamp1.png" },
    { id: 5, name: "Eclipse Table", src: "/lamp2.png" },
    { id: 6, name: "Zenith Chandelier", src: "/lamp3.png" },
    { id: 7, name: "Radiance Bedside", src: "/lamp1.png" },
    { id: 8, name: "Halo Ceiling", src: "/lamp2.png" },
    { id: 9, name: "Nova Outdoor", src: "/lamp3.png" },
    { id: 10, name: "Cosmos Spot", src: "/lamp1.png" },
    { id: 11, name: "Stellar Strip", src: "/lamp2.png" },
    { id: 12, name: "Galaxy Ring", src: "/lamp3.png" },
    { id: 13, name: "Galaxy Ring", src: "/lamp1.png" },
    { id: 14, name: "Galaxy Ring", src: "/lamp2.png" },
    { id: 15, name: "Galaxy Ring", src: "/lamp3.png" },
];

const chunkIntoColumns = (arr, numCols) => {
    const result = Array.from({ length: numCols }, () => []);
    arr.forEach((item, index) => {
        result[index % numCols].push(item);
    });
    return result;
};

export default function Shop({ isIntro }) {
    const columns = chunkIntoColumns(products, 5);

    return (
        <section className="bg-white relative text-black min-h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                viewport={{ margin: "-100px", once: false }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 5, ease: "linear", delay: 1 }}
                className="absolute inset-0 z-0 bg-black min-h-screen"
            />
            <div className="container mx-auto py-20 px-4 max-w-6xl">

                {/* Animate the entire grid when it enters the viewport */}
                <motion.div
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {columns.map((colItems, colIndex) => (
                        <motion.div
                            key={colIndex}
                            initial={{ y: 300 }}
                            viewport={{ once: false }}
                            whileInView={{ y: 0 }} // Now controlled by parent
                            transition={{
                                duration: 1.6,
                                delay: colIndex * 0.2, // Staggered delay per column
                                ease: "easeOut"
                            }}
                            className="flex flex-col gap-6"
                        >
                            {colItems.map((product) => (
                                <div
                                    key={product.id}
                                    className="relative rounded-lg w-full aspect-square bg-gray-100 overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="absolute inset-4 z-10 p-2 border border-white/30 rounded-[4px] flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm font-semibold text-white tracking-wider uppercase">
                                            {product.name}
                                        </p>
                                    </div>
                                    <div className="w-full h-full relative bg-black">
                                        <Image
                                            src={product.src}
                                            alt={product.name}
                                            fill
                                            className="object-contain z-5 px-4 transform -translate-y-4 group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <motion.div
                                            initial={{ filter: "brightness(1)" }}
                                            whileInView={{ filter: "brightness(0.3)" }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 3, ease: "linear", delay: 1 }}
                                            className="absolute inset-0 z-0">
                                            <Image
                                                src="/gray-box.jpg"
                                                alt="Heart"
                                                fill
                                                className="opacity-100 cursor-pointer"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}