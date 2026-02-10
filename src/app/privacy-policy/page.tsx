import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | JewelKhata',
  description: 'Privacy Policy for JewelKhata - Smart Jewelry Management System',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-bg">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-12">Last Updated: February 9, 2026</p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">1. Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  JewelKhata ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our jewelry management software and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">2.1 Information You Provide</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Account registration information (name, email, phone number)</li>
                      <li>Billing and payment information</li>
                      <li>Jewelry inventory and business data</li>
                      <li>Customer contact information and transaction history</li>
                      <li>Communication preferences and support tickets</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">2.2 Information Collected Automatically</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Device information (browser type, IP address, operating system)</li>
                      <li>Usage data (features accessed, time spent, interactions)</li>
                      <li>Cookies and tracking technologies</li>
                      <li>Location information (with your consent)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect for various purposes:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Sending promotional emails and updates (with opt-out option)</li>
                  <li>Responding to your inquiries and support requests</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Complying with legal obligations</li>
                  <li>Preventing fraudulent activities and ensuring platform security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">4. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. This includes use of SSL encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">5. Third-Party Sharing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Service providers who assist us in operating our website and services</li>
                  <li>Payment processors for transaction handling</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">6. Your Rights and Choices</h2>
                <p className="text-gray-300 leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to delete your data</li>
                  <li>Right to opt-out of marketing communications</li>
                  <li>Right to data portability</li>
                  <li>Right to restrict processing</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  To exercise these rights, please contact us at privacy@jewelkhata.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Some features may not function properly if cookies are disabled.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">8. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your personal data for as long as necessary to provide our services or as required by law. You can request deletion of your data at any time, subject to legal obligations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">9. International Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">10. Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  JewelKhata is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information and terminate the child's account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">11. Changes to Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with an updated "Last Updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">12. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-dark-card rounded-lg p-6 border border-primary/20">
                  <p className="text-gray-300 mb-2"><strong>Email:</strong> privacy@jewelkhata.com</p>
                  <p className="text-gray-300 mb-2"><strong>Support:</strong> support@jewelkhata.com</p>
                  <p className="text-gray-300"><strong>Website:</strong> www.jewelkhata.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
