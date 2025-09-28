"use client";

import Cta from "./Cta";
import "../styles/hero.css"

export default function Hero() {
  return (
    <section className="hero">
      {/* Background slika */}
      <img
        src="/fitness-hero.jpg"
        alt="Fitness Hero Background"
        className="hero-bg"
      />

      {/* Overlay za kontrast */}
      <div className="hero-overlay">
        <h1 className="hero-title">
          Your Motion. Your Progress.
        </h1>
        <p className="hero-subtitle">
          Join DVeb Motion™ and reach your fitness goals faster.
        </p>
        <Cta />
      </div>
    </section>
  );
}
