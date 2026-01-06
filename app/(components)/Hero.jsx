import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ isIntro }) {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Gray Background */}
            <motion.div
                initial={{ filter: "brightness(0.2)" }}
                animate={{ filter: isIntro ? "brightness(0.2)" : "brightness(1)" }}
                transition={{ duration: 2, ease: "linear", delay: 2 }} // Starts as header begins to shrink
                className="absolute inset-0 z-0">
                <Image
                    src="/table.png"
                    alt="Gray Background"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Text Overlay */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isIntro ? 0 : 1, y: isIntro ? 20 : 0 }}
                transition={{ duration: 1, delay: 1.2 }} // Fades in as header settles
                className="absolute inset-0 z-5 flex flex-col justify-center items-center text-center text-white pb-40"
            >
                <h3 className="text-sm md:text-md xl:text-lg font-light italic mb-4 tracking-wider text-gray-200">
                    Soft whispers of light chasing away the dark
                </h3>
                <h1 className="text-xl md:text-3xl font-bold mb-4 tracking-tight drop-shadow-lg">
                    Awaken Your Home's Soul
                </h1>
                <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm">
                    Explore Lights
                </button>
            </motion.div>

            {/* Lamp Overlay */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isIntro ? 0 : 1, scale: isIntro ? 0.9 : 1 }}
                transition={{ duration: 1.2, delay: 1.6 }} // Reveal lamp last
                className="absolute inset-0 bottom-0 flex justify-center items-center z-10"
            >
                <div className="w-56 h-56 mt-56 relative">
                    <Image
                        src="/hero-lamp.png"
                        alt="Lamp Background "
                        fill
                        className="object-cover z-20"
                        priority
                    />
                    <div className="absolute z-10 w-8 h-56 bg-gradient-to-b from-transparent to-black/40 bottom-0 left-0 rounded-[200%] transform -rotate-82 translate-y-19  translate-x-3"></div>
                </div>
            </motion.div>
        </section>
    );
}
