import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

export default function LandingPage() {
  return (
    <main>
      <Hero />          {/* Hero je "use client" */}
      <Features />      {/* Features je "use client" */}
      <Testimonials />  {/* Testimonials je "use client" */}
    </main>
  );
}
