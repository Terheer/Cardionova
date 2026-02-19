'use client';
import { X } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    visitType: string;
}

const BookingModal = ({ isOpen, onClose, visitType }: BookingModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        notes: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Booking request sent for ${visitType}! We will contact you at ${formData.email}.`);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 relative m-4">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-black mb-2">Book {visitType}</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll confirm your appointment.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-1">Full Name</label>
                        <input
                            required
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--primary-red)] focus:ring-1 focus:ring-[var(--primary-red)] transition"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-black mb-1">Email</label>
                            <input
                                required
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--primary-red)] focus:ring-1 focus:ring-[var(--primary-red)] transition"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-1">Phone</label>
                            <input
                                required
                                type="tel"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--primary-red)] focus:ring-1 focus:ring-[var(--primary-red)] transition"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black mb-1">Preferred Date</label>
                        <input
                            required
                            type="date"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--primary-red)] focus:ring-1 focus:ring-[var(--primary-red)] transition"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black mb-1">Notes (Optional)</label>
                        <textarea
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--primary-red)] focus:ring-1 focus:ring-[var(--primary-red)] transition"
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[var(--primary-red)] text-white py-4 rounded-lg font-bold hover:bg-red-700 transition transform active:scale-95"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
