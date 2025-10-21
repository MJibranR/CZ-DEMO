import Header from '@/app/components/Header';
import AboutStory from '../components/AboutStory';
import CoreValues from '../components/CoreValues';
import AboutTeam from '../components/AboutTeam';
import Footer from '@/app/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black">
        <Header />
        <AboutStory />
        <CoreValues />
        <AboutTeam />
        <Footer />
    </main>
  );
}