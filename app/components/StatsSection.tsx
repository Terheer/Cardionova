'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const stats = [
        { label: "Patients Treated", value: "10k+" },
        { label: "Expert Specialists", value: "50+" },
        { label: "Years Experience", value: "25+" },
        { label: "Satisfaction Rate", value: "99%" },
    ];

    return (
        <section className="py-20 bg-black text-white" ref={ref}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                                className="text-4xl lg:text-6xl font-bold text-[var(--primary-red)] mb-2"
                            >
                                {stat.value}
                            </motion.span>
                            <span className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
