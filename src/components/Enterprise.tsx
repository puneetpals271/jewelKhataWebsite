'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Enterprise() {
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
        setStatusMessage('Thanks! Our team will reach out shortly.');
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
        setStatusMessage('Unable to send request. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again later.');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="enterprise" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">Enterprise Solutions</h2>
          <p className="text-xl text-gray-300">For jewelry groups, franchises, and large retailers</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-light">What's Included</h3>
            <ul className="space-y-4">
              {[
                'Multi-location management',
                'Team collaboration tools',
                'Advanced analytics & reporting',
                'API access for integrations',
                'User management & permissions',
                'Audit logs and data compliance',
                'Cloud backup & recovery',
                'Priority customer support',
                'Training and onboarding',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-light mr-3 text-xl">✓</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-dark-card/70 to-dark-card/30 rounded-lg p-8 border border-primary/30 hover:border-primary/50 transition">
            <h3 className="text-2xl font-bold mb-6 text-primary-light">Get Started</h3>
            <p className="text-gray-300 mb-6">
              Contact our enterprise team to discuss your requirements and get a custom quote.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded bg-dark-bg/50 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 transition"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded bg-dark-bg/50 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded bg-dark-bg/50 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 transition"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded bg-dark-bg/50 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 transition"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements"
                rows={4}
                required
                className="w-full px-4 py-3 rounded bg-dark-bg/50 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 transition"
              />
              {status !== 'idle' && (
                <div
                  className={`rounded border px-4 py-3 text-sm ${
                    status === 'success'
                      ? 'border-green-600/40 bg-green-900/30 text-green-300'
                      : 'border-red-600/40 bg-red-900/30 text-red-300'
                  }`}
                >
                  {statusMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary-light to-primary text-dark-bg font-bold py-3 rounded hover:shadow-lg hover:shadow-primary/50 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Request Demo'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
