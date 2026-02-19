'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Plus } from 'lucide-react';
import { GiHeartOrgan } from 'react-icons/gi';

const Hero = () => {
    return (
        <section className="relative py-16 lg:py-32 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-red-50 via-white to-red-50">
            {/* Animated Red Gradient Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[var(--primary-red)]/20 to-[var(--secondary-red)]/20 rounded-full blur-3xl pointer-events-none"
            />

            {/* Floating Icons */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 text-[var(--primary-red)] pointer-events-none opacity-30"
            >
                <GiHeartOrgan size={48} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 right-1/4 text-[var(--secondary-red)] pointer-events-none opacity-20"
            >
                <Activity size={64} />
            </motion.div>
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/3 right-10 text-red-400 pointer-events-none opacity-10"
            >
                <GiHeartOrgan size={120} />
            </motion.div>
            <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 left-20 text-[var(--primary-red)] pointer-events-none opacity-20"
            >
                <Plus size={40} />
            </motion.div>

            {/* EKG Line Animation */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-10 pointer-events-none">
                <svg viewBox="0 0 1200 120" className="w-full h-auto">
                    <motion.path
                        d="M0,60 L200,60 L230,20 L260,100 L290,60 L350,60 L380,10 L410,110 L440,60 L1200,60"
                        fill="none"
                        stroke="var(--primary-red)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 text-center z-10 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl sm:text-7xl lg:text-9xl font-black text-black leading-none mb-6 tracking-tighter"
                >
                    CARDIO<span className="text-[var(--primary-red)]">NOVA</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg sm:text-2xl font-light text-black mb-8 sm:mb-12 max-w-2xl mx-auto tracking-wide"
                >
                    ADVANCED CARDIOLOGY. <br />
                    <span className="text-gray-500">PURE & PERSONAL.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto"
                >
                    <Link
                        href="/appointments"
                        className="w-full sm:w-auto text-center bg-[var(--primary-red)] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-xl hover:bg-black transition duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
                    >
                        BOOK APPOINTMENT
                    </Link>
                    <Link
                        href="/about"
                        className="w-full sm:w-auto text-center bg-transparent text-black border-2 border-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-xl hover:bg-black hover:text-white transition duration-300"
                    >
                        LEARN MORE
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
