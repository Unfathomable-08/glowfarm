"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const chunkIntoColumns = (arr, numCols) => {
    const result = Array.from({ length: numCols }, () => []);
    arr.forEach((item, index) => {
        result[index % numCols].push(item);
    });
    return result;
};

export default function ProductGrid({ products }) {
    const columns = chunkIntoColumns(products, 4);

    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white p-8 rounded-2xl gap-6">
            <motion.div
                initial={{ opacity: 0 }}
                viewport={{ margin: "-100px", once: false }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 5, ease: "linear", delay: 1.5 }}
                className="absolute inset-0 z-0 bg-black min-h-screen"
            />
            {columns.map((colItems, colIndex) => (
                <motion.div
                    key={colIndex}
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 1.6,
                        delay: colIndex * 0.2, // Exact staggered delay from home page Shop.jsx
                        ease: "easeOut"
                    }}
                    className="flex flex-col gap-6"
                >
                    {colItems.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            ))}

            {products.length === 0 && (
                <div className="col-span-full py-20 text-center">
                    <h3 className="text-2xl text-gray-500 font-light tracking-widest uppercase opacity-40">
                        No products found in this light...
                    </h3>
                </div>
            )}
        </div>
    );
}
