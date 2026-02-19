import AppointmentSection from '../components/AppointmentSection';

export default function AppointmentsPage() {
    return (
        <main className="pt-20">
            <div className="bg-[var(--secondary-red)] py-12 text-center text-black">
                <h1 className="text-4xl font-bold">Book an Appointment</h1>
                <p className="mt-4 text-lg">Schedule your visit with our expert cardiologists.</p>
            </div>
            <AppointmentSection />
        </main>
    );
}
