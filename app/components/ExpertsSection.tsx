'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const experts = [
    {
        name: "Dr. Sarah Mitchell",
        title: "Chief of Cardiology",
        specialty: "Interventional Cardiology",
        experience: "18 years",
        education: "Harvard Medical School",
        bio: "Pioneering minimally invasive cardiac procedures with over 2,000 successful interventions.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
    },
    {
        name: "Dr. James Okafor",
        title: "Senior Cardiologist",
        specialty: "Electrophysiology",
        experience: "14 years",
        education: "Johns Hopkins University",
        bio: "Expert in heart rhythm disorders and advanced ablation techniques for complex arrhythmias.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80",
    },
    {
        name: "Dr. Emily Chen",
        title: "Cardiac Imaging Specialist",
        specialty: "Echocardiography & MRI",
        experience: "11 years",
        education: "Stanford University",
        bio: "Combining cutting-edge imaging technologies to deliver the most precise cardiac diagnostics.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&auto=format&fit=crop&q=80",
    },
    {
        name: "Dr. Marcus Rivera",
        title: "Preventive Cardiologist",
        specialty: "Preventive & Lipidology",
        experience: "9 years",
        education: "Mayo Clinic College",
        bio: "Dedicated to stopping heart disease before it starts through personalized prevention strategies.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80",
    },
];

const ExpertsSection = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60 z-0" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-[var(--primary-red)] font-semibold text-sm tracking-widest uppercase mb-3">
                        World-Class Specialists
                    </p>
                    <h2 className="text-4xl font-bold text-black tracking-tight">
                        MEET OUR EXPERTS
                    </h2>
                    <p className="mt-4 text-gray-500 font-light text-lg max-w-xl">
                        Our board-certified cardiologists bring decades of combined experience and a shared passion for heart health.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            whileHover={{ y: -6 }}
                            className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Photo */}
                            <div className="relative h-52 sm:h-64 w-full overflow-hidden">
                                <Image
                                    src={expert.image}
                                    alt={`Photo of ${expert.name}`}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                {/* Red overlay on hover */}
                                <div className="absolute inset-0 bg-[var(--primary-red)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-black leading-snug">{expert.name}</h3>
                                <p className="text-[var(--primary-red)] text-sm font-semibold mt-0.5">{expert.title}</p>

                                <div className="mt-4 space-y-1.5 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-black">Specialty:</span>
                                        <span>{expert.specialty}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-black">Experience:</span>
                                        <span>{expert.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-black">Education:</span>
                                        <span>{expert.education}</span>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-400 text-xs leading-relaxed font-light">{expert.bio}</p>

                                {/* Action icons — always visible on mobile, hover-only on desktop */}
                                <div className="mt-5 flex gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-[var(--primary-red)] hover:text-white text-gray-500 transition-colors duration-200"
                                        aria-label={`Email ${expert.name}`}
                                    >
                                        <Mail className="w-4 h-4" />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-[var(--primary-red)] hover:text-white text-gray-500 transition-colors duration-200"
                                        aria-label={`LinkedIn profile of ${expert.name}`}
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-14 text-center"
                >
                    <a
                        href="/appointments"
                        className="inline-block bg-[var(--primary-red)] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Book a Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ExpertsSection;
