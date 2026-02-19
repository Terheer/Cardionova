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

      <StatsSection />

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

      <AIAgent />
    </main>
  );
}
