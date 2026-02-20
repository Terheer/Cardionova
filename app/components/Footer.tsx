import Link from 'next/link';

// Anatomical heart SVG logo mark
const HeartLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        {/* Aortic arch */}
        <path
            d="M24 10 C24 10 22 6 17 6 C11 6 7 11 7 16 C7 22 12 27 17 31"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
        />
        {/* Right side curve */}
        <path
            d="M24 10 C24 10 26 6 31 6 C37 6 41 11 41 16 C41 22 36 27 31 31"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
        />
        {/* Main heart body fill */}
        <path
            d="M24 10 C22 8 18 6 14 7 C8 9 5 15 6 21 C7 28 13 33 18 37 L24 42 L30 37 C35 33 41 28 42 21 C43 15 40 9 34 7 C30 6 26 8 24 10Z"
            fill="currentColor"
            opacity="0.15"
        />
        {/* ECG / pulse line across the heart */}
        <path
            d="M10 22 L15 22 L18 16 L21 28 L24 19 L27 25 L30 22 L38 22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        {/* Left ventricle hint */}
        <path
            d="M18 37 C20 39 22 41 24 42 C26 41 28 39 30 37"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                {/* Top section: logo + links */}
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
                    {/* Branding */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[var(--primary-red)]">
                            <HeartLogo className="w-8 h-8 text-[var(--primary-red)]" />
                            <span>CardioNova</span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Advanced cardiac care you can trust, powered by innovation.
                        </p>
                    </div>

                    {/* Links grid */}
                    <div className="grid grid-cols-3 gap-x-10 gap-y-2 text-sm text-gray-400 text-center md:text-left">
                        {/* Col 1 */}
                        <div className="flex flex-col gap-2">
                            <p className="text-white font-semibold mb-1">Navigate</p>
                            <Link href="/" className="hover:text-[var(--primary-red)] transition">Home</Link>
                            <Link href="/about" className="hover:text-[var(--primary-red)] transition">About Us</Link>
                            <Link href="/services" className="hover:text-[var(--primary-red)] transition">Services</Link>
                        </div>
                        {/* Col 2 */}
                        <div className="flex flex-col gap-2">
                            <p className="text-white font-semibold mb-1">More</p>
                            <Link href="/blog" className="hover:text-[var(--primary-red)] transition">Blog</Link>
                            <Link href="/appointments" className="hover:text-[var(--primary-red)] transition">Appointments</Link>
                        </div>
                        {/* Col 3 */}
                        <div className="flex flex-col gap-2">
                            <p className="text-white font-semibold mb-1">Legal</p>
                            <a href="#" className="hover:text-[var(--primary-red)] transition">Privacy Policy</a>
                            <a href="#" className="hover:text-[var(--primary-red)] transition">Terms of Service</a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-xs">
                    © 2026 CardioNova. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
