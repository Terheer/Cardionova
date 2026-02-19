import Link from 'next/link';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[var(--primary-red)] mb-1">
                        <Heart className="w-6 h-6 fill-current" />
                        <span>CardioNova</span>
                    </Link>
                    <p className="text-gray-400 text-sm">© 2026 CardioNova. All rights reserved.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 text-sm">
                    <div className="flex flex-col gap-2 text-gray-400">
                        <Link href="/" className="hover:text-[var(--primary-red)] transition">Home</Link>
                        <Link href="/about" className="hover:text-[var(--primary-red)] transition">About Us</Link>
                        <Link href="/services" className="hover:text-[var(--primary-red)] transition">Services</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-400">
                        <Link href="/blog" className="hover:text-[var(--primary-red)] transition">Blog</Link>
                        <Link href="/appointments" className="hover:text-[var(--primary-red)] transition">Appointments</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-400">
                        <a href="#" className="hover:text-[var(--primary-red)] transition">Privacy Policy</a>
                        <a href="#" className="hover:text-[var(--primary-red)] transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
