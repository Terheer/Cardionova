import Link from 'next/link';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 group pointer-events-none">
      {/* Trigger area - 20px height for easier access */}
      <div className="h-6 w-full absolute top-0 left-0 hover:bg-transparent pointer-events-auto"></div>

      {/* Navbar Content */}
      <nav className="bg-white/95 backdrop-blur-md shadow-md py-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out pointer-events-auto">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[var(--primary-red)]">
            <Heart className="w-8 h-8 fill-current" />
            <span>CardioNova</span>
          </Link>
          <div className="hidden md:flex space-x-8 text-black font-medium">
            <Link href="/" className="hover:text-[var(--primary-red)] transition">Home</Link>
            <Link href="/appointments" className="hover:text-[var(--primary-red)] transition">Appointments</Link>
            <Link href="/services" className="hover:text-[var(--primary-red)] transition">Services</Link>
            <Link href="/blog" className="hover:text-[var(--primary-red)] transition">Blog</Link>
            <Link href="/about" className="hover:text-[var(--primary-red)] transition">About Us</Link>
          </div>
          <Link
            href="/appointments"
            className="bg-[var(--primary-red)] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
