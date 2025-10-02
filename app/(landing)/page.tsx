


import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

import './styles/motion-classic.css';



export default function LandingPage() {
  return (
    <div className="bg-light-vibrant text-light-vibrant-primary min-h-screen">
     
      <main className="pt-20">
        <Hero />
        <Features />
        <Testimonials />
        
      </main>
      
    </div>
  );
}
