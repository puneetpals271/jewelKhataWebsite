'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Thank you! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setStatusMessage('Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('An error occurred. Please try again later.');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about JewelKhata? Want to schedule a demo or discuss
            custom solutions? We are here to help
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-dark-card/50 border border-primary/20 rounded-lg shadow-2xl shadow-primary/10 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-primary-light mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/20 bg-dark-bg/50 text-white rounded-lg focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/30 placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary-light mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/20 bg-dark-bg/50 text-white rounded-lg focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/30 placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-primary-light mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/20 bg-dark-bg/50 text-white rounded-lg focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/30 placeholder-gray-500"
                  placeholder="e.g. 214 291 6136"
                />

              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-primary-light mb-2"
                >
                  Company/Store Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary/20 bg-dark-bg/50 text-white rounded-lg focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/30 placeholder-gray-500"
                  placeholder="Your Jewelry Store"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-primary-light mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-primary/20 bg-dark-bg/50 text-white rounded-lg focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/30 resize-none placeholder-gray-500"
                placeholder="Tell us about your inquiry or how we can help..."
              />
            </div>

            {status !== 'idle' && (
              <div
                className={`p-4 rounded-lg ${
                  status === 'success'
                    ? 'bg-green-900/30 text-green-300 border border-green-600/30'
                    : 'bg-red-900/30 text-red-300 border border-red-600/30'
                }`}
              >
                {statusMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary-light to-primary text-dark-bg font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-primary/20 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-2">📧</div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-semibold text-primary-light">support@jewelkhata.app</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⏰</div>
              <p className="text-sm text-gray-400">Support Hours</p>
              <p className="font-semibold text-primary-light">9 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
