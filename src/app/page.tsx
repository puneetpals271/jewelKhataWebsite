import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import DownloadSection from '@/components/DownloadSection';
import Customization from '@/components/Customization';
import Enterprise from '@/components/Enterprise';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Features />
        <DownloadSection />
        <Customization />
        <Enterprise />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
