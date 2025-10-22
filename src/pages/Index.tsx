import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
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
