'use client';

import Link from 'next/link';
import { Heart, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/appointments', label: 'Appointments' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) return;
      setVisible(false);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => setVisible(true), 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${visible || mobileOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <nav className="bg-white/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-[var(--primary-red)]"
            onClick={() => setMobileOpen(false)}
          >
            <Heart className="w-7 h-7 fill-current" />
            <span>CardioNova</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 text-black font-medium text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[var(--primary-red)] transition ${pathname === link.href ? 'text-[var(--primary-red)] font-semibold' : ''
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/appointments"
            className="hidden md:block bg-[var(--primary-red)] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Book Now
          </Link>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-4 rounded-xl font-medium text-base transition ${pathname === link.href
                    ? 'bg-[var(--secondary-red)] text-[var(--primary-red)] font-semibold'
                    : 'text-black hover:bg-gray-50 hover:text-[var(--primary-red)]'
                  }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointments"
              className="mt-3 bg-[var(--primary-red)] text-white text-center py-3 px-6 rounded-full font-semibold hover:bg-red-700 transition duration-300 shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
