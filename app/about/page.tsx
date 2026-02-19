'use client';

import ExpertsSection from '../components/ExpertsSection';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Microscope, Clock, Award, Users } from 'lucide-react';

const values = [
    {
        icon: <Heart className="w-7 h-7 text-[var(--primary-red)]" />,
        title: "Patient-First Care",
        description: "Every decision we make starts with the patient. Your comfort, dignity, and outcomes are always our top priority."
    },
    {
        icon: <Microscope className="w-7 h-7 text-[var(--primary-red)]" />,
        title: "Clinical Excellence",
        description: "We leverage the latest evidence-based medicine and cutting-edge technology to deliver the most accurate diagnoses."
    },
    {
        icon: <ShieldCheck className="w-7 h-7 text-[var(--primary-red)]" />,
        title: "Trust & Transparency",
        description: "We believe in open, honest communication — you'll always understand your condition and treatment options fully."
    },
    {
        icon: <Clock className="w-7 h-7 text-[var(--primary-red)]" />,
        title: "Always Available",
        description: "Heart conditions don't keep office hours. Our 24/7 support ensures you're never left without expert guidance."
    },
];

const stats = [
    { value: "10,000+", label: "Patients Treated" },
    { value: "50+", label: "Board-Certified Specialists" },
    { value: "25+", label: "Years of Excellence" },
    { value: "99%", label: "Patient Satisfaction" },
];

export default function AboutPage() {
    return (
        <main className="pt-20">

            {/* Hero Banner */}
            <section className="relative bg-black text-white py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--primary-red)] opacity-10 blur-3xl scale-150" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-red)] opacity-5 rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <p className="text-[var(--primary-red)] font-semibold text-sm tracking-widest uppercase mb-4">Who We Are</p>
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                            Redefining Heart Care for the Modern Age
                        </h1>
                        <p className="text-gray-300 text-xl font-light leading-relaxed">
                            CardioNova was founded on a simple belief: every person deserves access to world-class cardiovascular care. Through innovation, compassion, and relentless dedication, we're building the future of heart health.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="bg-[var(--primary-red)] text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <p className="text-4xl font-bold">{stat.value}</p>
                                <p className="text-red-100 text-sm mt-1 font-medium tracking-wide uppercase">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-[var(--primary-red)] font-semibold text-sm tracking-widest uppercase mb-3">Our Mission</p>
                            <h2 className="text-4xl font-bold text-black tracking-tight mb-6">
                                Advancing Cardiovascular Health for Everyone
                            </h2>
                            <p className="text-gray-500 font-light text-lg leading-relaxed mb-4">
                                We exist to dramatically improve the cardiovascular health of our community — through excellence in patient care, groundbreaking research, and a commitment to education that empowers patients to take control of their heart health.
                            </p>
                            <p className="text-gray-500 font-light text-lg leading-relaxed">
                                Founded by a group of leading cardiologists, CardioNova has grown from a single clinic into a network of specialized centers, always staying true to our founding principle: put the patient first, always.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { icon: <Award className="w-6 h-6" />, label: "Top-Rated Cardiology Center 2024" },
                                { icon: <Users className="w-6 h-6" />, label: "50+ Specialist Physicians" },
                                { icon: <ShieldCheck className="w-6 h-6" />, label: "ISO-Certified Facilities" },
                                { icon: <Heart className="w-6 h-6" />, label: "2,000+ Successful Procedures" },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 hover:border-[var(--primary-red)] transition-colors duration-300">
                                    <div className="text-[var(--primary-red)]">{item.icon}</div>
                                    <p className="text-black font-semibold text-sm leading-snug">{item.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <p className="text-[var(--primary-red)] font-semibold text-sm tracking-widest uppercase mb-3">What Drives Us</p>
                        <h2 className="text-4xl font-bold text-black tracking-tight">Our Core Values</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="mb-5 w-12 h-12 bg-[var(--secondary-red)] rounded-xl flex items-center justify-center">
                                    {v.icon}
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">{v.title}</h3>
                                <p className="text-gray-500 text-sm font-light leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experts */}
            <ExpertsSection />

        </main>
    );
}
