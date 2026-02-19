'use client';
import { Activity, Heart, Stethoscope, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
    const services = [
        {
            title: "CONSULTATION",
            description: "Expert evaluation via video or in-person.",
            icon: <Stethoscope className="w-8 h-8 text-[var(--primary-red)]" />
        },
        {
            title: "DIAGNOSTICS",
            description: "Advanced imaging and heart monitoring.",
            icon: <Activity className="w-8 h-8 text-[var(--primary-red)]" />
        },
        {
            title: "CARE",
            description: "Personalized treatment and rehabilitation.",
            icon: <Heart className="w-8 h-8 text-[var(--primary-red)]" />
        },
        {
            title: "24/7 SUPPORT",
            description: "Round-the-clock emergency assistance.",
            icon: <Clock className="w-8 h-8 text-[var(--primary-red)]" />
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative subtle circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 border-t border-black pt-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group cursor-default"
                        >
                            <div className="mb-6 opacity-80 group-hover:opacity-100 transition duration-300 transform group-hover:scale-110 origin-left">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2 tracking-wide group-hover:text-[var(--primary-red)] transition">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 font-light text-sm group-hover:text-black transition">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
