import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}