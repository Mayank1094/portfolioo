import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
