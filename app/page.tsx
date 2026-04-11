import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import StickyCTA from './components/StickyCTA';
import TechBackground from './components/TechBackground';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <TechBackground />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <StickyCTA />
    </main>
  );
}
