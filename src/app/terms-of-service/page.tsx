import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generatePageMetadata, generateArticleSchema } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: 'Terms of Service for JewelKhata - Jewellery Management App. Review our usage terms, license agreement, and user responsibilities.',
  path: '/terms-of-service',
  noIndex: false,
});

export default function TermsOfService() {
  const jsonLd = generateArticleSchema({
    title: 'Terms of Service - JewelKhata',
    description: 'Terms of Service for JewelKhata - Jewellery Management App',
    datePublished: '2026-02-09',
    dateModified: '2026-02-09',
    path: '/terms-of-service',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-dark-bg">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400 mb-12">Last Updated: February 9, 2026</p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using JewelKhata ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to modify these terms at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">2. Use License</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on JewelKhata for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to reverse engineer, decompile, or disassemble any software</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Harassing or causing distress or inconvenience to any person</li>
                  <li>Disrupting the normal flow of dialogue within our website or applications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">3. Disclaimer</h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials on JewelKhata are provided on an 'as is' basis. JewelKhata makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">4. Limitations</h2>
                <p className="text-gray-300 leading-relaxed">
                  In no event shall JewelKhata or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JewelKhata, even if JewelKhata or a JewelKhata authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials appearing on JewelKhata could include technical, typographical, or photographic errors. JewelKhata does not warrant that any of the materials on its website are accurate, complete, or current. JewelKhata may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">6. Materials Copyright</h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials on JewelKhata's website are copyrighted. Any unauthorized use of the materials may violate copyright, trademark, and other laws. You are granted a limited license to view and print materials (information or software) on JewelKhata for personal, non-commercial use only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">7. Limitations on Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  To the fullest extent permitted by law, in no event will JewelKhata, its affiliates, or their respective officers, directors, employees or agents be liable to you or any third party for any indirect, incidental, special, consequential or punitive damages, including lost profits, or for any damages relating to your access to, use of, or inability to use the Service, even if JewelKhata has been advised of the possibility of such damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">8. Revisions and Errata</h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials appearing on JewelKhata's website could include technical, typographical, or photographic errors. JewelKhata does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">9. Links</h2>
                <p className="text-gray-300 leading-relaxed">
                  JewelKhata has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by JewelKhata of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">10. Modifications</h2>
                <p className="text-gray-300 leading-relaxed">
                  JewelKhata may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">11. Governing Laws</h2>
                <p className="text-gray-300 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">12. User Accounts and Registration</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you create an account on JewelKhata, you are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                  <li>Providing accurate and complete information during registration</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">13. Acceptable Use Policy</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You agree not to use JewelKhata for any unlawful purpose or in any way that could damage our service. Prohibited behavior includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Harassing or causing distress or inconvenience to any person</li>
                  <li>Disrupting normal flow of dialogue within our website</li>
                  <li>Attempting to gain unauthorized access to systems or databases</li>
                  <li>Transmitting obscene or offensive content</li>
                  <li>Engaging in commercial solicitation without our authorization</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">14. Payment Terms</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For paid services on JewelKhata:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Pricing is displayed before purchase and may change with notice</li>
                  <li>Payment must be received in full for order activation</li>
                  <li>Cancellations are subject to our refund policy</li>
                  <li>We reserve the right to suspend service for non-payment</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">15. Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to terminate or suspend your account and access to the Service at any time, without notice, for conduct that we believe violates this Terms of Service or is otherwise harmful to our business.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">16. Data Backup Responsibility</h2>
                <p className="text-gray-300 leading-relaxed">
                  While we take measures to protect your data, you are responsible for maintaining your own backup copies of any critical business data stored in JewelKhata.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-light mb-4">17. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-dark-card rounded-lg p-6 border border-primary/20">
                  <p className="text-gray-300 mb-2"><strong>Email:</strong> support@jewelkhata.com</p>
                  <p className="text-gray-300 mb-2"><strong>Legal:</strong> legal@jewelkhata.com</p>
                  <p className="text-gray-300"><strong>Website:</strong> www.jewelkhata.app</p>
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
