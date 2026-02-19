import Hero from "./components/Hero";
import AppointmentSection from "./components/AppointmentSection";
import AIAgent from "./components/AIAgent";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <ServicesSection />

      {/* Why Choose Us - Minimalist */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-black mb-8 tracking-tight">WHY CARDIONOVA?</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
              We believe in cardiology that is accessible, precise, and human-centric. Our approach strips away the complexity of traditional healthcare, focusing entirely on what matters: your heart.
            </p>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              With state-of-the-art technology and a team of dedicated specialists, we provide care that is as efficient as it is effective. No waiting, no confusion. Just world-class heart care.
            </p>
            <div className="mt-12">
              <a href="/about" className="text-[var(--primary-red)] font-bold border-b border-[var(--primary-red)] pb-1 hover:text-red-800 hover:border-red-800 transition">
                READ OUR MANIFESTO
              </a>
            </div>
          </div>
        </div>
      </section>

      <AppointmentSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">CardioNova</h3>
            <p className="text-gray-400">© 2026 CardioNova. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--primary-red)] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--primary-red)] transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      <AIAgent />
    </main>
  );
}
