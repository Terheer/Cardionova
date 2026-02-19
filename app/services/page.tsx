import { Activity, HeartPulse, Stethoscope, Mic2 } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            title: "Cardiac Consultation",
            description: "Thorough evaluation of your heart health history and physical examination.",
            icon: <Stethoscope className="w-10 h-10 text-[var(--primary-red)]" />
        },
        {
            title: "Echocardiogram",
            description: "Ultrasound imaging to view the structure and function of your heart.",
            icon: <Activity className="w-10 h-10 text-[var(--primary-red)]" />
        },
        {
            title: "Stress Testing",
            description: "Monitoring your heart's performance during physical activity.",
            icon: <HeartPulse className="w-10 h-10 text-[var(--primary-red)]" />
        },
        {
            title: "Holter Monitoring",
            description: "24-48 hour recording of your heart's electrical activity.",
            icon: <Activity className="w-10 h-10 text-[var(--primary-red)]" />
        }
    ];

    return (
        <main className="pt-20">
            <div className="bg-[var(--secondary-red)] py-12 text-center text-black">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="mt-4 text-lg">Comprehensive care for every heartbeat.</p>
            </div>

            <section className="py-20 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition hover:-translate-y-1">
                            <div className="mb-4 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                            <p className="text-black">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
