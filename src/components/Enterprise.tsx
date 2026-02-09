export default function Enterprise() {
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

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded bg-dark-bg/50 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded bg-dark-bg/50 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded bg-dark-bg/50 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 transition"
              />
              <textarea
                placeholder="Tell us about your requirements"
                rows={4}
                className="w-full px-4 py-3 rounded bg-dark-bg/50 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 transition"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-light to-primary text-dark-bg font-bold py-3 rounded hover:shadow-lg hover:shadow-primary/50 transition transform hover:scale-105"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
