import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import AboutSection from './components/AboutSection';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}