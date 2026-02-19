import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "5 Tips for a Healthy Heart",
            excerpt: "Learn simple lifestyle changes that can significantly improve your cardiovascular health.",
            date: "October 15, 2025",
            author: "Dr. Sarah Smith"
        },
        {
            id: 2,
            title: "Understanding Blood Pressure",
            excerpt: "What do the numbers mean? We break down everything you need to know about hypertension.",
            date: "October 10, 2025",
            author: "Dr. James Wilson"
        },
        {
            id: 3,
            title: "The Benefits of Regular Exercise",
            excerpt: "How 30 minutes of daily activity can strengthen your heart and lower your risk of disease.",
            date: "October 5, 2025",
            author: "Dr. Emily Chen"
        }
    ];

    return (
        <main className="pt-20">
            <div className="bg-[var(--secondary-red)] py-12 text-center text-black">
                <h1 className="text-4xl font-bold">CardioNova Blog</h1>
                <p className="mt-4 text-lg">Latest news and health tips from our experts.</p>
            </div>

            <section className="py-20 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition hover:-translate-y-1">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                                <span>(Post {post.id} Image)</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                                    <span>{post.date}</span>
                                    <span>{post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">{post.title}</h3>
                                <p className="text-black mb-4">{post.excerpt}</p>
                                <Link href="#" className="text-[var(--primary-red)] font-semibold hover:underline">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
