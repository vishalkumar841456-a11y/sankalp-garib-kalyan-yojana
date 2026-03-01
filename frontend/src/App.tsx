import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
