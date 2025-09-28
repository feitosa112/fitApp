"use client"

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

import './styles/motion-classic.css';

export const dynamic = "force-dynamic";

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
