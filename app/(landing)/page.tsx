import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Cta from "./components/Cta"
import './styles/motion-classic.css';

export default function LandingPage() {
  return (
    <div className="bg-light-vibrant text-light-vibrant-primary min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <Features />
        <Testimonials />
        
      </main>
      
    </div>
  );
}
