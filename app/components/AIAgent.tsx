'use client';
import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const AIAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
        { role: 'bot', text: "Hello! I'm Nova, your AI assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { role: 'user', text: input }]);
        const userInput = input;
        setInput("");

        // Mock AI response
        setTimeout(() => {
            let response = "I'm here to help with general inquiries. For medical advice, please book an appointment.";
            if (userInput.toLowerCase().includes('appointment')) {
                response = "You can book an appointment using the options in the 'Book Your Appointment' section above.";
            } else if (userInput.toLowerCase().includes('price') || userInput.toLowerCase().includes('cost')) {
                response = "Consultation fees vary. Online: $50, Home: $150, Hospital: $100. Please check our services page for details.";
            } else if (userInput.toLowerCase().includes('thank')) {
                response = "You're welcome! Stay healthy.";
            }

            setMessages(prev => [...prev, { role: 'bot', text: response }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[var(--primary-red)] text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition transform hover:scale-110 flex items-center gap-2"
                >
                    <Bot className="w-6 h-6" />
                    <span className="font-semibold hidden sm:inline">Ask Nova</span>
                </button>
            )}

            {isOpen && (
                <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-300">
                    {/* Header */}
                    <div className="bg-[var(--primary-red)] p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <Bot className="w-5 h-5" />
                            <h3 className="font-bold">Nova AI Support</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-red-700 p-1 rounded">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 h-80 overflow-y-auto p-4 bg-gray-50 space-y-3">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-[var(--primary-red)] text-white rounded-br-none'
                                        : 'bg-white border border-gray-200 text-black rounded-bl-none shadow-sm'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your question..."
                            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[var(--primary-red)]"
                        />
                        <button
                            onClick={handleSend}
                            className="bg-[var(--primary-red)] text-white p-2 rounded-full hover:bg-red-700 transition"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAgent;
