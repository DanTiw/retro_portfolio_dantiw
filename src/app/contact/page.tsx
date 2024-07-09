"use client"
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                console.log("submitted")
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-t from-yellow-500 to-pink-500 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Me!</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-2xl font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="text-xl w-full  px-3 py-2 bg-cyan-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-2xl font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-xl w-full px-3 py-2 bg-cyan-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-2xl font-medium text-gray-700">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="text-xl w-full px-3 py-2 bg-cyan-800  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
                <p className="mt-4 text-green-600">Your message has been sent successfully!</p>
            )}
            {status === 'error' && (
                <p className="mt-4 text-red-600">There was an error sending your message. Please try again.</p>
            )}
        </form>
    );
};

export default ContactForm;