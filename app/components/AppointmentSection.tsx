'use client';
import { Video, Home, Building2, Calendar } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

const AppointmentSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVisitType, setSelectedVisitType] = useState('');

    const handleBookClick = (visitType: string) => {
        setSelectedVisitType(visitType);
        setIsModalOpen(true);
    };

    const options = [
        {
            title: "Online Consultation",
            description: "Connect with our specialists via secure video call from anywhere.",
            icon: <Video className="w-12 h-12 text-white" />,
            color: "bg-blue-500", // Accent color
            action: "Book Video Call"
        },
        {
            title: "Home Visit",
            description: "Schedule a doctor to visit you in the comfort of your home.",
            icon: <Home className="w-12 h-12 text-white" />,
            color: "bg-green-500", // Accent color
            action: "Request Home Visit"
        },
        {
            title: "Hospital Visit",
            description: "Book an in-person appointment at our state-of-the-art facility.",
            icon: <Building2 className="w-12 h-12 text-white" />,
            color: "bg-[var(--primary-red)]", // Primary brand color
            action: "Book Hospital Visit"
        }
    ];

    return (
        <section id="appointments" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Book Your Appointment</h2>
                    <p className="text-black max-w-2xl mx-auto">Choose the consultation method that suits you best. We are committed to providing care wherever you are.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {options.map((option, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className={`p-6 ${option.color} flex justify-center items-center`}>
                                {option.icon}
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-black mb-3">{option.title}</h3>
                                <p className="text-black mb-6">{option.description}</p>
                                <button
                                    onClick={() => handleBookClick(option.title)}
                                    className="w-full py-3 rounded-lg border-2 border-gray-200 text-black font-semibold hover:border-[var(--primary-red)] hover:text-[var(--primary-red)] transition"
                                >
                                    {option.action}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                visitType={selectedVisitType}
            />
        </section>
    );
};

export default AppointmentSection;
