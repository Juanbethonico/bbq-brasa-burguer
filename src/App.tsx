import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Highlights } from '@/components/Highlights';
import { Menu } from '@/components/Menu';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Menu />
        <About />
      </main>
      <Footer />
    </div>
  );
}
