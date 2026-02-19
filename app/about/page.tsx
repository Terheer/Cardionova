export default function AboutPage() {
    return (
        <main className="pt-20">
            <section className="py-20 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-black mb-6">About CardioNova</h1>
                    <p className="text-xl text-black max-w-3xl mx-auto">
                        We are dedicated to providing world-class cardiology care. Our team of specialists is committed to your heart health using the latest technology and compassionate care.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 w-full relative">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center text-gray-400">
                            {/* Placeholder for the two doctors image - MOVED FROM HERO */}
                            <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center">
                                <div className="text-6xl mb-4">👨‍⚕️👩‍⚕️</div>
                                <p className="text-xl font-medium">Meet Our Medical Team</p>
                                <p className="text-sm">(Image Placeholder)</p>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[var(--primary-red)]/10 rounded-full blur-2xl"></div>
                    </div>

                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-black">Our Mission</h2>
                        <p className="text-black text-lg">
                            To improve the cardiovascular health of our community through excellence in patient care, research, and education.
                        </p>
                        <h2 className="text-3xl font-bold text-black">Why Choose Us?</h2>
                        <ul className="list-disc list-inside text-black space-y-2 text-lg">
                            <li>Board-certified cardiologists</li>
                            <li>State-of-the-art diagnostic facilities</li>
                            <li>Comprehensive care from prevention to rehabilitation</li>
                            <li>Patient-centered approach</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
