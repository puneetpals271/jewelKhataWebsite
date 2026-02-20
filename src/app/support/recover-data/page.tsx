import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generatePageMetadata, generateArticleSchema } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Recover Your Data | Decoy PIN Backup',
  description:
    'Recover your JewelKhata data after using Decoy PIN. If you enabled cloud backup, use your recovery code to get your data back. Contact support with your 8-character code.',
  path: '/support/recover-data',
  noIndex: false,
});

export default function RecoverDataPage() {
  const jsonLd = generateArticleSchema({
    title: 'Recover Your Data - Decoy PIN Backup | JewelKhata',
    description:
      'How to recover your JewelKhata data after using Decoy PIN. Cloud backup recovery with your recovery code.',
    datePublished: '2026-02-09',
    dateModified: '2026-02-09',
    path: '/support/recover-data',
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Data Recovery (Decoy PIN Backup)
            </h1>
            <p className="text-gray-400 mb-12">
              Recover your real data after using Decoy PIN, if you enabled cloud backup.
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-primary-light mb-4">What is this?</h2>
                <p className="text-gray-300 leading-relaxed">
                  JewelKhata can back up your real data to the cloud when you use the Decoy PIN
                  feature. If you chose &quot;Backup my data to cloud&quot; when setting up Decoy PIN
                  and later unlocked the app with your Decoy PIN (so your real data was removed from
                  the device), you can recover that data using your <strong>recovery code</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-light mb-4">What you need</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    The <strong>8-character recovery code</strong> the app showed you when you
                    enabled &quot;Backup to cloud&quot; (e.g. <code className="bg-dark-card px-1 rounded">AB12CD34</code>).
                    It uses only letters A–Z and digits 2–9.
                  </li>
                  <li>If you saved your <strong>email or phone</strong> with the backup, we can look up your recovery code if you forgot it.</li>
                  <li>A way to receive the backup (email or secure link).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-light mb-4">How to recover</h2>
                <ol className="list-decimal list-inside text-gray-300 space-y-2">
                  <li>
                    Contact our support team with your <strong>recovery code</strong> (if you have it), or the
                    <strong> email or phone</strong> you gave when you enabled cloud backup (if you forgot the code).
                  </li>
                  <li>We will look up your backup and verify your identity.</li>
                  <li>
                    We will send you a secure link or the backup file. In the app: Settings → Restore data → &quot;Recover from cloud&quot; and enter your recovery code to restore.
                  </li>
                </ol>
              </section>

              <section className="rounded-xl bg-dark-card border border-primary/20 p-6">
                <h2 className="text-xl font-bold text-primary-light mb-3">Contact</h2>
                <p className="text-gray-300 mb-4">
                  Email us or use the contact form on the homepage. Include your recovery code and
                  how we can reach you.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:support@jewelkhata.app"
                      className="text-primary-light hover:underline"
                    >
                      support@jewelkhata.app
                    </a>
                  </li>
                  <li>
                    <strong>Contact form:</strong>{' '}
                    <Link href="/#contact" className="text-primary-light hover:underline">
                      jewelkhata.app/#contact
                    </Link>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-light mb-4">Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Backups are stored in an encrypted form and are only accessible with your recovery
                  code. We do not use your backup for any purpose other than helping you recover your
                  data.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
